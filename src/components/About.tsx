import { Coffee, Clock, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">About Café Aroma</h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            A cozy corner in the city where coffee meets craftsmanship and community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2015, Café Aroma has been serving the community with passion and dedication. 
              Our mission is to provide an exceptional coffee experience in a warm, welcoming environment.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We source our beans directly from sustainable farms around the world, ensuring fair trade 
              practices and the highest quality. Our skilled baristas are trained to bring out the unique 
              flavors in every cup.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond coffee, we offer a selection of house-made pastries and light meals prepared with 
              locally sourced ingredients. We believe in supporting local producers and reducing our 
              environmental footprint.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Coffee className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Premium Beans</h3>
              <p className="text-gray-600">Ethically sourced from sustainable farms worldwide</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Award Winning</h3>
              <p className="text-gray-600">Recognized for our exceptional coffee and service</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="h-10 w-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Open Daily</h3>
              <p className="text-gray-600">7AM - 8PM weekdays, 8AM - 9PM weekends</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-10 w-10 text-amber-600 mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2v12a2 2 0 0 0 2 2h12"></path>
                  <path d="M18 14v8"></path>
                  <path d="M18 22h4"></path>
                  <path d="M14 6h4"></path>
                  <path d="M14 10h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-800">Fresh Pastries</h3>
              <p className="text-gray-600">Baked in-house daily with local ingredients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;