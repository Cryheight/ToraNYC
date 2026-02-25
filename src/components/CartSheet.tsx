import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useState } from 'react';

export function CartSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  const totalPrice = getTotalPrice();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="relative p-2 text-[#F4F6FA] hover:bg-[#F4F6FA]/10 rounded-full transition-colors">
          <ShoppingBag className="h-6 w-6" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E1062C] text-white text-xs font-bold rounded-full flex items-center justify-center">
              {items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-[420px] bg-[#0B0C0E] border-l border-[#F4F6FA]/10 p-0 flex flex-col"
      >
        <SheetHeader className="p-6 border-b border-[#F4F6FA]/10">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-[#F4F6FA] font-bold text-xl tracking-tight">
              Your Order
            </SheetTitle>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-[#A9B0BC] hover:text-[#E1062C] text-sm flex items-center gap-1 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <div className="w-20 h-20 rounded-full bg-[#14171B] flex items-center justify-center mb-4">
              <ShoppingBag className="w-10 h-10 text-[#A9B0BC]" />
            </div>
            <p className="text-[#F4F6FA] font-semibold text-lg">Your cart is empty</p>
            <p className="text-[#A9B0BC] text-sm text-center mt-2">
              Add some delicious items from our menu to get started
            </p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#14171B] rounded-xl p-4 flex gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-[#F4F6FA] font-semibold">{item.name}</p>
                          <p className="text-[#A9B0BC] text-sm">{item.category}</p>
                        </div>
                        <p className="text-[#E1062C] font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-[#0B0C0E] flex items-center justify-center text-[#F4F6FA] hover:bg-[#E1062C] transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-[#F4F6FA] font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-[#0B0C0E] flex items-center justify-center text-[#F4F6FA] hover:bg-[#E1062C] transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#A9B0BC] hover:text-[#E1062C] transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-6 border-t border-[#F4F6FA]/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#A9B0BC]">Subtotal</span>
                <span className="text-[#F4F6FA] font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#A9B0BC]">Tax (8.875%)</span>
                <span className="text-[#F4F6FA] font-semibold">
                  ${(totalPrice * 0.08875).toFixed(2)}
                </span>
              </div>
              <div className="border-t border-[#F4F6FA]/10 pt-4 flex items-center justify-between">
                <span className="text-[#F4F6FA] font-bold text-lg">Total</span>
                <span className="text-[#E1062C] font-bold text-xl">
                  ${(totalPrice * 1.08875).toFixed(2)}
                </span>
              </div>
              <Button
                className="w-full bg-[#E1062C] hover:bg-[#b80524] text-white font-semibold py-6 rounded-full transition-all duration-300"
                onClick={() => {
                  alert('Thank you for your order! This is a demo website.');
                  clearCart();
                  setIsOpen(false);
                }}
              >
                Place Order
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
