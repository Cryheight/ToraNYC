import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Subscribed!', {
        description: 'Thank you for joining our newsletter.',
      });
      setEmail('');
    }
  };

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="relative w-full bg-[#14171B]"
    >
      {/* Closing Image Section */}
      <div className="relative h-[50vh] lg:h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&q=80"
          alt="Tora NYC interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/60 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-[#F4F6FA] text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">
            TORA
          </h2>
          <p className="text-[#A9B0BC] text-xl">See you tonight.</p>
        </div>
      </div>

      {/* Contact & Info Section */}
      <div ref={contentRef} className="px-6 lg:px-[7vw] py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-[#F4F6FA] text-2xl font-bold mb-8">
              Hours & Location
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E1062C]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#E1062C]" />
                </div>
                <div>
                  <p className="text-[#F4F6FA] font-medium">Address</p>
                  <p className="text-[#A9B0BC]">
                    242 Himrod St, Brooklyn, NY 11237
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E1062C]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#E1062C]" />
                </div>
                <div>
                  <p className="text-[#F4F6FA] font-medium">Hours</p>
                  <div className="text-[#A9B0BC] space-y-1">
                    <p>Mon–Thu: 5:00 pm – 11:00 pm</p>
                    <p>Fri–Sat: 5:00 pm – 12:00 am</p>
                    <p>Sun: 5:00 pm – 10:00 pm</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E1062C]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#E1062C]" />
                </div>
                <div>
                  <p className="text-[#F4F6FA] font-medium">Phone</p>
                  <a
                    href="tel:+19295544996"
                    className="text-[#A9B0BC] hover:text-[#E1062C] transition-colors"
                  >
                    (929) 555-0142
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E1062C]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#E1062C]" />
                </div>
                <div>
                  <p className="text-[#F4F6FA] font-medium">Email</p>
                  <a
                    href="mailto:hello@toranyc.com"
                    className="text-[#A9B0BC] hover:text-[#E1062C] transition-colors"
                  >
                    hello@toranyc.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div>
            <h3 className="text-[#F4F6FA] text-2xl font-bold mb-4">
              Stay in the loop
            </h3>
            <p className="text-[#A9B0BC] mb-6">
              Get monthly menus, drink drops, and event invites.
            </p>

            <form onSubmit={handleSubscribe} className="mb-8">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 px-4 py-3 bg-[#0B0C0E] border border-[#F4F6FA]/10 rounded-full text-[#F4F6FA] placeholder:text-[#A9B0BC]/50 focus:outline-none focus:border-[#E1062C]/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#E1062C] hover:bg-[#b80524] text-white rounded-full font-medium transition-colors flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div>
              <p className="text-[#A9B0BC] text-sm mb-4">Follow us</p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#0B0C0E] flex items-center justify-center text-[#A9B0BC] hover:bg-[#E1062C] hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F4F6FA]/5 px-6 lg:px-[7vw] py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <p className="text-[#A9B0BC]/60 text-sm">
            © Tora NYC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => {
                const menuSection = document.getElementById('menu-section');
                menuSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#A9B0BC]/60 hover:text-[#F4F6FA] text-sm transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => {
                toast.info('Reservations', {
                  description: 'Call us at (929) 555-0142 to make a reservation.',
                });
              }}
              className="text-[#A9B0BC]/60 hover:text-[#F4F6FA] text-sm transition-colors"
            >
              Reservations
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
