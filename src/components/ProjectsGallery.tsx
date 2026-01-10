import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const ProjectsGallery = () => {
  return (
    <section id="projects" className="pb-20 bg-card z-50">
      <p className="font-serif text-3xl px-2 font-bold tracking-wider text-primary-foreground text-center mb-16 py-8 bg-primary ">
        Design is a translation of knowledge into form.
      </p>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Featured Projects
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
            >
              <Link
                to={`/${project.slug}`}
                className="project-card cursor-pointer bg-background rounded-2xl overflow-hidden block hover:shadow-lg transition-all duration-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="aspect-[5/4] object-cover pointer-events-none"
                  />
                  {project.awardWinning ? (
                    <Award
                      className="absolute text-primary w-10 h-10 top-4 right-4"
                      strokeWidth={1.5}
                    />
                  ) : null}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-primary/80 text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold shadow-sm border border-accent">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.points.map((point, idx) => (
                      <div key={idx}>{point}</div>
                    ))}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-accent hover:text-primary font-medium underline decoration-accent hover:decoration-primary decoration-2 underline-offset-8 transition-colors duration-300"
          >
            Let's discuss your project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
