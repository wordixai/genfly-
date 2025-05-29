import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    content: "Café Aroma has become my second home. The coffee is consistently excellent, and the staff remembers my order. It's the perfect place to work or meet friends.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Michael Chen",
    role: "Food Blogger",
    content: "As someone who visits cafes professionally, I can say that Café Aroma stands out for its attention to detail. Their seasonal specials are always innovative and delicious.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Local Artist",
    content: "I love the creative atmosphere at Café Aroma. The walls feature local art, and they host amazing community events. Not to mention, their oat milk lattes are the best in town!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-amber-700/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our regular customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 relative">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                  <p className="text-amber-700/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-amber-100 w-8 h-8 rounded-full flex items-center justify-center">
                <span className="text-amber-800 text-xl font-serif">"</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}