import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectNavigation from "@/components/ProjectNavigation";
import { ArrowLeft } from "lucide-react";

const ProjectPage = () => {
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

  return (
    <section className="bg-card min-h-screen">
      <div className="mx-auto fixed left-0 xl:left-1/4 w-full xl:w-1/2 top-0 z-50 bg-card flex justify-center px-5 gap-5 rounded-full">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-accent inline-block"
        >
          <ArrowLeft />
        </button>
        <ProjectNavigation />
      </div>
      <div className="relative w-full h-[40vh] min-h-[300px] max-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src={project.banner}
          alt={project.title}
          className="w-full h-full object-cover object-center pointer-events-none"
          style={{ display: "block" }}
        />
        {/* Stronger overlay for better contrast */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Title centered on top of the image */}
        <h1 className="absolute inset-0 flex items-end justify-center pb-10 text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold drop-shadow-xl text-center px-4">
          {project.title}
        </h1>
      </div>
      {/* <div className="h-screen py-5">
        <h1 className="text-5xl text-center">{project.title}</h1>
      </div> */}
    </section>
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
