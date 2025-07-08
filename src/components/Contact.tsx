
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-smart-dark text-white section-padding">
      <div className="container-width">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 mb-6 px-4 py-2 border border-white/20 rounded-full">
            <Mail className="w-4 h-4 text-smart-green" />
            <span className="font-medium text-white text-sm">
              {t('Contato', 'Contact')}
            </span>
          </div>
          <h2 className="mb-6 font-bold text-white text-3xl sm:text-4xl lg:text-5xl">
            {t('Vamos criar algo', 'Let\'s create something')}{' '}
            <span className="gradient-text">
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
          {/* Contact Info */}
          <div>
            <h3 className="mb-8 font-bold text-white text-2xl">
              {t('Entre em contato', 'Get in touch')}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex justify-center items-center bg-smart-green/20 rounded-lg w-12 h-12">
                  <Mail className="w-6 h-6 text-smart-green" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    {t('Email', 'Email')}
                  </h4>
                  <p className="text-gray-300">smartsiteslab@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex justify-center items-center bg-smart-green/20 rounded-lg w-12 h-12">
                  <Phone className="w-6 h-6 text-smart-green" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    {t('Telefone', 'Phone')}
                  </h4>
                  <p className="text-gray-300">+55 (61) 99112-7447</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex justify-center items-center bg-smart-green/20 rounded-lg w-12 h-12">
                  <MapPin className="w-6 h-6 text-smart-green" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    {t('Localização', 'Location')}
                  </h4>
                  <p className="text-gray-300">Belo Horizonte - MG</p>
                  <p className="text-gray-300">{t('Atendimento remoto', 'Remote service')}</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
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

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-2xl">
            <h3 className="mb-6 font-bold text-white text-2xl">
              {t('Envie uma mensagem', 'Send a message')}
            </h3>

            {isSubmitted ? (
              <div className="flex justify-center items-center py-12">
                <div className="text-center">
                  <CheckCircle className="mx-auto mb-4 w-16 h-16 text-smart-green" />
                  <h4 className="mb-2 font-semibold text-white text-xl">
                    {t('Mensagem enviada!', 'Message sent!')}
                  </h4>
                  <p className="text-gray-300">
                    {t('Obrigado pelo contato. Retornaremos em breve.', 'Thank you for contacting us. We\'ll get back to you soon.')}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-white text-sm">
                    {t('Nome completo', 'Full name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 px-4 py-3 border border-white/20 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-smart-green w-full text-white transition-all duration-200 placeholder-gray-400"
                    placeholder={t('Seu nome', 'Your name')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-white text-sm">
                    {t('Email', 'Email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 px-4 py-3 border border-white/20 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-smart-green w-full text-white transition-all duration-200 placeholder-gray-400"
                    placeholder={t('seu@email.com', 'your@email.com')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-white text-sm">
                    {t('Mensagem', 'Message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/10 px-4 py-3 border border-white/20 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-smart-green w-full text-white transition-all duration-200 resize-none placeholder-gray-400"
                    placeholder={t('Conte-nos sobre seu projeto...', 'Tell us about your project...')}
                  />
                </div>

                <button
                  type="submit"
                  className="group flex justify-center items-center space-x-2 w-full btn-primary"
                >
                  <span>{t('Enviar mensagem', 'Send message')}</span>
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
