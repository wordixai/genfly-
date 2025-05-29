import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-amber-800">Aroma Cafe</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-800 font-medium">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-amber-800 font-medium">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-amber-800 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-800 font-medium">Contact</a>
            <Button className="bg-amber-800 hover:bg-amber-900">Order Online</Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-amber-800 font-medium">Home</a>
            <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-amber-800 font-medium">Menu</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-amber-800 font-medium">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-800 font-medium">Contact</a>
            <Button className="w-full mt-2 bg-amber-800 hover:bg-amber-900">Order Online</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;