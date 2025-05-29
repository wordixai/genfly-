import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Café Aroma</h3>
            <p className="text-amber-200 mb-4">
              A cozy corner in the city where coffee meets craftsmanship and community.
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
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-amber-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-amber-200 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#gallery" className="text-amber-200 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-amber-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7AM - 8PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8AM - 9PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8AM - 9PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-amber-200 mb-4">
              Subscribe to get updates on events, special offers and more.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md text-gray-800 w-full focus:outline-none"
              />
              <button className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 pt-6 text-center text-amber-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Café Aroma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;