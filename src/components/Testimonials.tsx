import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Vocalista de The Midnight Rebels",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Stay Mad transformó completamente nuestra imagen. Captaron perfectamente la esencia rebelde de nuestra música y la convirtieron en una identidad visual que nos representa al 100%.",
      rating: 5,
      project: "Branding Completo"
    },
    {
      id: 2,
      name: "Maria Santos",
      role: "Directora de Estudio Underworld",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=150&h=150&fit=crop&crop=face",
      content: "El sitio web que crearon para nuestro estudio es una obra de arte. Los artistas se sienten conectados desde el primer vistazo. Han aumentado nuestras consultas un 300%.",
      rating: 5,
      project: "Diseño Web + UX/UI"
    },
    {
      id: 3,
      name: "Carlos Mendoza",
      role: "Fundador de Alternative Fashion Co.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Entendieron perfectamente nuestra visión alternativa. Cada diseño que crean para nosotros rompe con lo establecido y conecta con nuestra audiencia rebelde.",
      rating: 5,
      project: "Branding + Diseño Gráfico"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-secondary/20">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6">
            VOCES QUE
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            NOS RESPALDAN
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros artistas es nuestra mayor inspiración
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="card-glow p-8 md:p-12 text-center relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light italic">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            {/* Avatar and Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white fill-current" />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <div className="text-xl font-heading font-bold text-foreground">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground mb-1">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="text-primary text-sm font-medium">
                  Proyecto: {testimonials[currentTestimonial].project}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-card border-border hover:border-primary"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-card border-border hover:border-primary"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary scale-125' 
                  : 'bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Listo para ser la próxima historia de éxito?
          </p>
          <Button className="btn-rebel">
            Comenzar Mi Proyecto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;