import { Coffee, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, Aroma Cafe began with a simple mission: to serve exceptional coffee in a warm, welcoming environment. What started as a small corner shop has grown into a beloved community gathering place.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We're passionate about quality, sustainability, and creating memorable experiences for our customers. Every cup of coffee we serve and every pastry we bake reflects our commitment to excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-100 p-3 rounded-full mb-4">
                  <Coffee className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Premium Beans</h3>
                <p className="text-sm text-gray-500">Ethically sourced from around the world</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-100 p-3 rounded-full mb-4">
                  <Users className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Community</h3>
                <p className="text-sm text-gray-500">A gathering place for friends and neighbors</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-100 p-3 rounded-full mb-4">
                  <Award className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Excellence</h3>
                <p className="text-sm text-gray-500">Award-winning coffee and service</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Barista preparing coffee" 
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Coffee beans" 
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Coffee shop interior" 
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Coffee cup" 
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;