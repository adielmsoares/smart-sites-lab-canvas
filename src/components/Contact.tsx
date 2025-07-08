
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
    <section id="contact" className="section-padding bg-smart-dark text-white">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <Mail className="w-4 h-4 text-smart-green" />
            <span className="text-sm font-medium text-white">
              {t('Contato', 'Contact')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('Vamos criar algo', 'Let\'s create something')}{' '}
            <span className="gradient-text">
              {t('incrível juntos', 'amazing together')}
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t(
              'Pronto para transformar sua ideia em realidade? Entre em contato conosco e vamos começar seu projeto.',
              'Ready to transform your idea into reality? Contact us and let\'s start your project.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              {t('Entre em contato', 'Get in touch')}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-smart-green/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-smart-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    {t('Email', 'Email')}
                  </h4>
                  <p className="text-gray-300">contato@smartsiteslab.com</p>
                  <p className="text-gray-300">hello@smartsiteslab.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-smart-green/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-smart-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    {t('Telefone', 'Phone')}
                  </h4>
                  <p className="text-gray-300">+55 (11) 99999-9999</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-smart-green/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-smart-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    {t('Localização', 'Location')}
                  </h4>
                  <p className="text-gray-300">São Paulo, Brasil</p>
                  <p className="text-gray-300">{t('Atendimento remoto', 'Remote service')}</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h4 className="font-semibold text-white mb-2">
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
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('Envie uma mensagem', 'Send a message')}
            </h3>

            {isSubmitted ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-smart-green mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">
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
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    {t('Nome completo', 'Full name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-smart-green focus:border-transparent transition-all duration-200"
                    placeholder={t('Seu nome', 'Your name')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    {t('Email', 'Email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-smart-green focus:border-transparent transition-all duration-200"
                    placeholder={t('seu@email.com', 'your@email.com')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    {t('Mensagem', 'Message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-smart-green focus:border-transparent transition-all duration-200 resize-none"
                    placeholder={t('Conte-nos sobre seu projeto...', 'Tell us about your project...')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2 group"
                >
                  <span>{t('Enviar mensagem', 'Send message')}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
