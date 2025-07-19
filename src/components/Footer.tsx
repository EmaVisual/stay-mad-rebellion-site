import { Zap, Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Sobre Nosotros",
      links: [
        { name: "Quiénes Somos", href: "#about" },
        { name: "Nuestro Proceso", href: "#process" },
        { name: "Valores", href: "#values" },
        { name: "Equipo", href: "#team" }
      ]
    },
    {
      title: "Servicios",
      links: [
        { name: "Branding", href: "#services" },
        { name: "Diseño Web", href: "#services" },
        { name: "Diseño Gráfico", href: "#services" },
        { name: "UX/UI Design", href: "#services" }
      ]
    },
    {
      title: "Recursos",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Casos de Estudio", href: "#cases" },
        { name: "Testimonios", href: "#testimonials" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/staymadagency", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/staymadagency", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/@staymadagency", label: "YouTube" },
    { icon: Linkedin, href: "https://linkedin.com/company/staymadagency", label: "LinkedIn" }
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "hola@staymadagency.com",
      href: "mailto:hola@staymadagency.com"
    },
    {
      icon: Phone,
      text: "+52 (55) 1234-5678",
      href: "tel:+525512345678"
    },
    {
      icon: MapPin,
      text: "Ciudad de México, México",
      href: "#"
    }
  ];

  return (
    <footer className="bg-dark-highlight border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-rebel rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-heading font-bold tracking-wider text-gradient">
                STAY MAD
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Agencia creativa fundada por artistas, para artistas. Transformamos 
              ideas rebeldes en diseños que impactan y comunican con autenticidad.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <info.icon className="w-4 h-4" />
                  <span className="text-sm">{info.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-heading font-bold text-foreground mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-heading font-bold text-foreground mb-4">
                Mantente al Día con las Últimas Tendencias
              </h4>
              <p className="text-muted-foreground">
                Recibe insights exclusivos sobre diseño, casos de estudio y tendencias 
                en la industria musical y alternativa.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-dark-surface border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
              />
              <button className="btn-rebel whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Legal */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground">Síguenos:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#terms" className="hover:text-primary transition-colors">
                Términos de Servicio
              </a>
              <a href="#cookies" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Stay Mad Agency. Todos los derechos reservados. 
              <span className="text-primary font-medium ml-2">
                Diseñado para romper esquemas.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Top Border Effect */}
      <div className="h-1 bg-gradient-rebel"></div>
    </footer>
  );
};

export default Footer;