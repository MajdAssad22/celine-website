import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectNavigation from "@/components/ProjectNavigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectDiagram from "@/components/ProjectDiagram";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectFooter from "@/components/ProjectFooter";

const StoneAndStoryPage = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === "stone-and-story");

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
              Stone & Story explores how heritage and history can be integrated
              into everyday life. As designers from Nazareth, we observed a gap
              in local awareness of our Arab culture and heritage, as most
              historical sites prioritize tourists over residents. We selected
              an Ancient Roman Bathhouse as the site for our intervention. Our
              proposal reimagines it as a public library, preserving the
              bathhouse’s original stone structure while introducing new
              elements. This approach balances respect for historical
              authenticity with the practical needs of the present. The result
              is more than a library; it is a living cultural hub. The design
              transforms the bathhouse into a space where locals encounter their
              history in daily life, blending memory and community. Emphasizing
              accessibility, interaction, and continuity, the project ensures
              that history is not just observed but actively experienced,
              fostering a dialogue between past and future generations.
            </p>
          </div>
          <div className="text-center md:justify-self-end justify-self-center mt-10 md:mt-0">
            <ProjectDiagram concepts={project.concepts} />
          </div>
        </div>
        <div id="research" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Research</h2>
          <div className="md:grid md:grid-cols-2 justify-items-end gap-8 space-y-10 md:space-y-0">
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
              src={project.researchImages[0]}
              className="h-auto object-contain w-full"
              alt="research image"
            />
          </div>
        </div>
        <div id="design" className="pt-10">
          <div className="md:grid md:grid-cols-2 gap-4 space-y-10 md:space-y-0">
            <div>
              <h2 className="text-2xl font-bold font-serif mb-4">Design</h2>
              <p>
                We studied the Roman bathhouse’s original function, layout, and
                sequence of spaces from the changing room through cold,
                lukewarm, and hot rooms supported by hypocaust, an underfloor
                heating system. Today, the bathhouse is divided into separate
                spaces (restaurant, shop, and unused space) with individual
                entrances, and the original connections between the spaces are
                closed. To understand the building's history, we collected
                visual records from 1890 to the present and analyzed original
                versus added stones, aiming to preserve the authentic structure
                while removing later interventions.
              </p>
              <p className="mt-4">
                In our proposal, we sought to preserve the bathhouse’s original
                spatial logic, the sequence of hot, lukewarm, and cold rooms,
                and re-imagined it as a narrative structure within the new
                program.
              </p>
            </div>
            <img
              src={project.designs[0]}
              className="object-contains rounded-lg mx-auto w-full"
            />
          </div>
          <div className="grid lg:grid-cols-9  mx-auto md:grid-cols-4 grid-cols-2 mt-10 gap-4">
            <div className="mx-auto">
              <img
                src={project.designs[1]}
                className="w-48 h-48 object-cover"
              />
              <p className="text-center">1890</p>
            </div>
            <div className="mx-auto">
              <img
                src={project.designs[2]}
                className="w-48 h-48 object-cover"
              />
              <p className="text-center">1900</p>
            </div>
            <div className="mx-auto">
              <img
                src={project.designs[3]}
                className="w-48 h-48 object-cover"
              />
              <p className="text-center">1900</p>
            </div>
            <div className="mx-auto">
              <img
                src={project.designs[4]}
                className="w-48 h-48 object-cover"
              />
              <p className="text-center">1910</p>
            </div>
            <div className="mx-auto">
              <img
                src={project.designs[5]}
                className="w-48 h-48 object-cover"
              />
              <p className="text-center">1910</p>
            </div>
            <div className="mx-auto">
              <img
                src={project.designs[6]}
                className="w-48 h-48 object-cover"
              />
              <p className="text-center">1929</p>
            </div>
            <div className="mx-auto">
              <img
                src={project.designs[7]}
                className="w-48 h-48 object-cover"
              />
              <p className="text-center">1940</p>
            </div>

            <div className="mx-auto col-span-2">
              <img src={project.designs[18]} className="h-48 object-cover" />
              <p className="text-center">2025</p>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 gap-4 space-y-10 mt-10 md:space-y-0">
            <div>
              <p>
                The design starts with a coffee shop, preserved as part of
                locals’ daily routine, and transitions through a mini museum
                into the library. The library moves from open communal areas to
                intimate underground zones, culminating in the hypocaust
                chamber, which houses historical artifacts and rare books,
                merging personal memory with collective history. Functions are
                arranged to follow the bathhouse’s original spatial sequence
                from the cold (public coffee shop), through lukewarm (the
                museum), to the hot (library), enhancing circulation and
                experience.
                <br />
                The main entrance is reused, other entries closed, and original
                internal connections between rooms restored. In addition, there
                is also a venue space with its own entrance designated for
                events, it is separated from the rest of the spaces, since it is
                not considered one of the main rooms in the bathhouse, so we
                gave it an occasional function.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="mx-auto">
                <img
                  src={project.designs[9]}
                  className="object-cover rounded-lg"
                />
                <p className="text-sm">Circulation & functions</p>
              </div>
              <div>
                <img
                  src={project.designs[8]}
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src={project.designs[10]}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 mx-auto mt-10 items-center">
            <div className="flex flex-col gap-2 items-end">
              <img
                src={project.designs[12]}
                className="w-11/12 aspect-[2/1] object-cover"
              />
              <img
                src={project.designs[11]}
                className="w-11/12 aspect-[2/1] object-cover"
              />
            </div>
            <img
              src={project.designs[13]}
              className="w-11/12 object-cover rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <p>
              There are two ways to approach the underground space: the first
              using a spiral staircase and the second using the back vault and
              into the old oven space. It was important for us to give the
              people a chance to get direct contact / friction with underground
              archaeology and get the full experience. The underground path
              functions both as an experiential route and an archive, with
              shelves integrated between the hypocaust columns to display and
              store special books and maps within reach. <br />
              Furniture was designed to fit seamlessly within curved stone
              walls, columns, and niches, centered to maintain circulation,
              while contrasting the stone with modern, lightweight pieces
              featuring curved edges and thin black metal. Black metal is also
              used in staircases and the building’s support system.
            </p>
            <p>
              Floor levels were adjusted to create the path, and a steel beam
              and column grid was carefully aligned with the hypocaust to avoid
              disturbing the archaeology or circulation. In the hot room, we
              created a unique experience by adding a central opening to reveal
              the underground path and hypocaust system. The floating floor
              includes a gap to preserve the stone walls and emphasize the
              connection between upper and lower levels, enhanced by a light
              fixture radiating in both directions. Light plays a key role in
              the spatial experience: bright lighting in the coffee shop conveys
              openness, gradually dimming into softer, intimate lighting deeper
              inside. The intervention respects the exterior, keeping facade
              openings’ dimensions and grid ratios consistent with the upper
              floors.
            </p>
          </div>
          <div className="mt-10 flex flex-col justify-center max-w-8xl mx-auto">
            <img src={project.designs[14]} className="rounded-lg" />
            <img src={project.designs[15]} className="rounded-lg" />
            <div className="grid grid-cols-2">
              <img src={project.designs[16]} className="rounded-lg" />
              <img src={project.designs[17]} className="rounded-lg" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <img
                src={project.designs[19]}
                className="object-contain rounded-lg"
              />
              <img
                src={project.designs[20]}
                className="object-contain rounded-lg"
              />
            </div>
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
          <div className="space-y-4 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <img
                    src={project.renders[1]}
                    alt={`${project.title} Render 1`}
                    className="w-full h-[500px] sm:h-48 md:h-[500px] object-cover rounded-lg"
                  />
                  <img
                    src={project.renders[0]}
                    alt={`${project.title} Render 2`}
                    className="w-full h-[500px] sm:h-48 md:h-[500px] object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-center">
                  Ground Floor
                </h3>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <img
                    src={project.renders[2]}
                    alt={`${project.title} Render 3`}
                    className="w-full h-[500px] sm:h-48 md:h-[500px] object-cover rounded-lg"
                  />
                  <img
                    src={project.renders[3]}
                    alt={`${project.title} Render 4`}
                    className="w-full h-[500px] sm:h-48 md:h-[500px] object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-center">
                  Underground Floor
                </h3>
              </div>
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
        <div className="pt-16" id="end">
          <ProjectFooter currentSlug={project.slug} />
        </div>
      </div>
    </div>
  );
};

export default StoneAndStoryPage;
