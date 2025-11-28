const ProjectHeader = ({ project }) => {
  return (
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
  );
};

export default ProjectHeader;
