const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", description: "Pure and intense coffee experience", price: "$3.50" },
      { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: "$4.50" },
      { name: "Latte", description: "Espresso with a lot of steamed milk and light foam", price: "$4.75" },
      { name: "Americano", description: "Espresso diluted with hot water", price: "$3.75" },
      { name: "Mocha", description: "Espresso with chocolate and steamed milk", price: "$5.25" }
    ]
  },
  {
    category: "Pastries",
    items: [
      { name: "Croissant", description: "Buttery, flaky pastry", price: "$3.25" },
      { name: "Cinnamon Roll", description: "Sweet roll with cinnamon-sugar filling", price: "$4.25" },
      { name: "Blueberry Muffin", description: "Moist muffin loaded with blueberries", price: "$3.75" },
      { name: "Chocolate Chip Cookie", description: "Soft cookie with chocolate chunks", price: "$2.75" },
      { name: "Almond Danish", description: "Flaky pastry with almond cream filling", price: "$4.50" }
    ]
  },
  {
    category: "Light Meals",
    items: [
      { name: "Avocado Toast", description: "Sourdough toast with smashed avocado and toppings", price: "$8.50" },
      { name: "Caprese Sandwich", description: "Fresh mozzarella, tomato, and basil on ciabatta", price: "$9.25" },
      { name: "Quinoa Bowl", description: "Nutritious bowl with seasonal vegetables", price: "$10.50" },
      { name: "Chicken Wrap", description: "Grilled chicken with greens and house dressing", price: "$9.75" },
      { name: "Soup of the Day", description: "Made fresh daily with seasonal ingredients", price: "$6.25" }
    ]
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Our Menu</h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Carefully crafted selections to delight your taste buds
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {menuItems.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-amber-800 mb-6 pb-3 border-b border-amber-200">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-lg font-semibold text-amber-900">{item.name}</h4>
                      <span className="text-amber-800 font-medium">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            * All our items are prepared fresh daily. Menu items may vary based on seasonal availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;