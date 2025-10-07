import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import escudotec from '../assets/escudotec.png';

const NoticiasSection = () => {
  return (
    <section id="noticias" className="py-20 bg-gradient-to-b from-white-400 via-gray-300 to-gray-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-heading text-black drop-shadow-md">
          Últimas Noticias
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-gray-400/10 backdrop-blur-lg border border-gray-200/20 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-2 sm:p-4">
              <iframe
                src="https://rss.app/embed/v1/magazine/aNGzeHNdBWZrQWlM"
                width="100%"
                height="800"
                frameBorder="0"
                className="w-full rounded-2xl"
                allow="clipboard-write"
                title="Instagram Feed"
                style={{
                  border: 'none',
                  background: 'transparent',
                  display: 'block',
                  minHeight: 400,
                  maxHeight: 900,
                }}
                scrolling="yes"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="https://www.instagram.com/tecnica7banfield/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md bg-gray-900/50 backdrop-blur-sm border border-gray-700/20 rounded-2xl p-6 flex items-center space-x-6 transition-all duration-300 hover:bg-gray-700/70 hover:shadow-xl"
          >
            <img
              src={escudotec}
              alt="Perfil de Instagram"
              className="h-30 w-20 rounded-full border-2 border-pink-500 object-cover"
            />
            <div className="flex-grow">
              <p className="font-bold text-white text-lg">tecnica7banfield</p>
              <p className="text-gray-300 text-sm">E.E.S.T N°7 "Técnicos en Libertad"</p>
            </div>
            <div className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-7 py-1 rounded-lg transition-colors">
              Ver Perfil
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;