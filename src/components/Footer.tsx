import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Café Aroma</h3>
            <p className="text-amber-200/80 mb-6">
              A cozy place to enjoy premium coffee and delicious food in a welcoming atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-amber-200/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="text-amber-200/80 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#about" className="text-amber-200/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#gallery" className="text-amber-200/80 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-amber-200/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="text-amber-200/80">Monday - Friday: 7:00 AM - 8:00 PM</li>
              <li className="text-amber-200/80">Saturday: 8:00 AM - 10:00 PM</li>
              <li className="text-amber-200/80">Sunday: 8:00 AM - 10:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-amber-200/80 mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-12 pt-8 text-center">
          <p className="text-amber-200/80">
            &copy; {new Date().getFullYear()} Café Aroma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}