import React from 'react';
import { STUDIO_CONTACT } from '@/src/data/architectureData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-on-dark bg-surface-dark py-12 text-foreground-on-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 border-b border-border-on-dark pb-10 md:flex-row md:items-end">
          <div>
            <a
              href="#inicio"
              className="font-display text-2xl font-semibold tracking-tight text-foreground-on-dark"
            >
              {STUDIO_CONTACT.brandName}
            </a>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-on-dark">
              Arquitetura autoral, planejamento espacial e direção técnica para obras residenciais e
              corporativas.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs tracking-wide text-muted-on-dark">
            <a href="#inicio" className="transition-colors hover:text-foreground-on-dark">
              Início
            </a>
            <a href="#portfolio" className="transition-colors hover:text-foreground-on-dark">
              Portfólio
            </a>
            <a href="#sobre" className="transition-colors hover:text-foreground-on-dark">
              Sobre
            </a>
            <a href="#contato" className="transition-colors hover:text-foreground-on-dark">
              Contato
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-muted-on-dark sm:flex-row sm:items-center">
          <p className="tabular-nums">
            © {currentYear} {STUDIO_CONTACT.brandName}. Todos os direitos reservados.
          </p>
          <p className="tabular-nums">
            {STUDIO_CONTACT.address} · {STUDIO_CONTACT.phoneDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
