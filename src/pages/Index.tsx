import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ImportantLinks from "../components/ImportantLinks";
import RecentWorks from "../components/RecentWorks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <ImportantLinks />
      <RecentWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;