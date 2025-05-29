import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2010, Café Aroma began with a simple mission: to create a space where coffee lovers could enjoy exceptional brews in a warm, inviting atmosphere.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our founder, Emma Rodriguez, traveled the world studying coffee cultivation and roasting techniques before bringing her passion back to create what has become a beloved community gathering place.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Today, we continue to source the finest beans from sustainable farms around the world, roast them to perfection, and serve them with care and attention to detail that makes every cup special.
            </p>
            <Button className="bg-amber-800 hover:bg-amber-700 text-white">Learn More About Us</Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
              alt="Café owner" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-100 p-6 rounded-lg shadow-lg">
              <p className="text-amber-800 font-medium italic">
                "Every cup tells a story, and we're here to make it memorable."
              </p>
              <p className="text-amber-700 mt-2">— Emma Rodriguez, Founder</p>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-amber-800 mb-2">10+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-amber-800 mb-2">15</h3>
            <p className="text-gray-600">Coffee Varieties</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-amber-800 mb-2">5</h3>
            <p className="text-gray-600">Award-Winning Blends</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-amber-800 mb-2">20k+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}