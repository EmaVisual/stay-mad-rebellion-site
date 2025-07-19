import { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Web Design' },
    { id: 'graphic', label: 'Gráfico' }
  ];

  const projects = [
    {
      id: 1,
      title: "Underground Records",
      category: "branding",
      description: "Identidad visual completa para sello discográfico independiente",
      image: portfolio1,
      tags: ["Branding", "Logo Design", "Packaging"]
    },
    {
      id: 2,
      title: "The Rebels Website",
      category: "web",
      description: "Sitio web para banda de rock alternativo con tienda integrada",
      image: portfolio2,
      tags: ["Web Design", "E-commerce", "UX/UI"]
    },
    {
      id: 3,
      title: "Festival Poster Series",
      category: "graphic",
      description: "Serie de pósters para festival de música underground",
      image: portfolio3,
      tags: ["Poster Design", "Tipografía", "Arte Digital"]
    },
    {
      id: 4,
      title: "Vinyl Cover Collection",
      category: "branding",
      description: "Colección de portadas para lanzamientos de vinilo",
      image: portfolio1,
      tags: ["Album Art", "Branding", "Print Design"]
    },
    {
      id: 5,
      title: "Artist Portfolio Site",
      category: "web",
      description: "Portfolio digital para artista visual emergente",
      image: portfolio2,
      tags: ["Portfolio", "Web Design", "Gallery"]
    },
    {
      id: 6,
      title: "Concert Merchandise",
      category: "graphic",
      description: "Diseño de merchandising para gira internacional",
      image: portfolio3,
      tags: ["Merch Design", "T-shirts", "Stickers"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-gradient-dark">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6">
            UNIVERSOS QUE
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            HEMOS CREADO
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada proyecto es una historia única, un universo visual que rompe con lo establecido
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`${
                activeFilter === filter.id 
                  ? "btn-rebel" 
                  : "btn-outline"
              } transition-all duration-300`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card-glow group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                {/* Image */}
                <div className="relative rounded-lg overflow-hidden mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="btn-rebel">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Proyecto
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-border rounded-full text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Quieres ver más de nuestro trabajo?
          </p>
          <Button className="btn-outline">
            Ver Portfolio Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;