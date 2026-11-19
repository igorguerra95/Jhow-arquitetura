import React, { useCallback, useState } from 'react';
import { ARCHITECTURAL_PROJECTS } from '@/src/data/architectureData';
import type { ArchitecturalProject } from '@/src/types';
import { Navbar } from '@/src/components/Navbar';
import { HeroSection } from '@/src/components/HeroSection';
import { PortfolioSection } from '@/src/components/PortfolioSection';
import { AboutSection } from '@/src/components/AboutSection';
import { ContactSection } from '@/src/components/ContactSection';
import { Footer } from '@/src/components/Footer';
import { ProjectLightbox } from '@/src/components/ProjectLightbox';
import { WhatsAppFloatingButton } from '@/src/components/WhatsAppFloatingButton';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ArchitecturalProject | null>(null);
  const [preselectedTypology, setPreselectedTypology] = useState<string | undefined>(undefined);

  const scrollToContact = useCallback((typology?: string) => {
    if (typology) {
      setPreselectedTypology(typology);
    }
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      window.setTimeout(() => {
        const nameInput = document.getElementById('contact-name') as HTMLInputElement | null;
        if (nameInput) {
          nameInput.focus({ preventScroll: true });
        }
      }, 450);
    }
  }, []);

  const handleInspectHeroProject = useCallback((projectId: string) => {
    const found = ARCHITECTURAL_PROJECTS.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  }, []);

  const handleInquireFromProject = useCallback(
    (project: ArchitecturalProject) => {
      setSelectedProject(null);
      scrollToContact(project.category);
    },
    [scrollToContact]
  );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-navy selection:text-navy-foreground">
      <Navbar onContactClick={() => scrollToContact()} />

      <main>
        <HeroSection
          onContactClick={() => scrollToContact()}
          onInspectHeroProject={handleInspectHeroProject}
        />

        <PortfolioSection
          onSelectProject={setSelectedProject}
          onContactClick={scrollToContact}
        />

        <AboutSection onContactClick={() => scrollToContact()} />

        <ContactSection preselectedTypology={preselectedTypology} />
      </main>

      <Footer />

      <WhatsAppFloatingButton />

      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={handleInquireFromProject}
      />
    </div>
  );
}
