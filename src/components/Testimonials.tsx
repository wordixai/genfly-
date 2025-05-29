import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Local Artist",
    content: "Café Aroma is my go-to spot for inspiration. The atmosphere is perfect for creativity, and their cappuccino is the best in town!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Tech Professional",
    content: "I've had meetings here for years. The staff remembers my order, the Wi-Fi is reliable, and the pastries are incredible. Couldn't ask for more.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Food Blogger",
    content: "As someone who visits cafes professionally, I can say that Café Aroma stands out for their attention to detail and commitment to quality.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            The experiences of our valued community
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div>
                <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;