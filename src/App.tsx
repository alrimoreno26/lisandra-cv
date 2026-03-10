import { I18nProvider } from './components/i18n';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { JourneySection } from './components/JourneySection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';

export function App() {
  return (
    <I18nProvider>
      <div
        className="min-h-screen bg-white dark:bg-[#0f172a] transition-colors duration-500"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
      >
        <Navbar />
        <HeroSection />
        <JourneySection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </I18nProvider>
  );
}
