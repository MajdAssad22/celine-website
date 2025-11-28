import React from "react";

interface ProjectDiagramProps {
  concepts: string[];
}

const ProjectDiagram: React.FC<ProjectDiagramProps> = ({ concepts }) => {
  return (
    <>
      <h3 className="w-full text-center text-xl font-bold mb-6">Key Points</h3>
      <div className="flex items-center justify-center gap-8 flex-wrap max-w-lg">
        {concepts.map((concept, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center rounded-full shadow-lg w-24 h-24 md:w-32 md:h-32 bg-primary"
          >
            <span className="text-center text-sm md:text-md font-semibold text-white px-2 break-words">
              {concept}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectDiagram;
