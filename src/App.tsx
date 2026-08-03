import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

// Data
import { PROFILE_DATA, MAJORS_DATA, INDUSTRIAL_DATA } from "./data.js";

// Assets
import schoolLogo from "./assets/images/percik-logo.png";
import heroBg from "./assets/images/percik.jpeg";

// Components
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import StatsStrip from "./components/StatsStrip.tsx";
import ProfileSection from "./components/ProfileSection.tsx";
import MajorsSection from "./components/MajorsSection.tsx";
import IndustrySection from "./components/IndustrySection.tsx";
import ContactCTA from "./components/ContactCTA.tsx";
import Footer from "./components/Footer.tsx";
import MajorDetailModal from "./components/MajorDetailModal.tsx";

export default function App() {
  const [activeTab, setActiveTab] = useState("tp");
  const [scrollY, setScrollY] = useState(0);
  const [selectedMajorDetail, setSelectedMajorDetail] = useState(null);

  // Track scroll position for Hero animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-sky-500 selection:text-white antialiased">
      
      {/* 1. NAVBAR */}
      <Navbar 
        scrollToSection={scrollToSection} 
        schoolLogo={schoolLogo} 
      />

      {/* 2. HERO SECTION */}
      <Hero 
        scrollY={scrollY} 
        schoolLogo={schoolLogo} 
        heroBg={heroBg} 
        scrollToSection={scrollToSection} 
      />

      {/* SECTION CONTAINER */}
      <main className="relative z-20">

        {/* 3. STATS STRIP */}
        <StatsStrip stats={PROFILE_DATA.stats} />

        {/* 4. PROFIL SEKOLAH */}
        <ProfileSection profileData={PROFILE_DATA} />

        {/* 5. JURUSAN UNGGULAN */}
        <MajorsSection 
          majorsData={MAJORS_DATA} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onSelectMajorDetail={setSelectedMajorDetail} 
        />

        {/* 6. KERJASAMA INDUSTRI */}
        <IndustrySection industrialData={INDUSTRIAL_DATA} />

        {/* 7. CONTACT / CONSULTATION CTA (Replaces PPDB Signup) */}
        <ContactCTA />

      </main>

      {/* 8. FOOTER */}
      <Footer 
        schoolLogo={schoolLogo} 
        majorsData={MAJORS_DATA} 
        scrollToSection={scrollToSection} 
        setActiveTab={setActiveTab} 
      />

      {/* 9. DETAILED CURRICULUM MODAL */}
      <AnimatePresence>
        {selectedMajorDetail && (
          <MajorDetailModal 
            selectedMajor={selectedMajorDetail} 
            onClose={() => setSelectedMajorDetail(null)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
