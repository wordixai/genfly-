import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Café Aroma</h3>
            <p className="mb-4">Crafting perfect moments, one cup at a time.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#menu" className="hover:text-white">Menu</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#location" className="hover:text-white">Location</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>123 Coffee Street</li>
              <li>New York, NY 10001</li>
              <li>(555) 123-4567</li>
              <li>hello@cafearoma.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <ul className="space-y-2">
              <li>Monday - Friday: 7am - 8pm</li>
              <li>Saturday - Sunday: 8am - 9pm</li>
              <li>Happy Hour: 3pm - 5pm daily</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Café Aroma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}