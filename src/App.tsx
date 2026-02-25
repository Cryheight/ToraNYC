import { useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/Header';
import { HeroSection } from '@/sections/HeroSection';
import { FeatureSection } from '@/sections/FeatureSection';
import { MenuSection } from '@/sections/MenuSection';
import { ReservationsSection } from '@/sections/ReservationsSection';
import { Footer } from '@/sections/Footer';
import { AboutPage } from '@/pages/AboutPage';
import { toast } from 'sonner';

function HomePage() {
  const scrollToFooter = useCallback(() => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-section');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#0B0C0E] min-h-screen">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Header */}
      <Header onContactClick={scrollToFooter} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Feature Section - Modern Japanese */}
        <FeatureSection
          title="Modern Japanese"
          description="Seasonal ingredients, precise technique, and the kind of warmth that only happens when the kitchen stays open late."
          ctaText="Explore the Menu"
          ctaAction={scrollToMenu}
          image="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&q=80"
          alignment="left"
        />

        {/* Feature Section - Brooklyn Nights */}
        <FeatureSection
          title="Brooklyn Nights"
          description="Cocktails built like playlists. Small plates made for sharing. A room that feels better as the night gets longer."
          ctaText="Reserve a Table"
          ctaAction={() =>
            toast.info('Reservations', {
              description: 'Call us at (929) 555-0142 to make a reservation.',
            })
          }
          image="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80"
          alignment="right"
        />

        {/* Menu Section */}
        <MenuSection />

        {/* Reservations Section */}
        <ReservationsSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Toast notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#14171B',
            color: '#F4F6FA',
            border: '1px solid rgba(244, 246, 250, 0.1)',
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
