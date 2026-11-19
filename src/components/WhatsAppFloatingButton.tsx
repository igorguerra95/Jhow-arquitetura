import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_CONTACT } from '@/src/data/architectureData';

export function WhatsAppFloatingButton() {
  return (
    <div className="fixed right-4 bottom-4 z-30 sm:right-6 sm:bottom-6">
      {/* Pulso discreto em anel externo */}
      <motion.span
        aria-hidden="true"
        animate={{ scale: [1, 1.24, 1], opacity: [0.35, 0, 0.35] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-0 rounded-full border border-navy"
      />

      <a
        href={STUDIO_CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato via WhatsApp pelo telefone (00) 00000-0000"
        className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-on-dark bg-navy text-navy-foreground shadow-architectural-elevated transition-transform duration-200 hover:scale-105 hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:h-13 sm:w-13"
      >
        <MessageCircle className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
      </a>
    </div>
  );
}
