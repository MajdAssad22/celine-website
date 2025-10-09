import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectNavigation from "@/components/ProjectNavigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectDiagram from "@/components/ProjectDiagram";

const ProjectPage = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="text-accent underline">
          Back to Home
        </Link>
      </div>
    );
  }

  // Scroll spy logic
  const [activeSection, setActiveSection] = useState("concept");
  const sectionIds = ["concept", "research", "design", "materials", "renders"];

  useEffect(() => {
    const handleScroll = () => {
      let found = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col bg-background">
      <section>
        <div className="fixed top-3 left-3 z-50 flex justify-center p-2 rounded-full bg-background/95 backdrop-blur-sm shadow-md border border-border/50">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-accent inline-block"
          >
            <ArrowLeft />
          </button>
        </div>
        <div className="relative w-full h-[200px] overflow-hidden flex items-center justify-center">
          <img
            src={project.banner}
            alt={project.title}
            className="w-full h-full object-cover object-center pointer-events-none"
            style={{ display: "block" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <h1 className="absolute inset-0 flex items-center justify-center pb-10 text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold drop-shadow-xl text-center px-4">
            {project.title}
          </h1>
        </div>
      </section>

      <ProjectNavigation
        activeSection={activeSection}
        onSectionClick={(id) => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      />
      <div className="container mx-auto px-6 space-y-20">
        <div
          id="concept"
          className="md:grid grid-cols-1 md:grid-cols-2 gap-8 pt-16"
        >
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4">
              Concept Explanation
            </h2>
            <p>{project.conceptExplanation}</p>
          </div>
          <div className="text-center">
            <ProjectDiagram concepts={project.concepts} />
          </div>
        </div>
        <div id="research" className="pt-10 max-w-2xl">
          <h2 className="text-2xl font-bold font-serif mb-4">Research</h2>
          <p>{project.research}</p>
        </div>
        <div id="design" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Design</h2>
          <p>{project.design}</p>
        </div>
        <div id="materials" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Materials</h2>
        </div>
        <div id="renders" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Renders</h2>
        </div>
      </div>
    </div>
    // <section className="py-20 bg-card min-h-screen">
    //   <div className="container mx-auto px-6 max-w-2xl">
    //     <button
    //       type="button"
    //       onClick={() => navigate(-1)}
    //       className="text-accent underline mb-8 inline-block"
    //     >
    //       ← Back
    //     </button>
    //     <div className="bg-background rounded-2xl overflow-hidden shadow-lg">
    //       <img
    //         src={project.image}
    //         alt={project.title}
    //         className="w-full object-cover aspect-[5/4]"
    //       />
    //       <div className="p-8">
    //         <span className="inline-block bg-primary/80 text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold mb-4">
    //           {project.category}
    //         </span>
    //         <h1 className="font-serif text-4xl font-bold text-primary mb-4">
    //           {project.title}
    //         </h1>
    //         <ul className="list-disc list-inside text-muted-foreground space-y-2">
    //           {project.points.map((point, idx) => (
    //             <li key={idx}>{point}</li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ProjectPage;
