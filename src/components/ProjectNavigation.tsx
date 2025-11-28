import { CheckIcon } from "lucide-react";
import React from "react";

interface ProjectNavMenuProps {
  onSectionClick?: (section: string) => void;
  activeSection?: string;
}

const sections = [
  { label: "Concept", id: "concept" },
  { label: "Research", id: "research" },
  { label: "Design", id: "design" },
  { label: "Materials", id: "materials" },
  { label: "Renders", id: "renders" },
];

const ProjectNavigation: React.FC<ProjectNavMenuProps> = ({
  onSectionClick,
  activeSection,
}) => {
  let activeIdx = sections.findIndex((s) => s.id === activeSection);
  if (activeSection === "end") {
    activeIdx = sections.length + 1;
  }
  console.log("Active Section:", activeSection, "Active Index:", activeIdx);
  return (
    <nav className="sticky z-50 min-h-14 mt-5 md:min-h-16 px-10 md:px-16 rounded-full mx-auto me-0 sm:mx-auto right-0 top-2 bg-background/95 backdrop-blur-sm shadow-md border border-border/50">
      <div className="flex items-center justify-center">
        {sections.map((section, idx) => {
          const isActive = activeSection === section.id;
          const isCompleted = activeIdx > idx;
          return (
            <React.Fragment key={section.id}>
              <div className="flex items-center">
                <button
                  onClick={() => onSectionClick?.(section.id)}
                  className="relative py-3"
                >
                  <div
                    className={`rounded-full border-2 transition-colors duration-200 flex items-center justify-center
                    ${
                      isActive || isCompleted
                        ? "border-accent bg-accent text-white"
                        : "border-border bg-background text-foreground"
                    }
                    h-5 w-5 md:h-5 md:w-5 text-xl font-bold shadow-sm relative z-10`}
                    aria-label={section.label}
                    style={{ position: "relative" }}
                  >
                    {isCompleted ? (
                      <span className="m-2">
                        <CheckIcon size={16} />
                      </span>
                    ) : null}
                  </div>
                  <span
                    className={`absolute left-1/2 transform -translate-x-1/2 mt-1 text-xs md:text-sm text-center text-muted-foreground font-medium *: ${
                      isActive ? "block" : "invisible md:visible"
                    }`}
                  >
                    {section.label}
                  </span>
                </button>
                {idx < sections.length - 1 && (
                  <div
                    className={`h-0.5 w-4 sm:w-10 md:w-24 transition-colors duration-200 " ${
                      activeIdx > idx ? "bg-accent" : "bg-border"
                    }`}
                  ></div>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default ProjectNavigation;
