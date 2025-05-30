import { Button } from "./ui/button";
import { Coffee, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Experience the Perfect <span className="text-amber-400">Coffee</span> Moment
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Artisanal coffee, freshly baked pastries, and a cozy atmosphere to make your day better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="bg-amber-800 hover:bg-amber-900 text-white">
              View Our Menu
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Reserve a Table
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex items-center">
              <div className="bg-amber-800 p-2 rounded-full mr-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Opening Hours</p>
                <p className="text-gray-200">Mon-Fri: 7am - 8pm</p>
                <p className="text-gray-200">Weekends: 8am - 10pm</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-amber-800 p-2 rounded-full mr-3">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Specialty Coffee</p>
                <p className="text-gray-200">Ethically sourced beans</p>
                <p className="text-gray-200">Expertly crafted drinks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;