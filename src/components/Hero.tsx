import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-1 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to <span className="text-amber-400">Brew & Bites</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Where every cup tells a story and every bite creates a memory
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
            <Coffee className="mr-2 h-5 w-5" /> View Our Menu
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
            Book a Table
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;