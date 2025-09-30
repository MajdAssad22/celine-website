import { Home, Palette, Lightbulb, Sofa, Layout, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Space Planning",
      description: "Optimizing your space for both functionality and flow, ensuring every square foot serves a purpose."
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Expert color selection that enhances your space's mood and reflects your personal style."
    },
    {
      icon: Sofa,
      title: "Furniture Selection",
      description: "Curating and sourcing the perfect pieces that combine style, comfort, and quality."
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Creating layered lighting solutions that enhance ambiance and highlight your space's best features."
    },
    {
      icon: Home,
      title: "Full Home Design",
      description: "Complete interior design services from concept to completion for your entire home."
    },
    {
      icon: Sparkles,
      title: "Styling & Staging",
      description: "Professional styling services that bring your space to life with carefully chosen accessories."
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From initial concept to final styling, I offer comprehensive interior design 
            services tailored to your unique needs and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="project-card bg-background p-8 rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 bg-sage/10 rounded-xl mb-6">
                <service.icon className="h-8 w-8 text-sage" />
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-background p-8 rounded-2xl project-card max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's schedule a consultation to discuss your project and explore how we can 
              create a space that perfectly reflects your style and meets your needs.
            </p>
            <button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-sage hover:bg-sage-dark text-sage-foreground px-8 py-3 rounded-xl font-medium transition-colors duration-300"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;