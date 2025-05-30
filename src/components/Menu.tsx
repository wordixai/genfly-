const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", price: "$3.50", description: "Strong and pure coffee shot" },
      { name: "Cappuccino", price: "$4.50", description: "Espresso with steamed milk and foam" },
      { name: "Latte", price: "$4.75", description: "Espresso with lots of steamed milk and light foam" },
      { name: "Mocha", price: "$5.25", description: "Espresso with chocolate and steamed milk" }
    ]
  },
  {
    category: "Breakfast",
    items: [
      { name: "Avocado Toast", price: "$8.95", description: "Sourdough bread with smashed avocado, cherry tomatoes, and microgreens" },
      { name: "Breakfast Burrito", price: "$10.50", description: "Scrambled eggs, black beans, cheese, and salsa in a flour tortilla" },
      { name: "Granola Bowl", price: "$7.95", description: "House-made granola with Greek yogurt and seasonal fruits" },
      { name: "Eggs Benedict", price: "$12.95", description: "Poached eggs on English muffin with hollandaise sauce" }
    ]
  },
  {
    category: "Pastries",
    items: [
      { name: "Croissant", price: "$3.95", description: "Buttery, flaky French pastry" },
      { name: "Cinnamon Roll", price: "$4.50", description: "Soft roll with cinnamon-sugar filling and cream cheese frosting" },
      { name: "Blueberry Muffin", price: "$3.75", description: "Moist muffin loaded with fresh blueberries" },
      { name: "Chocolate Chip Cookie", price: "$2.95", description: "Soft-baked cookie with dark chocolate chunks" }
    ]
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in serving high-quality, fresh ingredients prepared with care. Our menu changes seasonally to showcase the best local produce.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((category, index) => (
            <div key={index} className="bg-amber-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-amber-800 text-white py-4 px-6">
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <div className="p-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="mb-6 last:mb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-900">{item.name}</h4>
                      <span className="text-amber-600 font-medium">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    {itemIndex < category.items.length - 1 && (
                      <div className="border-b border-gray-200 my-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 italic mb-4">* Prices subject to change. Please inform your server of any allergies.</p>
          <a href="#" className="inline-block text-amber-600 font-medium hover:text-amber-800 hover:underline">
            View Full Menu PDF →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;