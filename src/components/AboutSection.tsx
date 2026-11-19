import React from 'react';
import { motion } from 'motion/react';
import { Compass, Layers, PenTool, Ruler } from 'lucide-react';
import { CREATIVE_PROCESS_STEPS, STUDIO_IMAGE } from '@/src/data/architectureData';
import { ArchitecturalImage } from '@/src/components/ArchitecturalImage';

interface AboutSectionProps {
  onContactClick: () => void;
}

const STEP_ICONS = [Compass, PenTool, Ruler, Layers];

export function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section id="sobre" aria-labelledby="about-heading" className="border-b border-border">
      {/* Parte 1: Visão Estética & Estúdio */}
      <div className="bg-background py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Fotografia Editorial do Estúdio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              <div className="overflow-hidden rounded-sm border border-border bg-surface shadow-architectural-card">
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <ArchitecturalImage
                    src={STUDIO_IMAGE.src}
                    alt={STUDIO_IMAGE.alt}
                    title="Estúdio Jhow Arquitetura"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="border-t border-border bg-card px-6 py-4">
                  <p className="text-xs tracking-wide text-muted-foreground">
                    Estúdio Jhow Arquitetura · Maquetes físicas, estudos de luz e curadoria matérica
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Manifesto & Visão Estética */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-bold tracking-[0.14em] text-navy">
                Sobre o Estúdio · Visão Estética
              </p>

              <h2
                id="about-heading"
                className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-[-0.025em] text-foreground text-balance sm:text-5xl lg:text-6xl"
              >
                Arquitetura como permanência, não como espetáculo.
              </h2>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  A prática da Jhow Arquitetura parte do respeito absoluto à escala humana, à
                  topografia e ao comportamento natural da luz ao longo das estações. Recusamos o
                  excesso ornamental em favor de geometrias claras, vãos generosos e materiais que
                  envelhecem com dignidade.
                </p>
                <p>
                  Cada residência, sede corporativa ou intervenção de interiores é desenhada como um
                  organismo íntegro — onde estrutura aparente, acústica, conforto térmico e
                  marcenaria de precisão convergem para oferecer serenidade cotidiana.
                </p>
              </div>

              {/* Três Pilares de Disciplina Construtiva */}
              <div className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Rigor Estrutural
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Soluções construtivas honestas em concreto, aço e pedra natural com modulação
                    exata.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Luz como Matéria
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Aberturas estratégicas, brises e zenitais calculados para esculpir os ambientes
                    sem ofuscamento.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Síntese Atemporal
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Paletas contidas, proporções clássicas e desenho autoral imune a modismos
                    passageiros.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={onContactClick}
                  className="inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-7 py-3.5 text-xs font-bold tracking-[0.08em] text-primary-foreground transition-colors hover:bg-navy whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Entrar em contato
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Parte 2: Processo Criativo em Preto Elegante (#0F172A) */}
      <div className="bg-surface-dark py-20 text-foreground-on-dark sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col justify-between gap-6 border-b border-border-on-dark pb-10 lg:flex-row lg:items-end"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.14em] text-muted-on-dark">
                Processo Criativo · Do Conceito à Entrega
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-foreground-on-dark text-balance sm:text-5xl">
                Método em quatro etapas para previsibilidade e excelência construtiva.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-on-dark">
              Da leitura inicial do lote ao acompanhamento minucioso de execução, cada fase possui
              entregas documentadas e decisões compartilhadas.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border-on-dark bg-border-on-dark md:grid-cols-2 lg:grid-cols-4">
            {CREATIVE_PROCESS_STEPS.map((step, index) => {
              const Icon = STEP_ICONS[index] ?? Compass;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: 'easeOut',
                  }}
                  className="flex flex-col justify-between bg-surface-dark-elevated p-7 sm:p-8"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-display text-3xl font-medium tracking-tight text-foreground-on-dark tabular-nums">
                        {step.number}
                      </span>
                      <Icon
                        className="h-5 w-5 stroke-[1.25] text-muted-on-dark"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-foreground-on-dark">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-on-dark">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-border-on-dark pt-4">
                    <p className="text-xs tracking-wide text-muted-on-dark">{step.deliverable}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
