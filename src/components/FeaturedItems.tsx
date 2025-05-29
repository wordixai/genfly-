import { Coffee, Cake, Clock } from "lucide-react";

const featuredItems = [
  {
    id: 1,
    name: "Signature Latte",
    description: "Our house specialty with a perfect blend of espresso and steamed milk",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1037&q=80",
    icon: Coffee
  },
  {
    id: 2,
    name: "Artisan Croissant",
    description: "Flaky, buttery croissants baked fresh every morning",
    price: "$3.75",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80",
    icon: Cake
  },
  {
    id: 3,
    name: "Breakfast Special",
    description: "Any coffee and pastry combination at a special price before 11am",
    price: "$6.99",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    icon: Clock
  }
];

export function FeaturedItems() {
  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Featured Items</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Discover our most loved menu items, crafted with care and the finest ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <item.icon className="h-5 w-5 text-amber-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-800 font-bold">{item.price}</span>
                  <button className="text-amber-600 hover:text-amber-800 font-medium">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}