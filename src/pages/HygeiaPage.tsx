import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectNavigation from "@/components/ProjectNavigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectDiagram from "@/components/ProjectDiagram";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectFooter from "@/components/ProjectFooter";

const HygeiaPage = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === "hygeia");

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
          className="md:grid grid-cols-1 md:grid-cols-3 gap-8 pt-16"
        >
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4">
              Concept Explanation
            </h2>
            <p>
              A highly adaptable and hygienic cooking environment that supports
              a range of lifestyles while promoting both physical and emotional
              well-being. Its modular system allows users to customize the
              layout and components based on household size, offering tailored
              options for smaller and larger groups. Cylindrical, stainless
              steel portable stations ensure easy cleaning, ensuring optimal
              hygiene.
            </p>
          </div>
          <div className="text-center justify-self-center mt-10 md:mt-0 col-span-2">
            <ProjectDiagram concepts={project.concepts} />
          </div>
        </div>
        <div id="research" className="pt-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold font-serif mb-4">Research</h2>
              <p>
                This project emerged from a growing awareness of how living
                environments influence both physical and emotional well-being.
                We were inspired by the belief that the kitchen, as the heart of
                the home, should actively support healthier and more balanced
                lifestyles. This led us to explore the concept in depth,
                focusing on the multiple dimensions of hygiene and well-being.
                Alongside this, we examined the historical evolution of the
                kitchen, including early 20th-century visions of the ‘future
                kitchen’ and the development of kitchen design over time. This
                research highlighted the importance of efficiency and
                adaptability, which ultimately formed the foundation of the
                project.
              </p>
            </div>
            <div>
              <img
                src={project.researchImages[0]}
                alt="research image"
                className="object-contain w-full lg:w-3/4 mx-auto"
              />
            </div>
          </div>
        </div>
        <div id="design" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Design</h2>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
            <p>
              Our kitchen project is centered around a highly modular and
              adaptable design, offering users the flexibility to personalize
              their space according to their lifestyle and household size. The
              system is thoughtfully structured to suit a wide range of living
              situations, with two main product ranges tailored for 1–3 users or
              4–6 users. Each component is available in multiple sizes, allowing
              users to select and combine modules that best meet their
              functional and spatial needs. This adaptability not only enhances
              practicality but also supports a more personal connection to the
              space.
              <br />
              <br />A core principle of the design is its strong commitment to
              hygiene. The kitchen features portable, cylindrical stations
              designed with smooth, corner-free surfaces that are easy to clean
              and maintain. The materials were carefully selected to support
              this goal; stainless steel is used for its durability and
              low-maintenance qualities and Corian, that forms the base
              structure, chosen for its strength and lightweight nature. These
              materials ensure that the units are both robust and easy to move,
              making the kitchen highly functional and efficient in everyday
              use.
              <br />
            </p>
            <div className="grid grid-cols">
              <img
                src={project.designs[0]}
                alt="design image"
                className="object-cover w-2/3 mx-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-0">
            <img
              src={project.designs[2]}
              alt="design image"
              className="object-contain h-full w-full"
            />
            <img
              src={project.designs[3]}
              alt="design image"
              className="object-contain h-full w-full"
            />
            <img
              src={project.designs[4]}
              alt="design image"
              className="object-contain h-full w-full"
            />
            <img
              src={project.designs[5]}
              alt="design image"
              className="object-contain h-full w-full"
            />
            <img
              src={project.designs[6]}
              alt="design image"
              className="object-contain h-full w-full"
            />
            <img
              src={project.designs[7]}
              alt="design image"
              className="object-contain h-full w-full"
            />
            <img
              src={project.designs[8]}
              alt="design image"
              className="object-contain h-full w-full"
            />
            <img
              src={project.designs[9]}
              alt="design image"
              className="object-contain h-full w-full"
            />
            <img
              src={project.designs[10]}
              alt="design image"
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 mt-10">
            <p>
              <br /> The layout goes beyond physical function by also addressing
              mental and social wellbeing. Each station is intuitively designed
              to encourage organization and reduce clutter, which helps create a
              calm, orderly environment. This contributes to a sense of mental
              clarity and lowers the stress often associated with household
              tasks. Socially, the kitchen is envisioned as a collaborative and
              dynamic space. Its flexible layout makes it ideal for interaction,
              allowing users to create an open, inviting atmosphere where
              cooking becomes a shared experience rather than an isolated task.
              Whether it’s for everyday family use or for hosting gatherings,
              the space encourages connection and participation, reflecting the
              idea of the kitchen as a true heart of the home.
              <br />
              <br /> To support even greater independence and functionality,
              future plans for the project include the integration of power
              solutions such as built-in charging stations or portable energy
              sources. This would allow each station to operate independently,
              free from fixed utilities, and further enhance the kitchen’s
              adaptability to various uses and settings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <img
                  src={project.designs[11]}
                  alt="design image"
                  className="object-contain"
                />
                <p className="text-center mt-4 text-xl font-bold">
                  Expanded Mode
                </p>
              </div>
              <div>
                <img
                  src={project.designs[12]}
                  alt="design image"
                  className="object-contain"
                />
                <p className="text-center mt-4 text-xl font-bold">
                  Compact Mode
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="renders" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Renders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src={project.renders[0]}
              alt="design image"
              className="object-contain"
            />
            <img
              src={project.renders[1]}
              alt="design image"
              className="object-contain"
            />
            <img
              src={project.renders[2]}
              alt="design image"
              className="object-contain"
            />
          </div>
        </div>
        <div id="materials"></div>
        <div id="model" className="pt-10">
          <h2 className="text-2xl font-bold font-serif mb-4">Physical Model</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <img
              src={project.physicalModels[0]}
              alt="design image"
              className="object-contain w-full"
            />
            <img
              src={project.physicalModels[1]}
              alt="design image"
              className="object-contain w-full"
            />
            <img
              src={project.physicalModels[2]}
              alt="design image"
              className="object-contain w-full"
            />
            <img
              src={project.physicalModels[3]}
              alt="design image"
              className="object-contain w-full"
            />
            <img
              src={project.physicalModels[4]}
              alt="design image"
              className="object-contain w-full"
            />
            <img
              src={project.physicalModels[5]}
              alt="design image"
              className="object-contain w-full"
            />
            <img
              src={project.physicalModels[6]}
              alt="design image"
              className="object-contain w-full"
            />
            <img
              src={project.physicalModels[7]}
              alt="design image"
              className="object-contain w-full"
            />
            <img
              src={project.physicalModels[10]}
              alt="design image"
              className="object-contain w-full md:col-span-1 lg:col-span-2"
            />
            <img
              src={project.physicalModels[11]}
              alt="design image"
              className="object-contain w-full md:col-span-1 lg:col-span-2"
            />
          </div>
        </div>
        <div id="end">
          <ProjectFooter currentSlug={project.slug} />
        </div>
      </div>
    </div>
  );
};

export default HygeiaPage;
