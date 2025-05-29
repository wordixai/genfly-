import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-amber-800">Café Aroma</span>
          </div>
          
          {isMobile ? (
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-amber-800"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          ) : (
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="#home" className="text-amber-800 hover:text-amber-600 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#menu" className="text-amber-800 hover:text-amber-600 px-3 py-2 text-sm font-medium">Menu</a>
                <a href="#about" className="text-amber-800 hover:text-amber-600 px-3 py-2 text-sm font-medium">About</a>
                <a href="#location" className="text-amber-800 hover:text-amber-600 px-3 py-2 text-sm font-medium">Location</a>
                <Button variant="default" className="bg-amber-800 hover:bg-amber-700">Order Now</Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-amber-800 hover:text-amber-600 block px-3 py-2 text-base font-medium">Home</a>
            <a href="#menu" className="text-amber-800 hover:text-amber-600 block px-3 py-2 text-base font-medium">Menu</a>
            <a href="#about" className="text-amber-800 hover:text-amber-600 block px-3 py-2 text-base font-medium">About</a>
            <a href="#location" className="text-amber-800 hover:text-amber-600 block px-3 py-2 text-base font-medium">Location</a>
            <Button variant="default" className="w-full mt-2 bg-amber-800 hover:bg-amber-700">Order Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
}