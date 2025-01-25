import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ImportantLinks from "../components/ImportantLinks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <ImportantLinks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;