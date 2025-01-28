import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ImportantLinks from "../components/ImportantLinks";
import RecentWorks from "../components/RecentWorks";
import About from "../components/About";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <ImportantLinks />
      <RecentWorks />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;