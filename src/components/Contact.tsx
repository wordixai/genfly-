import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Visit Us</h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            We'd love to see you in person or hear from you
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-amber-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Address</h4>
                    <p className="text-gray-700">123 Coffee Street<br />Downtown District<br />City, ST 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Phone</h4>
                    <p className="text-gray-700">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Email</h4>
                    <p className="text-gray-700">hello@cafearoma.example</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Hours</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 7AM - 8PM<br />
                      Saturday - Sunday: 8AM - 9PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-amber-800 hover:bg-amber-700 w-full">Reserve a Table</Button>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
            {/* This would be a real map in production */}
            <div className="w-full h-full bg-amber-100 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="h-12 w-12 text-amber-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Find Us on the Map</h3>
                <p className="text-amber-700">
                  Located in the heart of downtown, just a short walk from Central Park and the Main Street shopping district.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;