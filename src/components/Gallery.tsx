const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    alt: "Coffee being poured into a cup"
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    alt: "Latte art in a coffee cup"
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    alt: "Cafe interior with customers"
  },
  {
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    alt: "Freshly baked pastries"
  },
  {
    src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2",
    alt: "Avocado toast breakfast"
  },
  {
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    alt: "Person working on laptop in cafe"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a peek at our cozy atmosphere, delicious offerings, and the moments shared in our space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img 
                src={`${image.src}?auto=format&fit=crop&w=600&q=80`} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-amber-600 font-medium hover:text-amber-800"
          >
            Follow us on Instagram
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;