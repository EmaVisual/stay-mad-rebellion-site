import { Eye, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <div style={{padding:'56.25% 0 0 0',position:'relative'}}>
          <iframe 
            src="https://player.vimeo.com/video/1102813622?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} 
            title="Stay Mad Hero"
          />
        </div>
        <div className="absolute inset-0 bg-dark-highlight/60"></div>
      </div>

      {/* CTA Buttons */}
      <div className="relative z-10 pb-20 px-4">
        <div className="container-wide">
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
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-4 h-4 bg-primary animate-float opacity-60"></div>
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-secondary animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      
      <script src="https://player.vimeo.com/api/player.js"></script>
    </section>
  );
};

export default Hero;