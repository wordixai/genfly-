import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2015, Aroma Cafe began with a simple mission: to create a space where quality coffee meets community. What started as a small corner shop has grown into a beloved local destination.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We source our beans directly from sustainable farms around the world, ensuring fair prices for farmers and exceptional quality for our customers. Every cup is crafted with care by our trained baristas who are passionate about the perfect brew.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-amber-800 hover:bg-amber-900">Our Coffee Journey</Button>
              <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">Meet Our Team</Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Cafe interior" 
                className="rounded-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Coffee beans" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1516486392848-8b67ef89f113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Barista making coffee" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Coffee art" 
                className="rounded-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;