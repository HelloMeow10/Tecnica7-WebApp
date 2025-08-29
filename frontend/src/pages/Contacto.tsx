import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactoPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["(011) 4248-6259", "11 6523-3593"],
      description: "Llamanos en horario de atención"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["eet7lz@yahoo.com.ar", "secretaria.eest7@edu.ar"],
      description: "Te respondemos en 24hs"
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Manuel Acevedo 1864, Banfield", "Buenos Aires"],
      description: "A 2 cuadras de la estación"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lunes a Viernes: 08:00 - 21:00", "Sábados: 09:00 - 12:00"],
      description: "Horario de atención al público"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <section id="contacto" className="bg-background">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
                <span className="text-primary">Contactanos</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ¿Tenés dudas sobre nuestras carreras o el proceso de inscripción?
                Estamos aquí para ayudarte a dar el primer paso hacia tu futuro técnico.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-2xl text-foreground">
                    Información de Contacto
                  </h3>

                  <div className="grid gap-6">
                    {contactInfo.map((info, index) => (
                      <Card key={index} className="card-elegant">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                              <info.icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-heading font-bold text-lg text-foreground">
                                {info.title}
                              </h4>
                              <div className="space-y-1">
                                {info.details.map((detail, idx) => (
                                  <p key={idx} className="text-foreground font-medium">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {info.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <Card className="card-elegant overflow-hidden">
                  <CardContent className="p-0">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.361994966678!2d-58.39415772439851!3d-34.7469950643793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd2955f210a47%3A0x6a386b8333434563!2sE.E.S.T%20N%C2%B07%20%22Rep%C3%BAblica%20de%20Montenegro%22!5e0!3m2!1ses-419!2sar!4v1724944360432!5m2!1ses-419!2sar" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="space-y-8">
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl text-foreground flex items-center">
                      <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                      Envianos un Mensaje
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Nombre *
                        </label>
                        <Input
                          placeholder="Tu nombre completo"
                          className="bg-surface border-input-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Email *
                        </label>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          className="bg-surface border-input-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Teléfono
                      </label>
                      <Input
                        placeholder="Tu número de teléfono"
                        className="bg-surface border-input-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Asunto
                      </label>
                      <Input
                        placeholder="¿En qué podemos ayudarte?"
                        className="bg-surface border-input-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Mensaje *
                      </label>
                      <Textarea
                        placeholder="Contanos sobre tu consulta..."
                        rows={6}
                        className="bg-surface border-input-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      className="w-full bg-gradient-primary hover:opacity-90 font-bold py-3 btn-glow"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Campos obligatorios. Te responderemos en un plazo máximo de 24 horas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactoPage;
