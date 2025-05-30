import { Button } from './ui/button';
import { Coffee, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          filter: "brightness(0.6)"
        }}
      ></div>
      
      <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Experience the Perfect Blend
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Artisanal coffee, delicious pastries, and a warm atmosphere in the heart of the city.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">
              View Our Menu
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Reserve a Table
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-amber-400" />
              <span>Open daily: 7AM - 10PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-amber-400" />
              <span>123 Coffee Street</span>
            </div>
            <div className="flex items-center">
              <Coffee className="mr-2 h-5 w-5 text-amber-400" />
              <span>Fresh beans daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;