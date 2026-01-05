import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import DevOpsSection from "@/components/DevOpsSection";
import FailureEngineeringSection from "@/components/FailureEngineeringSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ArchitectureSection />
        <DevOpsSection />
        <FailureEngineeringSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
