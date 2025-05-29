export function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Coffee being poured into a cup"
    },
    {
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      alt: "Latte art"
    },
    {
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80",
      alt: "Coffee shop interior"
    },
    {
      url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      alt: "Coffee beans"
    },
    {
      url: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      alt: "Pastries on display"
    },
    {
      url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      alt: "Coffee brewing equipment"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gallery</h2>
          <p className="text-lg text-amber-100/80 max-w-2xl mx-auto">
            A glimpse into our cozy atmosphere and delicious offerings
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-block text-amber-200 hover:text-white border-b border-amber-200 hover:border-white transition-colors">
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}