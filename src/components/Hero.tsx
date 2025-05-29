import { Button } from "@/components/ui/button";
import { Coffee, Clock, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt="Café interior" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Experience the Perfect <span className="text-amber-400">Coffee</span> Moment
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Artisanal coffee, freshly baked pastries, and a cozy atmosphere to make your day better.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="bg-amber-800 hover:bg-amber-700 text-white text-lg py-6 px-8">
            View Our Menu
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
            Reserve a Table
          </Button>
        </div>
        
        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center">
            <Coffee className="text-amber-400 mb-3" size={32} />
            <h3 className="text-white font-semibold text-lg">Premium Coffee</h3>
            <p className="text-white/80 text-sm">Sourced from the finest beans</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center">
            <Clock className="text-amber-400 mb-3" size={32} />
            <h3 className="text-white font-semibold text-lg">Opening Hours</h3>
            <p className="text-white/80 text-sm">Mon-Sun: 7:00 AM - 10:00 PM</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center">
            <MapPin className="text-amber-400 mb-3" size={32} />
            <h3 className="text-white font-semibold text-lg">Location</h3>
            <p className="text-white/80 text-sm">123 Coffee Street, Brewville</p>
          </div>
        </div>
      </div>
    </section>
  );
}