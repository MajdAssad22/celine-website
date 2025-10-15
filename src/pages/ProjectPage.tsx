import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectNavigation from "@/components/ProjectNavigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectDiagram from "@/components/ProjectDiagram";
import research from "@/assets/story-and-stone/research/research.jpeg";
import timeline from "@/assets/story-and-stone/research/timeline.jpeg";

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
    <div className="flex flex-col bg-white">
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
          className="md:grid grid-cols-1 md:grid-cols-2 justify-items-end gap-8 pt-16"
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
        <div id="research" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Research</h2>
          {/* <p>{project.research}</p> */}

          <div className="md:grid md:grid-cols-2 justify-items-end gap-4 space-y-10 md:space-y-0">
            <div>
              <p>
                We chose Nazareth for our project due to our personal
                connection, its 2,000-year history, cultural diversity, and
                significance as the childhood home of Jesus. To understand the
                city, we studied its layout, surrounding towns, roads, and
                cultural landscape. Focusing on what the word culture contains,
                we categorized it into{" "}
                <b>
                  heritage & traditions, social & family structure, language &
                  literature, music & dance, and handcrafts & visual arts.
                </b>{" "}
                Mapping key cultural sites revealed they are scattered with no
                unifying element, and the city has only one library, located far
                from the center. We also observed that most cultural centers
                emphasized artistry while overlooking historical depth.
              </p>
              <p className="mt-4">
                This encouraged us to examine Nazareth’s timeline from the
                Ancient Roman period to the present, highlighting architectural
                features from each era. Field research revealed surviving
                elements in the city center, particularly underground
                archaeological sites such as the Basilica of the Annunciation,
                holy caves, and the ancient bathhouse. Exploring these sites
                showed us that many were unfamiliar to locals and primarily
                oriented toward tourists. We chose the Ancient Roman Bathhouse
                to avoid religious sites and establish a space that reconnects
                locals with the city’s rich historical layers.
              </p>
            </div>
            <img
              src={research}
              className="md:w-3/5 h-auto object-contain aspect-square w-full"
              alt=""
            />
          </div>

          <img src={timeline} className="w-full h-auto object-contain mt-10" />
        </div>
        <div id="design" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Design</h2>
          {/* <p>{project.design}</p> */}
          <div className="md:grid md:grid-cols-2 gap-4 space-y-10 md:space-y-0">
            <div>
              <p>
                We studied the Roman bathhouse’s original function, layout, and
                sequence of spaces from the changing room through cold,
                lukewarm, and hot rooms supported by an underfloor heating
                system. Today, the bathhouse is divided into separate spaces
                with individual entrances, and the original connections are
                closed. To understand the history of the building, we collected
                visual documents from 1890 to the present and analyzed original
                versus added stones, aiming to preserve the authentic structure
                while removing later interventions.
              </p>
              <p className="mt-4">
                Our proposal envisions a public library that reconnects the
                people of Nazareth with their cultural and historical heritage.
                We sought to preserve the bathhouse’s original spatial logic,
                the sequence of hot, lukewarm, and cold rooms, and reimagined it
                as a narrative structure within the new program.
              </p>
            </div>
            <img
              src={project.designs[0]}
              className="oject-cover rounded-lg mx-auto"
            />
          </div>
          <div className="grid grid-cols-7 mt-10 gap-4">
            <div>
              <img
                src={project.designs[1]}
                className="w-48 h-48 object-cover mx-auto"
              />
              <p className="text-center">1890</p>
            </div>
            <div>
              <img
                src={project.designs[2]}
                className="w-48 h-48 object-cover mx-auto"
              />
              <p className="text-center">1900</p>
            </div>
            <div>
              <img
                src={project.designs[3]}
                className="w-48 h-48 object-cover mx-auto"
              />
              <p className="text-center">1900</p>
            </div>
            <div>
              <img
                src={project.designs[4]}
                className="w-48 h-48 object-cover"
              />
              <p className="text-center">1910</p>
            </div>
            <div>
              <img
                src={project.designs[5]}
                className="w-48 h-48 object-cover"
              />
              <p className="text-center">1910</p>
            </div>
            <div>
              <img
                src={project.designs[6]}
                className="w-48 h-48 object-cover"
              />
              <p className="text-center">1929</p>
            </div>
            <div>
              <img
                src={project.designs[7]}
                className="w-48 h-48 object-cover"
              />
              <p className="text-center">1940</p>
            </div>
          </div>
          <p>
            <br /> <br />
            The design starts with a coffee shop, preserved as part of locals’
            daily routine, and transitions through a mini museum into the
            library. The library moves from open communal areas to intimate
            underground zones, culminating in the hypocaust chamber, which
            houses historical artifacts and rare books, merging personal memory
            with collective history. Functions are arranged to follow the
            bathhouse’s original spatial sequence from the cold (public coffee
            shop), through the museum, to the hot (library), enhancing
            circulation and experience. The main entrance is reused, other
            entries closed, and original internal connections between rooms
            restored. In addition, there is also a venue space with its own
            entrance designated for events, it is separated from the rest of the
            spaces, since it is not considered one of the main rooms in the
            bathhouse, so we gave it an occasional function. There are two ways
            to approach the underground space: the first using a spiral
            staircase and the second using the back vault and into the old oven
            space. It was important for us to give the people a chance to get
            direct contact/ friction with underground archaeology and get the
            full experience. The underground path functions both as an
            experiential route and an archive, with shelves integrated between
            the hypocaust columns to display and store special books and maps
            within reach. Furniture was designed to fit seamlessly within curved
            stone walls, columns, and niches, centered to maintain circulation,
            while contrasting the stone with modern, lightweight pieces
            featuring curved edges and thin black metal. Black metal is also
            used in staircases and the building’s support system. Floor levels
            were adjusted to create the path, and a steel beam and column grid
            was carefully aligned with the hypocaust to avoid disturbing the
            archaeology or circulation. In the hot room, we created a unique
            experience by adding a central opening to reveal the underground
            path and hypocaust system. The floating floor includes a gap to
            preserve the stone walls and emphasize the connection between upper
            and lower levels, enhanced by a light fixture radiating in both
            directions. Light plays a key role in the spatial experience: bright
            lighting in the coffee shop conveys openness, gradually dimming into
            softer, intimate lighting deeper inside. The intervention respects
            the exterior, keeping facade openings’ dimensions and grid ratios
            consistent with the upper floors.
          </p>
        </div>
        <div id="materials" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-10">Materials</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            {project.materials.map((material, idx) => (
              <img
                key={idx}
                src={material}
                alt={`${project.title} Material ${idx + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
        <div id="renders" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Renders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.renders.map((render, idx) => (
              <img
                key={idx}
                src={render}
                alt={`${project.title} Render ${idx + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            ))}
          </div>
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
