const testimonials = [
  {
    id: 1,
    quote: "The best coffee I've ever had! The atmosphere is so cozy and the staff is incredibly friendly.",
    author: "Sarah Johnson",
    role: "Local Resident"
  },
  {
    id: 2,
    quote: "I come here every morning before work. Their espresso is unmatched and the pastries are always fresh.",
    author: "Michael Chen",
    role: "Marketing Executive"
  },
  {
    id: 3,
    quote: "Perfect spot for remote work. Great wifi, plenty of outlets, and the vanilla latte keeps me going all day.",
    author: "Emma Rodriguez",
    role: "Freelance Designer"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-amber-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto">
            We're proud to be a part of our customers' daily routines and special moments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-amber-900/50 p-8 rounded-lg backdrop-blur-sm"
            >
              <svg className="h-8 w-8 text-amber-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-amber-200 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;