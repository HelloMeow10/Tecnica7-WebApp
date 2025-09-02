import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, AlertCircle, CheckCircle, Facebook, Instagram } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ContactoPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    Email: '',
    telefono: '',
    asunto: '',
    comentario: ''
  });
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

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

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/tecnica7ldz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/tecnica7.banfield.3",
    }
  ]

  const faqItems = [
    {
      question: "¿Cuáles son los requisitos de inscripción?",
      answer: "Para inscribirte, necesitás presentar tu DNI, certificado de estudios primarios completos y completar el formulario de inscripción en nuestra secretaría."
    },
    {
      question: "¿La escuela tiene algún costo?",
      answer: "No, somos una escuela pública y la educación es gratuita. Solo se solicita una colaboración anual a la cooperadora para el mantenimiento de los talleres y equipamiento."
    },
    {
      question: "¿Qué título obtengo al egresar?",
      answer: "Al finalizar tus estudios, obtendrás el título de Técnico en la especialidad que elijas (Programación o Multimedios), con validez nacional."
    },
    {
      question: "¿Hay pasantías o prácticas profesionalizantes?",
      answer: "Sí, en el último año de la carrera, los estudiantes realizan prácticas profesionalizantes en empresas y organizaciones del sector, aplicando los conocimientos adquiridos."
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.nombre || !formData.Email || !formData.comentario) {
      setStatus({ loading: false, error: 'Por favor, completá todos los campos obligatorios.', success: '' });
      return;
    }
    setStatus({ loading: true, error: '', success: '' });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error al enviar el formulario.');
      }
      setStatus({ loading: false, error: '', success: data.message });
      setFormData({ nombre: '', Email: '', telefono: '', asunto: '', comentario: '' });
    } catch (error: any) {
      setStatus({ loading: false, error: error.message, success: '' });
    }
  };

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

                {/* Social Media */}
                <div className="space-y-6">
                  <h3 className="font-heading font-bold text-2xl text-foreground">
                    Seguinos en Redes
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map(link => (
                      <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                        <Card className="card-elegant hover:bg-muted/50 transition-colors">
                          <CardContent className="p-4 flex items-center gap-4">
                            <link.icon className="h-8 w-8 text-primary" />
                            <span className="font-semibold">{link.name}</span>
                          </CardContent>
                        </Card>
                      </a>
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

              {/* Contact Form & FAQ */}
              <div className="space-y-8">
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl text-foreground flex items-center">
                      <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                      Envianos un Mensaje
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                            Nombre *
                          </label>
                          <Input
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Tu nombre completo"
                            className="bg-surface border-input-border focus:border-primary"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="Email" className="text-sm font-medium text-foreground">
                            Email *
                          </label>
                          <Input
                            id="Email"
                            name="Email"
                            type="email"
                            value={formData.Email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                            className="bg-surface border-input-border focus:border-primary"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="telefono" className="text-sm font-medium text-foreground">
                          Teléfono
                        </label>
                        <Input
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="Tu número de teléfono"
                          className="bg-surface border-input-border focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="asunto" className="text-sm font-medium text-foreground">
                          Asunto
                        </label>
                        <Input
                          id="asunto"
                          name="asunto"
                          value={formData.asunto}
                          onChange={handleChange}
                          placeholder="¿En qué podemos ayudarte?"
                          className="bg-surface border-input-border focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="comentario" className="text-sm font-medium text-foreground">
                          Mensaje *
                        </label>
                        <Textarea
                          id="comentario"
                          name="comentario"
                          value={formData.comentario}
                          onChange={handleChange}
                          placeholder="Contanos sobre tu consulta..."
                          rows={6}
                          className="bg-surface border-input-border focus:border-primary resize-none"
                          required
                        />
                      </div>

                      {status.error && (
                        <div className="flex items-center text-red-500">
                          <AlertCircle className="h-4 w-4 mr-2" />
                          <p className="text-sm">{status.error}</p>
                        </div>
                      )}
                      {status.success && (
                        <div className="flex items-center text-green-500">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          <p className="text-sm">{status.success}</p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full bg-gradient-primary hover:opacity-90 font-bold py-3 btn-glow"
                        size="lg"
                        disabled={status.loading}
                      >
                        {status.loading ? 'Enviando...' : <> <Send className="mr-2 h-5 w-5" /> Enviar Mensaje </>}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        * Campos obligatorios. Te responderemos en un plazo máximo de 24 horas.
                      </p>
                    </form>
                  </CardContent>
                </Card>

                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl text-foreground">
                      Preguntas Frecuentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {faqItems.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                          <AccordionTrigger>{item.question}</AccordionTrigger>
                          <AccordionContent>
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
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
