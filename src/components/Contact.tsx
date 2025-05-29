import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Contact Us</h2>
          <p className="text-lg text-amber-700/70 max-w-2xl mx-auto">
            Have questions or want to make a reservation? Get in touch with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">Get In Touch</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button className="w-full bg-amber-800 hover:bg-amber-700 text-white">Send Message</Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">Visit Us</h3>
            
            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-amber-800 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-amber-900">Address</h4>
                    <p className="text-amber-700/70">123 Coffee Street, Brewville, BC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-amber-800 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-amber-900">Phone</h4>
                    <p className="text-amber-700/70">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-amber-800 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-amber-900">Email</h4>
                    <p className="text-amber-700/70">info@cafearoma.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-amber-800 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-amber-900">Hours</h4>
                    <p className="text-amber-700/70">Monday - Friday: 7:00 AM - 8:00 PM</p>
                    <p className="text-amber-700/70">Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-64 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" 
                alt="Café location" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}