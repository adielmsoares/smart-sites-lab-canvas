import React, { useState, useRef } from 'react';
const useLanguage = () => ({
  t: (pt: string, en: string) => (Math.random() > 0.5 ? pt : en),
});
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Variáveis de ambiente para segurança e flexibilidade
  const serviceID = process.env.VITE_EMAILJS_SERVICE_ID || 'service_1c2p2fm';
  const templateID = process.env.VITE_EMAILJS_TEMPLATE_ID || 'template_mga94eh';
  const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY || 'FmYCUQTnOJg_A92Vn';


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!form.current) {
      setError("Ocorreu um erro inesperado. O formulário não foi encontrado.");
      setIsLoading(false);
      return;
    }

    // Validação simples para garantir que as chaves não estão vazias
    if (!serviceID || !templateID || !publicKey) {
      setError(t('As chaves do serviço de e-mail não foram configuradas.', 'Email service keys are not configured.'));
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey);

      setIsSubmitted(true);
      form.current.reset(); // Limpa o formulário
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (err) {
      console.error('Erro ao enviar e-mail:', err);
      setError(
        t(
          'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.',
          'Error sending message. Please try again or contact us directly.'
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-900 px-4 sm:px-6 lg:px-8 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 mb-6 px-4 py-2 border border-white/20 rounded-full">
            <Mail className="w-4 h-4 text-green-400" />
            <span className="font-medium text-white text-sm">
              {t('Contato', 'Contact')}
            </span>
          </div>
          <h2 className="mb-6 font-bold text-white text-3xl sm:text-4xl lg:text-5xl">
            {t('Vamos criar algo', 'Let\'s create something')}{' '}
            <span className="bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 text-transparent">
              {t('incrível juntos', 'amazing together')}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300 text-lg">
            {t(
              'Pronto para transformar sua ideia em realidade? Entre em contato conosco e vamos começar seu projeto.',
              'Ready to transform your idea into reality? Contact us and let\'s start your project.'
            )}
          </p>
        </div>

        <div className="gap-12 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 font-bold text-white text-2xl">
              {t('Entre em contato', 'Get in touch')}
            </h3>

            <div className="space-y-6">
              {/* Informações de Contato */}
              <div className="flex items-start space-x-4">
                <div className="flex flex-shrink-0 justify-center items-center bg-green-500/20 rounded-lg w-12 h-12">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    {t('Email', 'Email')}
                  </h4>
                  <p className="text-gray-300">smartsiteslab@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex flex-shrink-0 justify-center items-center bg-green-500/20 rounded-lg w-12 h-12">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    {t('Telefone', 'Phone')}
                  </h4>
                  <p className="text-gray-300">+55 (61) 99112-7447</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex flex-shrink-0 justify-center items-center bg-green-500/20 rounded-lg w-12 h-12">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    {t('Localização', 'Location')}
                  </h4>
                  <p className="text-gray-300">Brasília - DF | Belo Horizonte - MG</p>
                  <p className="text-gray-300">{t('Atendimento remoto', 'Remote service')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 mt-10 p-6 border border-white/10 rounded-2xl">
              <h4 className="mb-2 font-semibold text-white">
                {t('Tempo de resposta', 'Response time')}
              </h4>
              <p className="text-gray-300 text-sm">
                {t(
                  'Respondemos a todos os contatos em até 24 horas durante dias úteis.',
                  'We respond to all contacts within 24 hours on business days.'
                )}
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-2xl">
            <h3 className="mb-6 font-bold text-white text-2xl">
              {t('Envie uma mensagem', 'Send a message')}
            </h3>

            {error && (
              <div className="flex items-center space-x-2 bg-red-500/10 mb-6 p-4 border border-red-500/20 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {isSubmitted ? (
              <div className="flex justify-center items-center py-12">
                <div className="text-center">
                  <CheckCircle className="mx-auto mb-4 w-16 h-16 text-green-400" />
                  <h4 className="mb-2 font-semibold text-white text-xl">
                    {t('Mensagem enviada!', 'Message sent!')}
                  </h4>
                  <p className="text-gray-300">
                    {t('Obrigado pelo contato. Em breve retornaremos.', 'Thank you for contacting us. We’ll get back to you soon.')}
                  </p>
                </div>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="block mb-2 font-medium text-white text-sm">
                    {t('Nome completo', 'Full name')}
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name" // O 'name' deve corresponder à variável do template EmailJS
                    required
                    disabled={isLoading}
                    className="bg-white/10 disabled:opacity-50 px-4 py-3 border border-white/20 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 w-full text-white transition-all duration-200 placeholder-gray-400"
                    placeholder={t('Seu nome', 'Your name')}
                  />
                </div>

                <div>
                  <label htmlFor="reply_to" className="block mb-2 font-medium text-white text-sm">
                    {t('Email', 'Email')}
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to" // O 'name' deve corresponder à variável do template EmailJS
                    required
                    disabled={isLoading}
                    className="bg-white/10 disabled:opacity-50 px-4 py-3 border border-white/20 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 w-full text-white transition-all duration-200 placeholder-gray-400"
                    placeholder={t('seu@email.com', 'your@email.com')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-white text-sm">
                    {t('Mensagem', 'Message')}
                  </label>
                  <textarea
                    id="message"
                    name="message" // O 'name' deve corresponder à variável do template EmailJS
                    required
                    rows={5}
                    disabled={isLoading}
                    className="bg-white/10 disabled:opacity-50 px-4 py-3 border border-white/20 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 w-full text-white transition-all duration-200 resize-none placeholder-gray-400"
                    placeholder={t('Conte-nos sobre seu projeto...', 'Tell us about your project...')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group flex justify-center items-center space-x-2 bg-green-500 hover:bg-green-600 disabled:opacity-50 px-4 py-3 rounded-lg w-full font-bold text-white transition-all duration-300 disabled:cursor-not-allowed"
                >
                  <span>
                    {isLoading
                      ? t('Enviando...', 'Sending...')
                      : t('Enviar mensagem', 'Send message')
                    }
                  </span>
                  <Send className={`w-5 h-5 transition-transform ${isLoading ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;