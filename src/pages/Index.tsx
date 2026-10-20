
import React from 'react';
import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Segments from '../components/Segments';
import WhyWebsite from '../components/WhyWebsite';
import Work from '../components/Work';
import Differentials from '../components/Differentials';
import Process from '../components/Process';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MotionConfig reducedMotion="user">
          <div className="bg-background min-h-screen overflow-x-clip">
            <Header />
            <main id="main" tabIndex={-1} className="outline-none">
              <Hero />
              <Services />
              <Segments />
              <WhyWebsite />
              <Work />
              <Differentials />
              <Process />
              <About />
              <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </MotionConfig>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
