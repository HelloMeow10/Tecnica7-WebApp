import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactoSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["(011) 4242-8950", "(011) 4242-8951"],
      description: "Llamanos en horario de atención"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["eest7banfield@abc.gob.ar", "secretaria.eest7@edu.ar"],
      description: "Te respondemos en 24hs"
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Av. Hipólito Yrigoyen 8286", "Banfield, Buenos Aires"],
      description: "A 2 cuadras de la estación"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun a Vie: 8:00 - 18:00", "Sáb: 8:00 - 12:00"],
      description: "Horario de atención al público"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
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
                <div className="bg-gradient-primary h-64 flex items-center justify-center text-white">
                  <div className="text-center space-y-4">
                    <MapPin className="h-12 w-12 mx-auto" />
                    <div>
                      <h4 className="font-heading font-bold text-xl">Ubicación</h4>
                      <p className="text-white/90">Av. Hipólito Yrigoyen 8286, Banfield</p>
                      <p className="text-sm text-white/80 mt-2">
                        Fácil acceso por transporte público
                      </p>
                    </div>
                  </div>
                </div>
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

            {/* Quick Actions */}
            <div className="grid gap-4">
              <Button 
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold py-3"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </Button>
              <Button 
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold py-3"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;