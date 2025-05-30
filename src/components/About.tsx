import { Coffee, Clock, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
              alt="Cafe interior" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="font-bold text-xl">Est. 2015</p>
              <p>7+ Years of Excellence</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">A Cozy Corner in the Heart of the City</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2015, Brew & Bites began as a small passion project by two coffee enthusiasts who wanted to create a space where quality coffee meets delicious food in a warm, welcoming atmosphere.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Today, we're proud to be a neighborhood favorite, serving ethically sourced coffee and locally inspired dishes. Our café is more than just a place to eat and drink—it's a community hub where connections are made and stories are shared.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <Coffee className="h-10 w-10 text-amber-600 mb-2" />
                <h4 className="font-bold text-gray-900">Premium Coffee</h4>
                <p className="text-sm text-gray-600">Ethically sourced beans</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <Clock className="h-10 w-10 text-amber-600 mb-2" />
                <h4 className="font-bold text-gray-900">Open Daily</h4>
                <p className="text-sm text-gray-600">7AM - 8PM</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <Award className="h-10 w-10 text-amber-600 mb-2" />
                <h4 className="font-bold text-gray-900">Award Winning</h4>
                <p className="text-sm text-gray-600">Best local café 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;