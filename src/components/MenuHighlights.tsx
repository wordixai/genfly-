import { Button } from "./ui/button";

const menuItems = [
  {
    id: 1,
    name: "Signature Latte",
    description: "Our house specialty with vanilla and caramel notes",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Avocado Toast",
    description: "Sourdough bread with avocado, poached egg, and microgreens",
    price: "$8.95",
    image: "https://images.unsplash.com/photo-1603046891744-76f2e0e73f95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Berry Parfait",
    description: "Greek yogurt with fresh berries, honey, and house-made granola",
    price: "$6.75",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Croissant Sandwich",
    description: "Butter croissant with scrambled eggs, cheese, and bacon",
    price: "$7.95",
    image: "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const MenuHighlights = () => {
  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Menu Highlights</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover our most popular items, crafted with love and the finest ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-amber-800 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-amber-800 hover:bg-amber-900">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;