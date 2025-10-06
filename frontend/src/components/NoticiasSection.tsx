import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NoticiasSection = () => {
  return (
    <section id="noticias" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-heading text-blue-900">
          Noticias
        </h2>
        <div className="flex justify-center">
          <div
            className="
              rounded-2xl p-1
              bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600
              shadow-xl
              transition-shadow
              hover:shadow-[0_0_40px_10px_rgba(225,48,108,0.3)]
              w-full
              max-w-[900px]
            "
          >
            <div className="bg-white rounded-2xl overflow-hidden">
              <iframe
                src="https://rss.app/embed/v1/magazine/aNGzeHNdBWZrQWlM"
                width="100%"
                height="800"
                frameBorder="0"
                className="w-full"
                allow="clipboard-write"
                title="Instagram Feed"
                style={{
                  border: 'none',
                  background: 'transparent',
                  display: 'block',
                  minHeight: 400,
                  maxHeight: 900,
                }}
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <a
            href="https://www.instagram.com/tecnica7banfield/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:brightness-110 transition"
          >
            Ver más en nuestro Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;