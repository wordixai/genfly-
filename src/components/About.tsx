const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-amber-800 mb-6"></div>
            <p className="text-gray-600 mb-6">
              Founded in 2015, Café Aroma began with a simple mission: to create a warm, welcoming space where people could enjoy exceptional coffee and food while connecting with others or finding a moment of peace in their busy day.
            </p>
            <p className="text-gray-600 mb-6">
              Our founder, Emma Chen, spent years traveling the world and experiencing coffee cultures across continents before bringing her passion back home. Every cup we serve carries that global inspiration while supporting local farmers and sustainable practices.
            </p>
            <p className="text-gray-600">
              Today, we're proud to be a neighborhood staple, where regulars are greeted by name and newcomers quickly feel like part of our extended family. We believe in the power of good food, great coffee, and genuine community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Café interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg mt-8">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Coffee brewing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Coffee beans" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg mt-8">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Café pastries" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;