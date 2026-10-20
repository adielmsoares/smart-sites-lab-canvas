import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { easeOut, fadeUp, inViewOnce, stagger } from '@/lib/motion';
import BrandMark from './BrandMark';

const initialForm = { name: '', email: '', phone: '', message: '', website: '' };

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, language }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          setError(t(
            'Verifique os dados: nome (mín. 2 caracteres), e-mail válido e mensagem (mín. 10 caracteres).',
            'Please check your data: name (min. 2 characters), valid email and message (min. 10 characters).'
          ));
        } else if (response.status === 429) {
          setError(t(
            'Muitas tentativas. Aguarde alguns minutos e tente novamente.',
            'Too many attempts. Please wait a few minutes and try again.'
          ));
        } else {
          throw new Error(`HTTP ${response.status}`);
        }
        return;
      }

      setIsSubmitted(true);
      setFormData(initialForm);
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (err) {
      console.error('Erro ao enviar e-mail:', err);
      setError(
        t(
          'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo smartsiteslab@gmail.com.',
          'Error sending message. Please try again or contact us directly at smartsiteslab@gmail.com.'
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const channels = [
    { icon: Mail, label: t('E-mail', 'Email'), value: 'smartsiteslab@gmail.com', href: 'mailto:smartsiteslab@gmail.com' },
    { icon: Phone, label: t('Telefone', 'Phone'), value: '+55 (61) 99112-7447', href: 'tel:+5561991127447' },
    { icon: MapPin, label: t('Atendimento', 'Service area'), value: t('Remoto · Brasília - DF e Goiânia - GO', 'Remote · Brasília - DF and Goiânia - GO') },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="isolate relative bg-ink overflow-hidden text-white grain section-padding">
      <div aria-hidden="true" className="-z-10 absolute inset-0 pointer-events-none">
        <div className="top-0 -left-40 absolute bg-[radial-gradient(circle,rgba(94,244,161,0.16),transparent_65%)] rounded-full w-[36rem] h-[36rem]" />
        <div className="-right-32 bottom-0 absolute bg-[radial-gradient(circle,rgba(48,213,199,0.14),transparent_65%)] rounded-full w-[30rem] h-[30rem]" />
        <BrandMark strokeWidth={20} className="right-[8%] -bottom-24 absolute opacity-[0.05] w-[28rem] h-[28rem]" />
      </div>

      <div className="gap-16 lg:gap-12 grid lg:grid-cols-12 container-width">
        <motion.div
          className="lg:col-span-5 min-w-0"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
        >
          <motion.p variants={fadeUp} className="text-smart-green eyebrow">
            {t('Contato', 'Contact')}
          </motion.p>
          <motion.h2 id="contact-title" variants={fadeUp} className="mt-5 text-[2.1rem] text-display text-white sm:text-5xl">
            {t('Sua empresa já faz um bom trabalho. ', 'Your company already does good work. ')}
            <span className="gradient-text on-dark">{t('Que tal mostrar isso melhor na internet?', 'How about showing it better online?')}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-white/70 text-lg leading-relaxed">
            {t(
              'Conte um pouco sobre o seu negócio e o que você precisa. Vamos conversar sobre uma solução digital que faça sentido para o seu momento.',
              "Tell us a little about your business and what you need. Let's talk about a digital solution that makes sense for where you are now."
            )}
          </motion.p>

          <motion.ul variants={fadeUp} className="space-y-px mt-12 border border-white/10 rounded-2xl overflow-hidden">
            {channels.map((c) => {
              const content = (
                <>
                  <span className="flex justify-center items-center bg-white/[0.06] rounded-xl w-11 h-11 text-smart-green shrink-0">
                    <c.icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[0.7rem] text-white/50 uppercase tracking-[0.16em]">{c.label}</span>
                    <span className="block text-white truncate">{c.value}</span>
                  </span>
                </>
              );
              return (
                <li key={c.label} className="bg-white/[0.02]">
                  {c.href ? (
                    <a href={c.href} className="flex items-center gap-4 hover:bg-white/[0.05] p-4 transition-colors">
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4">{content}</div>
                  )}
                </li>
              );
            })}
          </motion.ul>

          <motion.p variants={fadeUp} className="mt-6 text-white/55 text-sm">
            {t(
              'Respondemos a todos os contatos em até 24 horas em dias úteis.',
              'We reply to every message within 24 hours on business days.'
            )}
          </motion.p>
        </motion.div>

        <motion.div
          className="lg:col-span-7 min-w-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 1, delay: 0.15, ease: easeOut }}
        >
          <div className="bg-white/[0.03] p-6 sm:p-10 border border-white/10 rounded-[2rem]">
            <h3 className="font-display font-semibold text-white text-2xl">
              {t('Conte sobre o seu projeto', 'Tell us about your project')}
            </h3>
            <p className="mt-2 text-white/60">
              {t('Sem compromisso. Leva menos de dois minutos.', 'No commitment. It takes less than two minutes.')}
            </p>

            <div aria-live="polite" className="empty:hidden mt-6">
              {error && (
                <div role="alert" className="flex items-start gap-3 bg-red-500/10 p-4 border border-red-400/30 rounded-xl">
                  <AlertCircle className="mt-0.5 w-5 h-5 text-red-300 shrink-0" aria-hidden="true" />
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              )}
            </div>

            {isSubmitted ? (
              <motion.div
                role="status"
                className="flex flex-col items-center py-16 text-center"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <CheckCircle2 className="w-14 h-14 text-smart-green" aria-hidden="true" />
                <p className="mt-5 font-display font-semibold text-white text-2xl">{t('Mensagem enviada!', 'Message sent!')}</p>
                <p className="mt-2 max-w-sm text-white/70">
                  {t('Obrigado pelo contato. Em breve retornaremos.', 'Thank you for reaching out. We’ll get back to you soon.')}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="gap-5 grid sm:grid-cols-2 mt-8">
                <div>
                  <label htmlFor="name" className="field-label">
                    {t('Nome', 'Name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    minLength={2}
                    maxLength={100}
                    disabled={isLoading}
                    className="field"
                    placeholder={t('Seu nome', 'Your name')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="field-label">
                    {t('E-mail', 'Email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="field"
                    placeholder={t('seu@email.com', 'your@email.com')}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="field-label">
                    {t('Telefone / WhatsApp', 'Phone / WhatsApp')}{' '}
                    <span className="font-normal text-white/50">{t('(opcional)', '(optional)')}</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength={30}
                    disabled={isLoading}
                    className="field"
                    placeholder="+55 (00) 00000-0000"
                  />
                </div>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="field-label">
                    {t('Sobre o projeto', 'About the project')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    disabled={isLoading}
                    className="resize-none field"
                    placeholder={t(
                      'Ex.: tenho uma clínica e quero um site para apresentar os serviços e receber pedidos de agendamento.',
                      'E.g.: I run a clinic and want a website to present our services and receive appointment requests.'
                    )}
                  />
                </div>

                <div className="sm:col-span-2">
                  <button type="submit" disabled={isLoading} className="w-full sm:w-auto btn btn-primary">
                    <span>
                      {isLoading
                        ? t('Enviando...', 'Sending...')
                        : t('Vamos conversar sobre seu projeto', "Let's talk about your project")}
                    </span>
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    ) : (
                      <ArrowRight className="w-4 h-4 btn-arrow" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
