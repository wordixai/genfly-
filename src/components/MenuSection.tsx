import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const menuItems = [
  {
    id: 1,
    category: 'Coffee',
    items: [
      { name: 'Espresso', description: 'Rich and intense shot of coffee', price: '$3.50' },
      { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: '$4.50' },
      { name: 'Latte', description: 'Espresso with a lot of steamed milk and a light layer of foam', price: '$4.75' },
    ]
  },
  {
    id: 2,
    category: 'Pastries',
    items: [
      { name: 'Croissant', description: 'Buttery, flaky pastry', price: '$3.25' },
      { name: 'Blueberry Muffin', description: 'Moist muffin filled with blueberries', price: '$3.75' },
      { name: 'Cinnamon Roll', description: 'Sweet roll with cinnamon and frosting', price: '$4.25' },
    ]
  },
  {
    id: 3,
    category: 'Breakfast',
    items: [
      { name: 'Avocado Toast', description: 'Sourdough bread with avocado, cherry tomatoes, and microgreens', price: '$8.50' },
      { name: 'Breakfast Sandwich', description: 'Egg, cheese, and bacon on a brioche bun', price: '$7.75' },
      { name: 'Granola Bowl', description: 'House-made granola with yogurt and fresh berries', price: '$6.95' },
    ]
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We source the finest ingredients and prepare everything fresh daily. Our coffee beans are ethically sourced and roasted to perfection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((category) => (
            <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-amber-700 text-white">
                <CardTitle>{category.category}</CardTitle>
                <CardDescription className="text-amber-100">
                  Our selection of {category.category.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {category.items.map((item, index) => (
                    <li key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                        </div>
                        <span className="text-amber-700 font-medium">{item.price}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">View our full menu for more delicious options</p>
          <button className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors">
            Download Full Menu
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;