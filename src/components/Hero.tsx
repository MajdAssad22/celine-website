import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import backgroundMap from "@/assets/bg-map.png";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="hero-section min-h-screen flex items-center pt-20"
    >
      <div className="relative container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-8 grid-cols-1 lg:col-span-2">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-6xl font-bold text-primary leading-tight">
                Culture, Emotion, Comfort
                <br /> Designed for daily life.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Award-winning interior designer specializing in functional yet
                beautifully designed interiors. Every project comes with a
                unique story, thoughtfully brought to life with balance,
                emotion, and style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce text-accent hover:text-accent-foreground"
            onClick={scrollToProjects}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
