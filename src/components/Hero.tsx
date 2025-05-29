import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Experience the Perfect <span className="text-amber-400">Brew</span>
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Handcrafted coffee, artisanal pastries, and a warm atmosphere to make your day better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-amber-800 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              View Menu
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}