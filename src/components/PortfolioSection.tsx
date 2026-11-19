import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Images } from 'lucide-react';
import { ARCHITECTURAL_PROJECTS } from '@/src/data/architectureData';
import type { ArchitecturalProject, ProjectCategory } from '@/src/types';
import { ArchitecturalImage } from '@/src/components/ArchitecturalImage';

interface PortfolioSectionProps {
  onSelectProject: (project: ArchitecturalProject) => void;
  onContactClick: (typology?: string) => void;
}

const CATEGORIES: ProjectCategory[] = ['Todos', 'Residencial', 'Comercial', 'Interiores'];

export function PortfolioSection({
  onSelectProject,
  onContactClick,
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') {
      return ARCHITECTURAL_PROJECTS;
    }
    return ARCHITECTURAL_PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="border-b border-border bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Cabeçalho de Seção + Filtro Segmentado */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col justify-between gap-8 border-b border-border pb-10 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] text-navy">
              Portfólio Selecionado · Obras &amp; Estudos
            </p>
            <h2
              id="portfolio-heading"
              className="mt-3 font-display text-4xl font-medium leading-[1.06] tracking-[-0.025em] text-foreground text-balance sm:text-5xl lg:text-6xl"
            >
              Obras concebidas para atravessar o tempo.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Explore projetos residenciais, sedes corporativas e interiores autorais com registro
              fotográfico completo e ficha técnica construtiva.
            </p>
          </div>

          {/* Controle Segmentado de Filtro */}
          <div
            role="tablist"
            aria-label="Filtrar projetos por tipologia"
            className="inline-flex flex-wrap items-center gap-1 rounded-sm border border-border bg-card p-1 self-start lg:self-end"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-10 rounded-sm px-4 py-2 text-xs font-bold tracking-wider transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:bg-surface hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grade Bento Assimétrica de 12 Colunas */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          {filteredProjects.map((project, index) => {
            const isHeroLead = activeCategory === 'Todos' && index === 0;
            const isSecondaryLead = activeCategory === 'Todos' && index === 1;
            const colSpanClass = isHeroLead
              ? 'md:col-span-12 lg:col-span-7'
              : isSecondaryLead
                ? 'md:col-span-12 lg:col-span-5'
                : 'md:col-span-6 lg:col-span-4';

            const aspectClass = isHeroLead
              ? 'aspect-[16/10]'
              : isSecondaryLead
                ? 'aspect-[4/3] lg:aspect-[5/4]'
                : 'aspect-[4/3]';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.65,
                  delay: Math.min(index * 0.08, 0.28),
                  ease: 'easeOut',
                }}
                className={`group flex flex-col justify-between overflow-hidden rounded-sm border border-border bg-card shadow-architectural-card transition-all duration-300 hover:-translate-y-1 hover:shadow-architectural-hover ${colSpanClass}`}
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  aria-label={`Abrir galeria de fotos do projeto ${project.title}`}
                  className="flex h-full flex-col text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <div className={`relative w-full overflow-hidden bg-muted ${aspectClass}`}>
                    <ArchitecturalImage
                      src={project.coverImage}
                      alt={project.coverAlt}
                      title={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <span className="pointer-events-none absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-sm bg-primary/85 px-3 py-1.5 text-xs font-normal tracking-wide text-primary-foreground opacity-0 backdrop-blur-xs transition-all duration-200 group-hover:opacity-100">
                      <Images className="h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
                      <span>Abrir galeria ({project.gallery.length})</span>
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      {/* Metadados limpos sem cápsulas ou pills */}
                      <div className="flex flex-wrap items-center gap-2 text-xs tracking-wide text-muted-foreground tabular-nums">
                        <span className="font-bold text-navy">{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.location}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.area}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.year}</span>
                      </div>

                      <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-navy sm:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                        {project.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs font-bold tracking-[0.08em] text-foreground">
                      <span>Visualizar galeria e ficha técnica</span>
                      <ArrowUpRight
                        className="h-4 w-4 stroke-[1.5] text-navy transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>

        {/* Chamada discreta ao final do portfólio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border pt-10 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Cada projeto é desenvolvido em diálogo contínuo com o cliente e o entorno. Deseja
            avaliar a viabilidade arquitetônica do seu terreno ou empreendimento?
          </p>
          <button
            type="button"
            onClick={() => onContactClick()}
            className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs font-bold tracking-[0.08em] text-primary-foreground transition-colors hover:bg-navy whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Entrar em contato
          </button>
        </motion.div>
      </div>
    </section>
  );
}
