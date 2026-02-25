import { useState, useEffect } from 'react';
import { NavigationDrawer } from './NavigationDrawer';
import { CartSheet } from './CartSheet';

interface HeaderProps {
  onContactClick: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-section');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0C0E]/90 backdrop-blur-md border-b border-[#F4F6FA]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <a href="/" className="text-[#F4F6FA] font-bold text-2xl tracking-tight">
          TORA
        </a>

        {/* Center Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={scrollToMenu}
            className="text-[#A9B0BC] hover:text-[#F4F6FA] text-sm font-medium transition-colors"
          >
            Menu
          </button>
          <button
            onClick={onContactClick}
            className="text-[#A9B0BC] hover:text-[#F4F6FA] text-sm font-medium transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <CartSheet />
          <NavigationDrawer onContactClick={onContactClick} />
        </div>
      </div>
    </header>
  );
}
