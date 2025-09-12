import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CarrerasSection from '@/components/CarrerasSection';
import FeaturesSection from '@/components/FeaturesSection';
import NoticiasSection from '@/components/NoticiasSection';
import TestimoniosSection from '@/components/TestimoniosSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { motion } from 'framer-motion'; // Si usas animaciones

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CarrerasSection />
        <FeaturesSection />
        <NoticiasSection />
        <TestimoniosSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
