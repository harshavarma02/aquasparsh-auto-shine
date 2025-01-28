import Navigation from "../components/Navigation";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ImportantLinks from "../components/ImportantLinks";
import RecentWorks from "../components/RecentWorks";
import About from "../components/About";
import Reviews from "../components/Reviews";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <About />
      <Services />
      <ImportantLinks />
      <RecentWorks />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;