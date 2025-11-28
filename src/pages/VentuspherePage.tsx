import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectNavigation from "@/components/ProjectNavigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectDiagram from "@/components/ProjectDiagram";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectFooter from "@/components/ProjectFooter";
import research from "@/assets/ventusphere/research/research.jpeg";

const VentuspherePage = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === "ventusphere");

  // Scroll spy logic
  const [activeSection, setActiveSection] = useState("concept");
  const sectionIds = [
    "concept",
    "research",
    "design",
    "materials",
    "renders",
    "end",
  ];

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
      console.log("Scroll Spy Found Section:", found);
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
            onClick={() => navigate("/")}
            className="text-accent inline-block"
          >
            <ArrowLeft />
          </button>
        </div>
        <ProjectHeader project={project} />
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
      <div className="container mx-auto px-6">
        <div
          id="concept"
          className="md:grid grid-cols-1 md:grid-cols-2 justify-items-end gap-8 pt-16"
        >
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4">
              Concept Explanation
            </h2>
            <p>
              Ventusphere is an apartment designed for two roommates. The design
              is based on the clients’ requests for natural ventilation and
              material honesty. Taking into consideration their lifestyle, the
              balance between personal and shared spaces, daily routines, and
              family gatherings. During planning, the main challenge was that
              one roommate smokes frequently while the other cannot tolerate the
              smell, yet both wanted the house to rely on natural ventilation.
            </p>
          </div>
          <div className="text-center">
            <ProjectDiagram concepts={project.concepts} />
          </div>
        </div>
        <div id="research" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Research</h2>
          <div className="lg:grid lg:grid-cols-2 justify-items-end gap-8 space-y-10 lg:space-y-0">
            <div>
              <p>
                Since airflow and its intensity can only be experienced, most of
                the research relied on building 3D models to test which
                configurations produced the strongest ventilation before and
                after interior divisions. This study guided us with every
                decision, from the ceiling design & wall placement to the
                arrangement and the design of the furniture, integrating their
                personal requests into each space. Due to the client's requests,
                we started by analyzing air movement around the site,
                identifying and focusing on the main façade. As part of our
                research, we created a series of models with identical sizes and
                openings, varying only the ceiling design to determine which one
                produced the optimal air flow intensity. Then we continued
                examining the interior walls, adjusting the spatial divisions
                each time until we achieved a layout that met both clients’
                requirements and ensured the best ventilation. All the design
                decisions for the apartment were made to enhance air
                circulation, from the ceiling, walls, windows, and doors to the
                furniture, handles, and even the choice of breathable fabrics.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <img
                src={research}
                className="object-contain h-full w-5/6"
                alt="research image"
              />
            </div>
          </div>
        </div>
        <div id="design" className="pt-10">
          <div className="md:grid md:grid-cols-2 gap-4 space-y-10 md:space-y-0">
            <div>
              <h2 className="text-2xl font-bold font-serif mb-4">Design</h2>
              <p>
                Based on the results of our research, we determined which façade
                to focus on, and we decided to make it diagonal to draw air into
                the apartment, directing airflow inside, where it then splits
                into two main paths. One goes through the living room, then into
                the “Bedroom N”, and the other through the kitchen, continuing
                into the “workspace Y”. For the round windows, we drew
                inspiration from musical instruments like the flute and
                saxophone, which, like the windows, function through the
                movement of air. Although all the windows are rounded, they vary
                in size: larger openings are used for shared spaces, while
                smaller ones suit more private areas. It's important to mention
                that the windows are Pivot windows, which means they rotate
                around a central axis, either horizontally or vertically. This
                design allows for flexible ventilation control & smooth airflow.
                Additionally, the placement of each window determines its
                orientation, whether horizontal or vertical. For the doors, we
                used pocket doors, so if the door closed or opened, it wouldn't
                affect the air path and still allow ventilation through the
                other spaces. We drew inspiration from ship doors and airplanes,
                continuing our design language, which is reflected in the
                kitchen cabinets and handles. Furniture also plays a role in
                supporting air circulation. For instance, the closets are
                aligned with the tilted walls to avoid obstructing airflow and
                instead help guide it. Similarly, just as the patio was shaped
                to split and channel the air, the living room sofas were
                arranged and designed to direct and distribute airflow toward
                areas with weaker ventilation. It was important to us to choose
                breathable fabrics and fabrics that don’t catch the smell of
                smoke. We tested a couple of fabrics with different thicknesses
                and textures, and sewing patterns. For the lighting, we drew
                inspiration from the continuous light strips found in airplanes
                and buses, adapting the idea to suit the apartment’s design, the
                custom ceiling geometry, and the primary airflow direction. The
                result is two linear light strips positioned along the main wind
                paths and aligned with the ceiling’s shifts. Zooming into the
                patio, it functions not only as a wind divider but also as a
                cozy, intimate space for one of the roommates who enjoys tending
                to plants, some of which he uses for cooking and drinks. Placing
                them here, near the kitchen, ensures convenient access. On the
                side facing the living room, we introduced a custom design
                element that allows occupants to both feel and visually perceive
                the airflow. This object, mounted on the wall, rotates 360
                degrees and is made from a thin aluminum sheet, lightweight,
                easy to fold, highly responsive to movement, and consistent with
                the project’s overall design language. The exterior walls are
                constructed from exposed concrete, reflecting the clients’
                preference for material honesty. To reinforce this approach
                within our design concept, we applied a textured finish that
                corresponds to the movement of the wind, resulting in a rougher,
                more tactile surface rather than a smooth, polished one.
              </p>
            </div>
          </div>
        </div>
        <div id="materials" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-10">Materials</h2>
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            {project.materials.map((material, idx) => (
              <img
                key={idx}
                src={material}
                alt={`${project.title} Material ${idx + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            ))}
          </div> */}
        </div>
        <div id="renders" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Renders</h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.renders.map((render, idx) => (
              <img
                key={idx}
                src={render}
                alt={`${project.title} Render ${idx + 1}`}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            ))}
          </div> */}
        </div>
        <div id="end">
          <ProjectFooter currentSlug={project.slug} />
        </div>
      </div>
    </div>
  );
};

export default VentuspherePage;
