import {
  Home,
  Palette,
  Lightbulb,
  Sofa,
  Layout,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import MasonryGallery from "@/components/MasonryGallery";

import colorConsultation1 from "@/assets/services/color-consultation/color-consultation-1.jpeg";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Space Planning",
    },
    {
      icon: Palette,
      title: "Color Consultation",
      images: [colorConsultation1],
    },
    {
      icon: Sofa,
      title: "Furniture Selection & Design",
    },
    {
      icon: Lightbulb,
      title: "Lighting Selection & Design",
    },
    {
      icon: Home,
      title: "Full Home Design",
    },
    {
      icon: Sparkles,
      title: "Styling & Staging",
    },
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From initial concept to final styling, I offer comprehensive
            interior design services tailored to your unique needs and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  aria-label={`Open ${service.title} details`}
                  className="group project-card bg-background p-8 rounded-2xl text-center hover:shadow-lg transform transition-transform hover:-translate-y-1 cursor-pointer hover:bg-sage/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage/50"
                >
                  <div className="flex items-center justify-center w-20 h-20 bg-sage/10 rounded-xl mb-6 mx-auto">
                    <service.icon className="h-10 w-10 text-sage" />
                  </div>

                  <div className="inline-flex items-center justify-center">
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-primary inline">
                      {service.title}
                    </h3>
                  </div>

                  <span className="text-sm text-muted-foreground opacity-80 mt-2 flex items-center justify-center gap-2">
                    View
                    <ChevronRight className="h-4 w-4 text-sage opacity-80 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{service.title}</DialogTitle>
                </DialogHeader>

                {service.images && service.images.length > 0 && (
                  <div className="mt-4">
                    <MasonryGallery
                      images={service.images}
                      title={service.title}
                    />
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
