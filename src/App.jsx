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
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";
import SocialMediaBar from "./components/SocialMediaBar";
import SearchAndListings from "./components/SearchAndListings";
import LandingForm from "./components/LandingForm";
import OurServices from "./components/OurServices";
import FAQ from "./components/FAQ";
import WhatsAppIcon from "./components/WhatsAppIcon";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      {/* <SearchSection /> */}
      <SearchAndListings />
      <Listings />
      <About />
      <WhoWeAre />
      <Packages />
      <Testimonials />
      <QuoteSection />
      <WhyChooseUs />
      <AssociatesWith />
      <StatsSection />
      <OurServices />
      <Enquiry />
      <FAQ />
      <Footer />
      <ScrollToTop />
      <Chatbot />
      <SocialMediaBar />
      <WhatsAppIcon />
      <LandingForm />
    </div>
  );
}

export default App;
