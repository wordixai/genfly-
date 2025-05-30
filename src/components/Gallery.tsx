const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Coffee cup on table"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Coffee being poured"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Café interior"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Pastries on display"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Latte art"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            A glimpse into our cozy space and delicious offerings
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg h-64 transition-transform hover:scale-105"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;