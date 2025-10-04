import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import bgMap from "@/assets/bg-map.png";
import { motion } from "framer-motion";

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
      className="min-h-screen flex items-center relative overflow-hidden container mx-auto"
    >
      <div
        className="absolute right-0 top-0 h-full w-full lg:w-1/2 rotate-45 pointer-events-none select-none me-16 opacity-20 md:opacity-40 xl:opacity-90"
        style={{
          backgroundImage: `url(${bgMap})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "contain",
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <motion.div
        className="relative z-10 px-0 sm:px-8 md:ms-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-8 grid-cols-1 lg:col-span-2">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-6xl font-bold text-primary leading-tight">
                Culture, Emotion, Comfort
                <span className="sm:inline hidden">
                  <br /> Designed for daily life.
                </span>
              </h1>
              <p className="text-md md:text-xl text-muted-foreground leading-relaxed max-w-xl">
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
      </motion.div>
      <div className="absolute left-0 right-0 bottom-6 flex justify-center z-20">
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce text-accent hover:text-accent-foreground"
          onClick={scrollToProjects}
          aria-label="Scroll to projects"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
