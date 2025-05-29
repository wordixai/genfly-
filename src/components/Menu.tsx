import { Coffee, Utensils } from "lucide-react";

const coffeeItems = [
  {
    name: "Espresso",
    description: "Rich and intense shot of pure coffee essence",
    price: "$3.50",
  },
  {
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and milk foam",
    price: "$4.75",
  },
  {
    name: "Latte",
    description: "Espresso with steamed milk and a light layer of foam",
    price: "$4.95",
  },
  {
    name: "Mocha",
    description: "Espresso with chocolate, steamed milk, and whipped cream",
    price: "$5.25",
  },
];

const foodItems = [
  {
    name: "Avocado Toast",
    description: "Sourdough bread with smashed avocado, cherry tomatoes, and microgreens",
    price: "$9.50",
  },
  {
    name: "Croissant",
    description: "Buttery, flaky pastry served with jam and butter",
    price: "$3.95",
  },
  {
    name: "Breakfast Sandwich",
    description: "Egg, cheese, and bacon on a toasted brioche bun",
    price: "$7.95",
  },
  {
    name: "Acai Bowl",
    description: "Blended acai topped with granola, fresh fruits, and honey",
    price: "$10.95",
  },
];

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Our Menu</h2>
          <p className="text-lg text-amber-700/70 max-w-2xl mx-auto">
            Discover our carefully crafted selection of coffee and food items made with the finest ingredients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Coffee Menu */}
          <div>
            <div className="flex items-center mb-8">
              <Coffee className="text-amber-800 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-amber-800">Coffee</h3>
            </div>
            
            <div className="space-y-8">
              {coffeeItems.map((item, index) => (
                <div key={index} className="flex justify-between border-b border-amber-200 pb-4">
                  <div>
                    <h4 className="text-xl font-medium text-amber-900">{item.name}</h4>
                    <p className="text-amber-700/70 mt-1">{item.description}</p>
                  </div>
                  <span className="text-lg font-semibold text-amber-800">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Food Menu */}
          <div>
            <div className="flex items-center mb-8">
              <Utensils className="text-amber-800 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-amber-800">Food</h3>
            </div>
            
            <div className="space-y-8">
              {foodItems.map((item, index) => (
                <div key={index} className="flex justify-between border-b border-amber-200 pb-4">
                  <div>
                    <h4 className="text-xl font-medium text-amber-900">{item.name}</h4>
                    <p className="text-amber-700/70 mt-1">{item.description}</p>
                  </div>
                  <span className="text-lg font-semibold text-amber-800">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-amber-700 italic">
            * All our coffee beans are ethically sourced and locally roasted
          </p>
        </div>
      </div>
    </section>
  );
}