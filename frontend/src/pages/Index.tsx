import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CarrerasSection from '@/components/CarrerasSection';
import FeaturesSection from '@/components/FeaturesSection';
import NoticiasSection from '@/components/NoticiasSection';
import ContactoSection from '@/components/ContactoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CarrerasSection />
        <FeaturesSection />
        <NoticiasSection />
        <ContactoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
