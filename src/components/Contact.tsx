import { useState } from 'react';
import { Send, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderemos en las próximas 24 horas. ¡Vamos a crear algo épico juntos!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      project: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hola@staymadagency.com",
      action: "mailto:hola@staymadagency.com"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+52 (55) 1234-5678",
      action: "tel:+525512345678"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Ciudad de México, México",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-highlight">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6">
            HABLEMOS
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            DE TU PROYECTO
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes una idea rebelde? Cuéntanos y la convertiremos en realidad visual
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-glow p-8">
            <div className="relative z-10">
              <h4 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 text-primary mr-3" />
                Cuéntanos tu Visión
              </h4>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-dark-surface border-border text-foreground focus:border-primary"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-dark-surface border-border text-foreground focus:border-primary"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Proyecto
                  </label>
                  <Input
                    id="project"
                    name="project"
                    type="text"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="bg-dark-surface border-border text-foreground focus:border-primary"
                    placeholder="Branding, Web Design, Gráfico, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-dark-surface border-border text-foreground focus:border-primary resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, tus ideas, tu visión... ¡Queremos conocer todos los detalles rebeldes!"
                  />
                </div>

                <Button type="submit" className="btn-rebel w-full text-lg py-4">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-heading font-bold text-foreground mb-6">
                Conecta con Nosotros
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Estamos listos para escuchar tu historia y transformarla en una experiencia 
                visual que rompa con lo establecido. No importa si tienes todo claro o 
                apenas una idea: juntos construiremos algo épico.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-rebel rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Proof */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h5 className="text-lg font-heading font-bold text-foreground mb-4">
                Respuesta Rápida Garantizada
              </h5>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Respuesta en menos de 24 horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Consulta inicial gratuita</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Propuesta personalizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;