import React from "react";

interface ProjectNavMenuProps {
  onSectionClick?: (section: string) => void;
  activeSection?: string;
}

const sections = [
  { label: "Concept Explanation", id: "concept" },
  { label: "Research", id: "research" },
  { label: "The Design", id: "design" },
  { label: "Materials", id: "materials" },
  { label: "Renders", id: "renders" },
];

const ProjectNavigation: React.FC<ProjectNavMenuProps> = ({
  onSectionClick,
  activeSection,
}) => {
  return (
    <nav className="flex justify-right">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionClick?.(section.id)}
          className={`px-5 py-5 font-medium transition-colors duration-200
            ${
              activeSection === section.id
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-primary/10"
            }`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default ProjectNavigation;
