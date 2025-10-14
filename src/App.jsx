import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Listings from "./components/Listings";
import SearchSection from "./components/SearchSection";
import Enquiry from "./components/Enquiry";
import About from "./components/About";
import WhoWeAre from "./components/WhoWeAre";
import QuoteSection from "./components/QuoteSection";
import WhyChooseUs from "./components/WhyChooseUs";
import AssociatesWith from "./components/AssociatesWith";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <WhoWeAre />
      <SearchSection />
      <Listings />
      <Packages />
      <Testimonials />
      <QuoteSection />
      <WhyChooseUs />
      <AssociatesWith />
      <StatsSection />
      <Enquiry />
      <Footer />
    </div>
  );
}

export default App;
