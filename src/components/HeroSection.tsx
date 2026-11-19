import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { HERO_PROJECT, STUDIO_METRICS } from '@/src/data/architectureData';
import { ArchitecturalImage } from '@/src/components/ArchitecturalImage';
import { CountUpMetric } from '@/src/components/CountUpMetric';

interface HeroSectionProps {
  onContactClick: () => void;
  onInspectHeroProject: (projectId: string) => void;
}

export function HeroSection({
  onContactClick,
  onInspectHeroProject,
}: HeroSectionProps) {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-headline"
      className="relative border-b border-border bg-background architectural-grain"
    >
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16 lg:px-10 lg:pt-16 lg:pb-20">
        {/* Split Arquitetônico 12 Colunas com altura alinhada */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Editorial Esquerda */}
          <div className="flex flex-col justify-between lg:col-span-6 lg:py-4">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0, ease: 'easeOut' }}
                className="text-xs font-bold tracking-[0.14em] text-navy"
              >
                Arquitetura Autoral · Residencial &amp; Comercial
              </motion.p>

              <motion.h1
                id="hero-headline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
                className="mt-5 font-display text-[clamp(3rem,5.2vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.03em] text-foreground text-balance"
              >
                A forma silenciosa da matéria em equilíbrio.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
                className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                Na Jhow Arquitetura, cada traço nasce da escuta ao terreno, da precisão estrutural e
                da busca pela permanência. Projetamos residências, edifícios corporativos e
                interiores onde luz natural, pedra e concreto dialogam com serenidade.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24, ease: 'easeOut' }}
                className="mt-9 flex flex-wrap items-center gap-6"
              >
                <button
                  type="button"
                  onClick={onContactClick}
                  className="inline-flex min-h-12 items-center gap-3 rounded-sm bg-primary px-7 py-3.5 text-xs font-bold tracking-[0.1em] text-primary-foreground shadow-architectural-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy hover:shadow-architectural-hover whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span>Entrar em contato</span>
                  <ArrowRight className="h-4 w-4 stroke-[1.5]" aria-hidden="true" />
                </button>

                <a
                  href="#portfolio"
                  className="group inline-flex min-h-12 items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-normal tracking-wide text-foreground transition-colors hover:border-navy hover:text-navy whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <span>Explorar portfólio</span>
                  <ArrowDownRight
                    className="h-4 w-4 stroke-[1.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.32, ease: 'easeOut' }}
              className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground"
            >
              <p className="leading-relaxed">
                Direção arquitetônica do partido conceitual à entrega executiva em obra — com rigor
                técnico, materiais nobres e desenho sob medida.
              </p>
            </motion.div>
          </div>

          {/* Coluna Visual Direita — Projeto Autoral */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <button
              type="button"
              onClick={() => onInspectHeroProject(HERO_PROJECT.projectId)}
              aria-label={`Abrir galeria do projeto ${HERO_PROJECT.title}`}
              className="group relative block h-full min-h-[340px] w-full overflow-hidden rounded-sm border border-border bg-surface text-left shadow-architectural-card transition-all duration-300 hover:shadow-architectural-hover sm:min-h-[460px] lg:min-h-[560px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <ArchitecturalImage
                src={HERO_PROJECT.image}
                alt={HERO_PROJECT.alt}
                title={HERO_PROJECT.title}
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-scrim"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                <div>
                  <p className="text-xs tracking-[0.06em] text-muted-on-dark">
                    {HERO_PROJECT.meta}
                  </p>
                  <p className="mt-1 font-display text-2xl font-medium tracking-tight text-foreground-on-dark sm:text-3xl">
                    {HERO_PROJECT.title}
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 border-b border-foreground-on-dark/50 pb-0.5 text-xs tracking-wide text-foreground-on-dark transition-colors group-hover:border-foreground-on-dark whitespace-nowrap shrink-0">
                  Ver obra
                  <ArrowRight className="h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
                </span>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Faixa horizontal de métricas em largura total abaixo do split */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:mt-16 lg:grid-cols-4"
        >
          {STUDIO_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="flex flex-col justify-between bg-card p-6 sm:p-7"
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                <CountUpMetric target={metric.value} suffix={metric.suffix} />
              </p>
              <div className="mt-4">
                <p className="text-sm font-bold tracking-wide text-foreground">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {metric.detail}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
