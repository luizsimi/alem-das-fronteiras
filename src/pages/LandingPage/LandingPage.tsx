import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ImpactBar from "./components/ImpactBar";
import AppPromoSection from "./components/AppPromoSection";
import ServicesBentoGrid from "./components/ServicesBentoGrid";
import CommitmentSection from "./components/CommitmentSection";
import { CommunityFAQSection } from "../../components/CommunityFAQSection";
import EmergencyContacts from "./components/EmergencyContacts";
import Footer from "./components/Footer";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeScreen, setActiveScreen] = React.useState<"front" | "back">("front");
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="min-h-screen bg-background font-plus-jakarta text-foreground selection:bg-primary selection:text-primary-foreground transition-colors duration-300">
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection />
      <ImpactBar />
      <AppPromoSection
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />
      <ServicesBentoGrid />
      <CommitmentSection />
      <CommunityFAQSection />
      <EmergencyContacts />
      <Footer />
    </div>
  );
}