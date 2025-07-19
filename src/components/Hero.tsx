import { Eye, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-dark-highlight/60"></div>
        <div className="absolute inset-0 bg-gradient-dark opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
              <span className="block text-foreground">TU VISIÓN</span>
              <span className="block text-gradient text-glitch" data-text="TIENE UNA VOZ">
                TIENE UNA VOZ
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-text-secondary mb-4 font-light">
              Nosotros le damos el look que
            </p>
            <p className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
              ROMPE ESQUEMAS
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Somos una agencia creativa fundada por artistas, para artistas. 
              Transformamos ideas rebeldes en diseños que impactan y comunican con autenticidad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="btn-rebel text-lg px-8 py-4 animate-pulse-glow">
                <Eye className="w-5 h-5 mr-2" />
                Ver Portafolio
              </Button>
              <Button className="btn-outline text-lg px-8 py-4">
                <Palette className="w-5 h-5 mr-2" />
                Nuestros Servicios
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Artistas Empoderados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Proyectos Rebeldes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Años Rompiendo</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;