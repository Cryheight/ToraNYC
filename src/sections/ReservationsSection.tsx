import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

export function ReservationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        panelRef.current,
        { x: '-60vw', opacity: 0.5 },
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
        contentRef.current,
        { x: '-30vw', opacity: 0 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBookTable = () => {
    toast.info('Reservation system coming soon!', {
      description: 'Please call us at (929) 555-0142 to make a reservation.',
    });
  };

  const handlePlanEvent = () => {
    toast.info('Private events', {
      description: 'Contact us at hello@toranyc.com for private event inquiries.',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80vh] lg:h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80"
          alt="Cocktail bar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/80 via-[#0B0C0E]/40 to-[#0B0C0E]/60" />
      </div>

      {/* Red Racing Stripe */}
      <div className="absolute right-0 top-0 w-[6vw] min-w-[40px] h-full tora-stripe z-10" />

      {/* Content Panel */}
      <div
        ref={panelRef}
        className="absolute top-0 left-0 w-full lg:w-[44vw] h-full bg-[#0B0C0E]/88 backdrop-blur-sm z-20"
      >
        <div
          ref={contentRef}
          className="h-full flex flex-col justify-center px-8 lg:px-[7vw] py-20"
        >
          <h2 className="text-[#F4F6FA] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.92] mb-6">
            Reservations
          </h2>
          <p className="text-[#A9B0BC] text-lg max-w-md mb-8 leading-relaxed">
            Walk-ins welcome. Reservations recommended for dinner and weekends.
            Groups of 8+ can book a private experience.
          </p>

          {/* Event Chip */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F4F6FA]/20 w-fit mb-8">
            <Users className="w-4 h-4 text-[#E1062C]" />
            <span className="text-[#A9B0BC] text-sm">
              Private events & group dining
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleBookTable}
              className="tora-btn-primary flex items-center gap-2 group"
            >
              <Calendar className="w-4 h-4" />
              Book a Table
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={handlePlanEvent}
              className="tora-btn-secondary"
            >
              Plan an Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
