import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ArchitecturalProject } from '@/src/types';
import { ArchitecturalImage } from '@/src/components/ArchitecturalImage';

interface ProjectLightboxProps {
  project: ArchitecturalProject | null;
  onClose: () => void;
  onInquireProject: (project: ArchitecturalProject) => void;
}

export function ProjectLightbox({
  project,
  onClose,
  onInquireProject,
}: ProjectLightboxProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % project.gallery.length);
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentPhoto = project.gallery[activeIndex] ?? project.gallery[0];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-project-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10"
      >
        {/* Backdrop escuro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
          className="fixed inset-0 bg-surface-dark/88 backdrop-blur-sm"
        />

        {/* Container do Dossiê e Galeria */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.985 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-sm border border-border-on-dark bg-card shadow-architectural-elevated lg:grid lg:grid-cols-12"
        >
          {/* Botão Fechar de alto contraste */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar galeria do projeto"
            className="absolute top-3 right-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-surface-dark/85 text-foreground-on-dark transition-colors hover:bg-navy cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <X className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
          </button>

          {/* Painel Fotográfico (7 colunas) */}
          <div className="relative flex flex-col bg-surface-dark lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:h-[520px]">
              <ArchitecturalImage
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                title={project.title}
                loading="eager"
                className="h-full w-full object-cover"
              />

              {project.gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Fotografia anterior"
                    className="absolute top-1/2 left-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm bg-surface-dark/75 text-foreground-on-dark transition-colors hover:bg-navy cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Próxima fotografia"
                    className="absolute top-1/2 right-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm bg-surface-dark/75 text-foreground-on-dark transition-colors hover:bg-navy cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            {/* Legenda e Miniaturas */}
            <div className="flex flex-col gap-3 border-t border-border-on-dark bg-surface-dark px-5 py-4 text-foreground-on-dark">
              <div className="flex items-center justify-between gap-4 text-xs">
                <p className="text-muted-on-dark">{currentPhoto.caption}</p>
                <span className="tabular-nums text-muted-on-dark whitespace-nowrap shrink-0">
                  {activeIndex + 1} / {project.gallery.length}
                </span>
              </div>

              {project.gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {project.gallery.map((photo, idx) => (
                    <button
                      key={`${photo.src}-${idx}`}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Selecionar foto ${idx + 1} de ${project.title}`}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-sm border transition-all cursor-pointer ${
                        idx === activeIndex
                          ? 'border-foreground-on-dark opacity-100'
                          : 'border-border-on-dark opacity-50 hover:opacity-85'
                      }`}
                    >
                      <ArchitecturalImage
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Ficha Técnica & Conceito (5 colunas) */}
          <div className="flex flex-col justify-between overflow-y-auto p-6 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs tracking-wide text-muted-foreground tabular-nums">
                <span className="font-bold text-navy">{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>{project.location}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </div>

              <h3
                id="lightbox-project-title"
                className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
              >
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.concept}
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-5 text-xs">
                <div>
                  <dt className="text-muted-foreground">Área construída</dt>
                  <dd className="mt-1 font-bold text-foreground tabular-nums">{project.area}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Localização</dt>
                  <dd className="mt-1 font-bold text-foreground">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Tipologia</dt>
                  <dd className="mt-1 font-bold text-foreground">{project.category}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Conclusão</dt>
                  <dd className="mt-1 font-bold text-foreground tabular-nums">{project.year}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <h4 className="text-xs font-bold tracking-[0.12em] text-foreground">
                  Materialidade Predominante
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {project.materials.map((material) => (
                    <li
                      key={material}
                      className="border-b border-border/60 pb-2 last:border-b-0 last:pb-0"
                    >
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={() => onInquireProject(project)}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-xs font-bold tracking-[0.08em] text-primary-foreground transition-colors hover:bg-navy cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="h-4 w-4 stroke-[1.5]" aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
