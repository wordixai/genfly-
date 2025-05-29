import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedItems } from "@/components/FeaturedItems";
import { About } from "@/components/About";
import { Location } from "@/components/Location";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedItems />
      <About />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;