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
import { ZoomImage } from "@/components/ZoomImage";

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
    "model",
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
          className="md:grid grid-cols-1 md:grid-cols-2 gap-8 pt-16"
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
          <div className="text-center justify-self-center mt-10 md:mt-0">
            <ProjectDiagram concepts={project.concepts} />
          </div>
        </div>
        <div id="research" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Research</h2>
          <div className="lg:grid lg:grid-cols-2 justify-items-end gap-8 space-y-10 lg:space-y-0">
            <div>
              <p>
                Because airflow and its intensity can only be understood through
                physical experience, our research relied heavily on 3D models to
                test ventilation performance before and after introducing
                interior divisions. This process informed every design decision
                from ceiling geometry and wall placement to furniture
                configuration while integrating the clients’ specific requests.
                We began by analyzing wind patterns around the site, focusing on
                the main façade. From there, we tested a series of models with
                identical dimensions and openings, altering only the ceiling
                design to identify the configuration that delivered the
                strongest airflow. We then refined the interior partitions,
                iterating multiple layouts until we achieved both optimal
                ventilation and full alignment with the clients’ needs.
                Ultimately, every element of the apartment—from the ceiling,
                walls, and openings to the furniture details and choice of
                breathable materials—was designed to enhance air circulation.
              </p>
            </div>

            <div className="flex justify-center self-start">
              <img
                src={research}
                className="object-contain w-5/6"
                alt="research image"
              />
            </div>
          </div>
        </div>
        <div id="design" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Design</h2>
          <div className="grid grid-cols-12 mb-8 justify-items-end gap-8 space-y-10 lg:space-y-0">
            <div className="col-span-6">
              <p>
                After determining our main façade, we decided to make it
                diagonal to draw air into the apartment, directing airflow
                inside, where it then splits into two main paths. One goes
                through the living room, then into the “Bedroom N”, and the
                other through the kitchen, continuing into the “workspace Y”.
                <br />
                We designed the whole apartment according to these two main air
                paths, but it also depended on the client’s request and daily
                activities such as “bedroom N” designed for the roommate who
                spends most of his time in there working, sleeping or just
                enjoying his calm and private area, “workspace Y” is specially
                made for the other roommate who spends most of his day either
                there or working outside the apartment, we made the room and
                furniture to fit his work and tools, and also the fact that he
                smokes to help direct the smoke outside.
              </p>
            </div>
            <div className="col-span-6 row-span-2 w-5/6">
              {/* <img
                src={project.designs[2]}
                className="object-cover rounded-lg"
              /> */}
              <ZoomImage
                src={project.designs[2]}
                alt="Design image"
                containerClassName="w-5/6"
                className="object-cover rounded-lg"
                zoomLevel={4}
                magnifierSize={120}
              />
            </div>
            <div className="col-span-3">
              <img
                src={project.designs[1]}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="col-span-3">
              <img
                src={project.designs[0]}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="md:grid md:grid-cols-3 mt-10 space-y-10 md:space-y-0">
            <div className="col-span-2">
              <p>
                The design of the round windows was inspired by wind instruments
                such as the flute and saxophone, whose circular openings and
                reliance on airflow parallel the window's function in
                ventilation. Although all the windows are rounded, they vary in
                size. It's important to mention that the windows are Pivot
                windows, which means they rotate around a central axis, either
                horizontally or vertically. This design allows for flexible
                ventilation control & smooth airflow. Additionally, the
                placement of each window determines its orientation, whether
                horizontal or vertical.
                <br />
                <br />
                For the doors, we used pocket doors, so if the door closed or
                opened, it wouldn't affect the air path and still allow
                ventilation through the other spaces. We drew inspiration from
                ship doors and airplanes, continuing our design language, which
                is reflected in the kitchen cabinets and handles.
                <br />
                <br />
                Furniture also plays a role in supporting air circulation. For
                instance, the closets are aligned with the tilted walls to avoid
                obstructing airflow and instead help guide it. Similarly, just
                as the patio was shaped to split and channel the air, the living
                room sofas were arranged and designed to direct and distribute
                airflow toward areas with weaker ventilation. It was important
                to us to choose breathable fabrics and fabrics that don’t catch
                the smell of smoke. We tested a couple of fabrics with different
                thicknesses and textures, and sewing patterns. <br />
              </p>
            </div>
            <div className="flex flex-row justify-center px-10">
              <div className="flex flex-col text-center w-2/3">
                <img
                  src={project.designs[3]}
                  className="object-cover rounded-lg"
                />
                <p>Horizontal</p>
              </div>
              <div className="flex flex-col text-center w-2/3">
                <img src={project.designs[4]} className="object-contain" />
                <p>Vertical</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={project.designs[5]}
              className="object-cover rounded-lg mt-10 "
            />
            <img
              src={project.designs[6]}
              className="object-cover rounded-lg mt-10 "
            />
          </div>
          <div className="grid grid-rows-2 grid-cols-3 grid-flow-col justify-items-center mt-10 gap-2 items-center">
            <img
              src={project.designs[7]}
              className="object-contain w-[30rem] "
            />
            <img
              src={project.designs[8]}
              className="object-contain w-[30rem] "
            />
            <img
              src={project.designs[9]}
              className="object-contain w-[30rem] "
            />
            <div className="justify-self-center">
              <p className="">
                For the lighting, we drew inspiration from the continuous light
                strips found in airplanes and buses, adapting the idea to suit
                the apartment’s design, the custom ceiling geometry, and the
                primary airflow direction. The result is two linear light strips
                positioned along the main wind paths and aligned with the
                ceiling’s shifts.
              </p>
            </div>
            <img
              src={project.designs[17]}
              className="row-span-2 object-contain h-[50rem]"
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-10 items-center justify-items-center">
            <p>
              Zooming into the patio, it functions not only as a wind divider
              but also as a cozy, intimate space for one of the roommates who
              enjoys tending to plants, some of which he uses for cooking and
              drinks. Placing them here, near the kitchen, ensures convenient
              access. On the side facing the living room, we introduced a custom
              design element that allows occupants to both feel and visually
              perceive the airflow. This object, mounted on the wall, rotates
              360 degrees and is made from a thin aluminum sheet, lightweight,
              easy to fold, highly responsive to movement, and consistent with
              the project’s overall design language.
            </p>

            <div className="row-span-2">
              <img
                src={project.designs[10]}
                alt="Featured design"
                className="w-full h-3/4 object-contain rounded-lg"
              />
            </div>
            <div className="flex gap-4 w-full justify-evenly">
              <img
                src={project.designs[14]}
                alt="Design detail 1"
                className="w-1/4 object-contain"
              />
              <img
                src={project.designs[15]}
                alt="Design detail 2"
                className="w-1/4 object-contain"
              />
              <img
                src={project.designs[16]}
                alt="Design detail 3"
                className="w-1/4 object-contain"
              />
            </div>
          </div>
          <div>
            <img
              src={project.designs[18]}
              alt="Design detail 3"
              className="object-contain mt-10"
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-10 items-center justify-items-center">
            <p className="max-w-lg ">
              The exterior walls are constructed from exposed concrete,
              reflecting the clients’ preference for material honesty. To
              reinforce this approach within our design concept, we applied a
              textured finish that corresponds to the movement of the wind,
              resulting in a rougher, more tactile surface rather than a smooth,
              polished one.
            </p>
            <img src={project.designs[13]} className="object-contain" />
            <img src={project.designs[11]} className="object-contain" />
            <img src={project.designs[12]} className="object-contain" />
          </div>
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

          <div className="grid grid-cols-2 grid-flow-row md:grid-cols-2 gap-4 mt-5">
            <img
              src={project.renders[0]}
              alt={`${project.title} Render 1`}
              className="object-cover rounded-lg"
            />
            <img
              src={project.renders[1]}
              alt={`${project.title} Render 2`}
              className="object-cover rounded-lg row-span-2"
            />
            <div className="flex flex-col gap-4">
              <img
                src={project.renders[2]}
                alt={`${project.title} Render 3`}
                className="object-cover rounded-lg row-span-2"
              />
              <img
                src={project.renders[3]}
                alt={`${project.title} Render 4`}
                className="object-cover rounded-lg row-span-2"
              />
            </div>
          </div>
        </div>
        <div id="model" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Physical Model</h2>
          <img
            src={project.physicalModels[0]}
            alt={`${project.title} Physical Model 1`}
            className="w-full object-cover rounded-lg"
          />
        </div>
        <div id="end">
          <ProjectFooter currentSlug={project.slug} />
        </div>
      </div>
    </div>
  );
};

export default VentuspherePage;
