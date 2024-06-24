import { ContactSection } from "./section/ContactSection";
import { ExperienceSection } from "./section/ExperienceSection";
import { FooterComponent } from "./section/FooterComponent";
import { MainSection } from "./section/MainSection";
import { NavbarComponent } from "./section/NavbarComponent";
import { JobPositionSection } from "./section/JobPositionSection";
import { TechnologySection } from "./section/TechnologySection";

export function LandingPage() {
  return (
    <div className="bg-dark-200 min-h-screen text-white">
      <NavbarComponent />
      <MainSection />
      {/* <ExperienceSection /> */}
      <JobPositionSection />
      <TechnologySection />
      <ContactSection />
      <FooterComponent />
    </div>
  );
}
