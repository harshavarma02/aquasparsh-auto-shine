import Hero from "../components/Hero";
import Services from "../components/Services";
import RecentWorks from "../components/RecentWorks";
import About from "../components/About";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <RecentWorks />
      <Reviews />
      <FAQ />
    </div>
  );
};

export default Home;