import hygeia from "@/assets/hygeia.png";
import stoneStory from "@/assets/story-stone.png";
import ventusphere from "@/assets/ventusphere.png";

const ProjectsGallery = () => {
  const projects = [
    {
      id: 1,
      title: "Stone & Story",
      category: "Interior",
      points: ["Culture", "Conservation", "Archeology", "History", "Community"],
      image: stoneStory,
    },
    {
      id: 2,
      title: "Hygeia",
      category: "Interior",
      points: [
        "Futuristic design",
        "Modularity",
        "Emotional well-being",
        "Hygienic environment",
      ],
      image: hygeia,
    },
    {
      id: 3,
      title: "Ventusphere",
      category: "Interior",
      points: ["Natural ventilation", "Clients"],
      image: ventusphere,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card z-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover a curated selection of my most recent interior design
            projects, each crafted with attention to detail and timeless
            elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-background rounded-2xl overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[5/4] object-cover"
                />
                <div className="absolute top-4 left-4 bg-sage/90 text-sage-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.points.map((point) => (
                    <div>{point}</div>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-accent hover:text-accent-foreground font-medium underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-300"
          >
            Let's discuss your project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
