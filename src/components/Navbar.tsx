import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { STUDIO_CONTACT } from '@/src/data/architectureData';

interface NavbarProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar({ onContactClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMobileContact = () => {
    setMobileOpen(false);
    onContactClick();
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-10">
          {/* Zona 1: Wordmark em linha única */}
          <a
            href="#inicio"
            className="font-display text-xl font-semibold tracking-tight text-foreground whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-2xl"
          >
            Jhow Arquitetura
          </a>

          {/* Zona 2: Links de navegação concisos em linha única */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-8"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 text-sm font-normal tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-navy after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zona 3: Ação principal única no desktop + gatilho de gaveta no mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onContactClick}
              className="hidden md:inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-xs font-bold tracking-[0.08em] text-primary-foreground transition-all duration-200 hover:bg-navy whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Entrar em contato
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-surface md:hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Menu className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Sheet / Drawer Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-primary/50 backdrop-blur-xs"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col justify-between border-l border-border bg-background p-6 shadow-architectural-elevated"
            >
              <div>
                <div className="flex items-center justify-between border-b border-border pb-5">
                  <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {STUDIO_CONTACT.brandName}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Fechar menu"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-surface cursor-pointer"
                  >
                    <X className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                  </button>
                </div>

                <nav aria-label="Links do menu" className="mt-8 flex flex-col gap-2">
                  {NAV_LINKS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileNav(item.href);
                      }}
                      className="flex min-h-12 items-center justify-between border-b border-border/60 py-3 font-display text-2xl font-medium text-foreground transition-colors hover:text-navy"
                    >
                      <span>{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4 border-t border-border pt-6">
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>{STUDIO_CONTACT.address}</p>
                  <p>{STUDIO_CONTACT.phoneDisplay}</p>
                </div>
                <button
                  type="button"
                  onClick={handleMobileContact}
                  className="flex min-h-12 w-full items-center justify-center rounded-sm bg-primary px-6 py-3 text-xs font-bold tracking-[0.08em] text-primary-foreground transition-colors hover:bg-navy cursor-pointer"
                >
                  Entrar em contato
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
