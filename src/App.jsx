import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Listings from "./components/Listing";
import SearchSection from "./components/Searchsection";
import Enquiry from "./components/Enquiry";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <SearchSection />
      <Listings />
      <Packages />
      <Testimonials />
      <About />
      <Enquiry />
      <Footer />
    </div>
  );
}

export default App;
