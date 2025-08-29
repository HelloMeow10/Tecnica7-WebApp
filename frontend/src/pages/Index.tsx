import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CarrerasSection from '@/components/CarrerasSection';
import FeaturesSection from '@/components/FeaturesSection';
import NoticiasSection from '@/components/NoticiasSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CarrerasSection />
        <FeaturesSection />
        <NoticiasSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
