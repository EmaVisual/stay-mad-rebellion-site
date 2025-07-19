import { Check, Users, Lightbulb, Target } from 'lucide-react';
import artistWorking from '@/assets/artist-working.jpg';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Enfoque Personalizado",
      description: "Cada proyecto es único, como tu arte. No usamos plantillas, creamos experiencias a medida."
    },
    {
      icon: Lightbulb,
      title: "Entendemos la Industria",
      description: "Somos músicos, diseñadores y artistas. Conocemos el ecosistema desde adentro."
    },
    {
      icon: Target,
      title: "Diseños Auténticos",
      description: "Nada genérico. Todo original. Rompemos con lo establecido para destacar tu esencia."
    }
  ];

  const achievements = [
    "Más de 50 artistas empoderados",
    "100+ proyectos que rompen esquemas", 
    "Especialistas en industria musical",
    "Equipo 100% creativo y rebelde"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient">CREADA POR</span>
                <br />
                <span className="text-foreground">ARTISTAS,</span>
                <br />
                <span className="text-primary">PARA ARTISTAS</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                No somos una agencia tradicional. Somos un colectivo de creativos que entiende 
                profundamente tanto el arte como la necesidad de comunicación visual potente.
              </p>
            </div>

            {/* Reasons */}
            <div className="space-y-8 mb-12">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-rebel rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-foreground mb-2">
                      {reason.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button className="btn-outline">
                Conoce Nuestro Proceso
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={artistWorking}
                alt="Artista trabajando en estudio creativo"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
              
              {/* Floating Stats */}
              <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                <div className="text-2xl font-heading font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                <div className="text-2xl font-heading font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfacción garantizada</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-float opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;