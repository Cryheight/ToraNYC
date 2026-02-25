import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Info, Phone, ChevronRight } from 'lucide-react';

interface NavigationDrawerProps {
  onContactClick: () => void;
}

export function NavigationDrawer({ onContactClick }: NavigationDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleAboutClick = () => {
    setIsOpen(false);
    navigate('/about');
  };

  const handleContactClick = () => {
    setIsOpen(false);
    onContactClick();
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-[#F4F6FA] hover:bg-[#F4F6FA]/10"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[320px] sm:w-[400px] bg-[#0B0C0E] border-l border-[#F4F6FA]/10 p-0"
      >
        <div className="flex flex-col h-full">
          <SheetHeader className="p-6 border-b border-[#F4F6FA]/10">
            <SheetTitle className="text-[#F4F6FA] font-bold text-2xl tracking-tight">
              TORA
            </SheetTitle>
          </SheetHeader>

          <nav className="flex-1 py-6">
            <div className="px-4 space-y-2">
              <button
                onClick={handleAboutClick}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-[#14171B] hover:bg-[#1a1f24] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E1062C]/20 flex items-center justify-center">
                    <Info className="w-5 h-5 text-[#E1062C]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[#F4F6FA] font-semibold">About Us</p>
                    <p className="text-[#A9B0BC] text-sm">Our story & philosophy</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#A9B0BC] group-hover:text-[#F4F6FA] transition-colors" />
              </button>

              <button
                onClick={handleContactClick}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-[#14171B] hover:bg-[#1a1f24] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E1062C]/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#E1062C]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[#F4F6FA] font-semibold">Contact Us</p>
                    <p className="text-[#A9B0BC] text-sm">Location & phone</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#A9B0BC] group-hover:text-[#F4F6FA] transition-colors" />
              </button>
            </div>
          </nav>

          <div className="p-6 border-t border-[#F4F6FA]/10">
            <p className="text-[#A9B0BC] text-sm text-center">
              Tora NYC • Japanese Izakaya & Bar
            </p>
            <p className="text-[#A9B0BC]/60 text-xs text-center mt-1">
              242 Himrod St, Brooklyn, NY
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
