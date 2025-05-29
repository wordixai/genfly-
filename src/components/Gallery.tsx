const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    alt: "Coffee being poured into a cup"
  },
  {
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    alt: "Latte art in a coffee cup"
  },
  {
    url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571",
    alt: "Coffee shop interior"
  },
  {
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    alt: "Freshly baked pastries"
  },
  {
    url: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    alt: "Person enjoying coffee at a table"
  },
  {
    url: "https://images.unsplash.com/photo-1515215316771-2742baa337f4",
    alt: "Coffee beans and brewing equipment"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-amber-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-100 mb-4">Gallery</h2>
          <p className="text-lg text-amber-200 max-w-3xl mx-auto">
            A glimpse into our cozy space and delicious offerings
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-square">
              <img 
                src={`${image.url}?auto=format&fit=crop&w=600&q=80`} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;