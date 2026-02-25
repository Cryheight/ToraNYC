import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FeatureSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaAction: () => void;
  image: string;
  alignment: 'left' | 'right';
}

export function FeatureSection({
  title,
  description,
  ctaText,
  ctaAction,
  image,
  alignment,
}: FeatureSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const content = contentRef.current;

      if (!panel || !content) return;

      const entranceX = alignment === 'left' ? '-60vw' : '60vw';
      const contentX = alignment === 'left' ? '-30vw' : '30vw';

      // Entrance animation
      gsap.fromTo(
        panel,
        { x: entranceX, opacity: 0.5 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        content,
        { x: contentX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Subtle parallax on scroll
      gsap.to(content, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [alignment]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80vh] lg:h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/70 via-[#0B0C0E]/40 to-[#0B0C0E]/70" />
      </div>

      {/* Red Racing Stripe */}
      <div className="absolute right-0 top-0 w-[6vw] min-w-[40px] h-full tora-stripe z-10" />

      {/* Content Panel */}
      <div
        ref={panelRef}
        className={`absolute top-0 ${
          alignment === 'left' ? 'left-0' : 'right-0'
        } w-full lg:w-[44vw] h-full bg-[#0B0C0E]/88 backdrop-blur-sm z-20`}
      >
        <div
          ref={contentRef}
          className="h-full flex flex-col justify-center px-8 lg:px-[7vw] py-20"
        >
          <h2 className="text-[#F4F6FA] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.92] mb-6">
            {title.split(' ').map((word, i) => (
              <span key={i}>
                {word}
                {i < title.split(' ').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-[#A9B0BC] text-lg max-w-md mb-8 leading-relaxed">
            {description}
          </p>
          <button
            onClick={ctaAction}
            className="tora-btn-primary w-fit flex items-center gap-2 group"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
