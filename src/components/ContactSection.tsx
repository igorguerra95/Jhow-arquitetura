import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { STUDIO_CONTACT } from '@/src/data/architectureData';
import type { ContactInquiry } from '@/src/types';

interface ContactSectionProps {
  preselectedTypology?: string;
}

const INITIAL_FORM: ContactInquiry = {
  name: '',
  email: '',
  phone: '',
  typology: 'Residencial',
  area: '',
  message: '',
};

export function ContactSection({ preselectedTypology }: ContactSectionProps) {
  const [form, setForm] = useState<ContactInquiry>(INITIAL_FORM);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedTypology) {
      setForm((prev) => ({ ...prev, typology: preselectedTypology }));
    }
  }, [preselectedTypology]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setErrorMessage('Por favor, preencha nome completo, e-mail e telefone para retorno.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setErrorMessage('Informe um endereço de e-mail válido.');
      return;
    }

    setSubmitted(true);
  };

  const whatsappSummaryHref = (() => {
    const summaryText = `Olá, sou ${form.name || 'cliente'}. Gostaria de conversar sobre um projeto (${form.typology}${form.area ? `, ${form.area} m²` : ''}). ${form.message ? `Detalhes: ${form.message}` : ''}`;
    return `https://wa.me/5500000000000?text=${encodeURIComponent(summaryText)}`;
  })();

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="bg-background py-20 sm:py-24 lg:py-28 architectural-grain"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Coluna Esquerda: Convite Formal & Dados do Estúdio */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-navy">
                Contato · Atendimento Personalizado
              </p>
              <h2
                id="contact-heading"
                className="mt-4 font-display text-4xl font-medium leading-[1.06] tracking-[-0.025em] text-foreground text-balance sm:text-5xl lg:text-6xl"
              >
                Inicie a conversa sobre o seu próximo espaço.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Atendemos novos estudos residenciais, comerciais e de interiores mediante briefing
                prévio. Compartilhe as premissas do seu terreno ou imóvel para agendarmos uma
                reunião técnica.
              </p>
            </div>

            <div className="mt-10 space-y-6 border-t border-border pt-8">
              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.5] text-navy"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-bold tracking-wider text-muted-foreground">
                    Endereço do Estúdio
                  </p>
                  <p className="mt-1 text-base font-medium text-foreground">
                    {STUDIO_CONTACT.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.5] text-navy"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-bold tracking-wider text-muted-foreground">
                    Telefone &amp; WhatsApp
                  </p>
                  <a
                    href={STUDIO_CONTACT.phoneHref}
                    className="mt-1 inline-block text-base font-medium text-foreground transition-colors hover:text-navy tabular-nums"
                  >
                    {STUDIO_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.5] text-navy"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-bold tracking-wider text-muted-foreground">
                    Horário de Atendimento
                  </p>
                  <p className="mt-1 text-base font-medium text-foreground">
                    {STUDIO_CONTACT.hours}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Formulário de Briefing Arquitetônico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="rounded-sm border border-border bg-card p-6 shadow-architectural-card sm:p-10">
              {submitted ? (
                <div className="py-6">
                  <div className="flex items-center gap-3 text-navy">
                    <CheckCircle2 className="h-6 w-6 stroke-[1.5]" aria-hidden="true" />
                    <span className="text-xs font-bold tracking-[0.12em]">
                      Solicitação Registrada
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-foreground">
                    Obrigado pelo contato, {form.name.split(' ')[0]}.
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Recebemos as informações preliminares do seu projeto ({form.typology}). Caso
                    prefira atendimento imediato, encaminhe o resumo diretamente pelo WhatsApp do
                    estúdio.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href={whatsappSummaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs font-bold tracking-[0.08em] text-primary-foreground transition-colors hover:bg-navy whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="h-4 w-4 stroke-[1.5]" aria-hidden="true" />
                      <span>Prosseguir no WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setForm(INITIAL_FORM);
                        setSubmitted(false);
                      }}
                      className="inline-flex min-h-12 items-center justify-center rounded-sm border border-border px-6 py-3 text-xs font-bold tracking-[0.08em] text-foreground transition-colors hover:bg-surface cursor-pointer"
                    >
                      Enviar nova mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="border-b border-border pb-4">
                    <h3 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
                      Briefing Preliminar de Projeto
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Preencha os dados abaixo para avaliação inicial de escopo e disponibilidade.
                    </p>
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="rounded-sm border border-navy/40 bg-surface px-4 py-3 text-sm font-medium text-foreground"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-bold tracking-wider text-foreground"
                      >
                        Nome completo
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ex.: Henrique Vasconcelos"
                        className="mt-2 h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/65 transition-colors focus:border-navy focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-bold tracking-wider text-foreground"
                      >
                        E-mail
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="nome@empresa.com.br"
                        className="mt-2 h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/65 transition-colors focus:border-navy focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-bold tracking-wider text-foreground"
                      >
                        Telefone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="mt-2 h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/65 transition-colors focus:border-navy focus:outline-none tabular-nums"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-typology"
                        className="block text-xs font-bold tracking-wider text-foreground"
                      >
                        Tipologia do Projeto
                      </label>
                      <select
                        id="contact-typology"
                        name="typology"
                        value={form.typology}
                        onChange={handleChange}
                        className="mt-2 h-12 w-full rounded-sm border border-border bg-background px-3.5 text-sm text-foreground transition-colors focus:border-navy focus:outline-none"
                      >
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Interiores">Interiores</option>
                        <option value="Consultoria Técnica">Consultoria Técnica</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-area"
                        className="block text-xs font-bold tracking-wider text-foreground"
                      >
                        Área estimada (m²)
                      </label>
                      <input
                        id="contact-area"
                        name="area"
                        type="text"
                        value={form.area}
                        onChange={handleChange}
                        placeholder="Ex.: 450 m²"
                        className="mt-2 h-12 w-full rounded-sm border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/65 transition-colors focus:border-navy focus:outline-none tabular-nums"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold tracking-wider text-foreground"
                    >
                      Contexto e objetivos do projeto
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Descreva brevemente a localização do terreno ou imóvel, prazo desejado e expectativas estéticas."
                      className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/65 transition-colors focus:border-navy focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                    <p className="text-xs text-muted-foreground">
                      Retorno formal pelo estúdio em até 1 dia útil.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-8 py-3.5 text-xs font-bold tracking-[0.1em] text-primary-foreground shadow-architectural-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy hover:shadow-architectural-hover whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      Entrar em contato
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
