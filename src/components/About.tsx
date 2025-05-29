export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2010, Café Aroma began as a small corner shop with a big dream: to create a space where coffee isn't just served, but celebrated. Our founder, Emma, spent years traveling the world to study coffee cultivation and brewing techniques.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Today, we source our beans directly from sustainable farms across the globe, ensuring fair prices for farmers and exceptional quality for our customers. Every cup tells a story of passion, craftsmanship, and community.
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" 
                alt="Founder" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-medium text-gray-900">Emma Thompson</p>
                <p className="text-sm text-gray-600">Founder & Head Barista</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Coffee beans" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Coffee shop" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Barista" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Coffee cup" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}