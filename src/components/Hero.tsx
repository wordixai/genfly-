import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Experience the Perfect Brew
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Artisanal coffee, fresh pastries, and a cozy atmosphere to make your day better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-6 text-lg">
              View Our Menu
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;