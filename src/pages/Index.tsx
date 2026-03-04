import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReferralSection from "@/components/ReferralSection";
import WinnersSection from "@/components/WinnersSection";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ReferralSection />
      <WinnersSection />
      <DownloadCTA />
      <Footer />
    </div>
  );
};

export default Index;
