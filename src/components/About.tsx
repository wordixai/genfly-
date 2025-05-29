const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-amber-800 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2015, Brew Haven began as a small passion project by two friends who shared a love for exceptional coffee and creating community spaces.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Today, we continue to source the finest beans from ethical farms around the world, roasting them in small batches to ensure the perfect cup every time.
            </p>
            <p className="text-lg text-gray-600">
              Our cafe is more than just a place to grab coffee – it's a hub for creativity, conversation, and connection. We're proud to be a part of this vibrant community.
            </p>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-amber-800">7+</h3>
                <p className="text-gray-600">Years of Service</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-amber-800">12</h3>
                <p className="text-gray-600">Coffee Origins</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-amber-800">5k+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee beans" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Cafe interior" 
                className="rounded-lg h-48 w-full object-cover"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Barista making coffee" 
                className="rounded-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee art" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;