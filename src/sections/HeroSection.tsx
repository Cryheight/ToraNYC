import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const microRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Auto-play entrance animation on load
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        microRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.2
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.3
        )
        .fromTo(
          subheadRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.5
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.7
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%',
          pin: false,
          scrub: 0.5,
        },
      });

      scrollTl
        .to(headlineRef.current, {
          x: '-15vw',
          opacity: 0.3,
          ease: 'power2.in',
        })
        .to(
          subheadRef.current,
          {
            x: '-10vw',
            opacity: 0.2,
            ease: 'power2.in',
          },
          '<'
        )
        .to(
          ctaRef.current,
          {
            x: '-8vw',
            opacity: 0.2,
            ease: 'power2.in',
          },
          '<'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-section');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-[#0B0C0E]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
          alt="Japanese restaurant interior"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 tora-gradient-overlay" />
      </div>

      {/* Red Racing Stripe */}
      <div className="absolute right-0 top-0 w-[6vw] min-w-[40px] h-full tora-stripe z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-[7vw]">
        <p
          ref={microRef}
          className="font-mono text-xs tracking-[0.12em] text-[#A9B0BC] mb-6 opacity-0"
        >
          EST. 2019 • BROOKLYN, NY
        </p>

        <h1
          ref={headlineRef}
          className="text-[#F4F6FA] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-[0.92] mb-6 opacity-0"
        >
          Modern
          <br />
          Japanese
        </h1>

        <p
          ref={subheadRef}
          className="text-[#A9B0BC] text-lg sm:text-xl max-w-md mb-10 opacity-0"
        >
          Brooklyn izakaya + cocktail bar
        </p>

        <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0">
          <button
            onClick={scrollToMenu}
            className="tora-btn-primary flex items-center gap-2"
          >
            View Menu
            <ChevronDown className="w-4 h-4" />
          </button>
          <a href="tel:+19295544996" className="tora-btn-secondary">
            Call to Reserve
          </a>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0C0E] to-transparent z-10" />
    </section>
  );
}
