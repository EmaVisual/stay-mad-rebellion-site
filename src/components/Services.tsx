import { Palette, Monitor, Layers, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding",
      description: "Identidades visuales que reflejan tu esencia artística y conectan con tu audiencia de forma auténtica."
    },
    {
      icon: Monitor,
      title: "Diseño Web",
      description: "Sitios web que impactan, optimizados para la experiencia del usuario y el crecimiento de tu marca."
    },
    {
      icon: Layers,
      title: "Diseño Gráfico",
      description: "Desde portadas de álbumes hasta merchandising, cada pieza visual cuenta tu historia única."
    },
    {
      icon: Zap,
      title: "UX/UI",
      description: "Interfaces intuitivas y experiencias digitales que mantienen a tu audiencia enganchada."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-dark">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6">
            UN ECOSISTEMA
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            PARA TU MARCA
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Servicios diseñados específicamente para la industria musical y alternativa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glow text-center group cursor-pointer"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-rebel rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h4 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className="w-0 h-0.5 bg-primary mx-auto mt-4 group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Listo para revolucionar tu presencia visual?
          </p>
          <button className="btn-rebel">
            Comenzar Proyecto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;