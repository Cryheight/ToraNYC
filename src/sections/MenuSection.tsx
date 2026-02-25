import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 'sake-don',
    name: 'Sake Don',
    description: 'Fresh salmon sashimi over seasoned rice with ikura and seaweed',
    price: 22,
    category: 'Donburi',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80',
  },
  {
    id: 'tonkotsu-ramen',
    name: 'Tonkotsu Ramen',
    description: 'Creamy pork broth, wheat noodles, chashu, egg, scallions',
    price: 20,
    category: 'Ramen',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80',
  },
  {
    id: 'tora-don',
    name: 'Tora Don',
    description: 'Scallops, uni, king crab, ikura, botan ebi over sushi rice',
    price: 45,
    category: 'Donburi',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&q=80',
  },
  {
    id: 'yakitori-set',
    name: 'Yakitori Set',
    description: 'Assorted grilled skewers: chicken thigh, pork belly, vegetables',
    price: 22,
    category: 'Yakitori',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80',
  },
  {
    id: 'spicy-tuna-roll',
    name: 'Spicy Tuna Roll',
    description: 'Fresh tuna, spicy mayo, cucumber, sesame seeds',
    price: 16,
    category: 'Rolls',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80',
  },
  {
    id: 'karaage',
    name: 'Karaage',
    description: 'Japanese fried chicken with homemade sauce and lemon',
    price: 15,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80',
  },
  {
    id: 'tora-highball',
    name: 'Tora Highball',
    description: 'Toki Japanese whisky, soda, umeshu, pickled plum, lemon oil',
    price: 16,
    category: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80',
  },
  {
    id: 'sashimi-plate',
    name: 'Sashimi Plate',
    description: "Chef's selection of 15 pieces of seasonal fish",
    price: 45,
    category: 'Sashimi',
    image: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745?w=600&q=80',
  },
];

export function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Grid items animation
      const cards = gridRef.current?.querySelectorAll('.menu-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
      description: item.description,
    });
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <section
      id="menu-section"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#0B0C0E] py-20 lg:py-32"
    >
      <div className="px-6 lg:px-[7vw]">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <p className="font-mono text-xs tracking-[0.12em] text-[#E1062C] mb-4">
            OUR OFFERINGS
          </p>
          <h2
            ref={titleRef}
            className="text-[#F4F6FA] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight"
          >
            Menu
          </h2>
        </div>

        {/* Menu Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="menu-card group relative bg-[#14171B] rounded-xl overflow-hidden border border-[#F4F6FA]/5 hover:border-[#E1062C]/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14171B] to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 bg-[#0B0C0E]/80 backdrop-blur-sm rounded-full text-xs font-mono text-[#A9B0BC]">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-[#F4F6FA] font-bold text-lg">{item.name}</h3>
                  <span className="text-[#E1062C] font-bold">${item.price}</span>
                </div>
                <p className="text-[#A9B0BC] text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#0B0C0E] text-[#F4F6FA] font-medium hover:bg-[#E1062C] transition-all duration-300"
                >
                  <Plus className="w-4 h-4" />
                  Add Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#A9B0BC] mb-4">
            Explore our complete menu with more dishes, drinks, and specials
          </p>
          <button
            onClick={() =>
              toast.info('Full menu coming soon!', {
                description: 'Visit us in person to see our complete offerings.',
              })
            }
            className="tora-btn-secondary"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
