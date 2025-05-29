import { MapPin, Clock, Phone } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-20 bg-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Visit Us</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Come experience the warm atmosphere and delicious offerings at our café
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80" 
              alt="Café interior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-amber-800 mb-6">Café Aroma</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Address</h4>
                  <p className="text-gray-600">123 Coffee Street, Downtown<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 7am - 8pm<br />Saturday - Sunday: 8am - 9pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Contact</h4>
                  <p className="text-gray-600">Phone: (555) 123-4567<br />Email: hello@cafearoma.com</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 bg-amber-800 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md inline-flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}