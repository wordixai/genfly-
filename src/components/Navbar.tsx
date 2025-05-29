import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-amber-800">Café Aroma</a>
        
        {isMobile ? (
          <>
            <button onClick={toggleMenu} className="text-amber-800">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 flex flex-col gap-4">
                <a href="#about" className="text-amber-800 hover:text-amber-600" onClick={toggleMenu}>About</a>
                <a href="#menu" className="text-amber-800 hover:text-amber-600" onClick={toggleMenu}>Menu</a>
                <a href="#gallery" className="text-amber-800 hover:text-amber-600" onClick={toggleMenu}>Gallery</a>
                <a href="#contact" className="text-amber-800 hover:text-amber-600" onClick={toggleMenu}>Contact</a>
                <Button className="bg-amber-800 hover:bg-amber-700">Reserve a Table</Button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-8">
            <div className="flex gap-6">
              <a href="#about" className="text-amber-800 hover:text-amber-600">About</a>
              <a href="#menu" className="text-amber-800 hover:text-amber-600">Menu</a>
              <a href="#gallery" className="text-amber-800 hover:text-amber-600">Gallery</a>
              <a href="#contact" className="text-amber-800 hover:text-amber-600">Contact</a>
            </div>
            <Button className="bg-amber-800 hover:bg-amber-700">Reserve a Table</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;