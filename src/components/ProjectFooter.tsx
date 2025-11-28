import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "@/data/projects";

interface ProjectFooterProps {
  currentSlug?: string;
  limit?: number; // how many suggestions to show
}

const ProjectFooter: React.FC<ProjectFooterProps> = ({
  currentSlug,
  limit = 2,
}) => {
  // allow caller to provide currentSlug; otherwise fallback to params
  const params = useParams();
  const activeSlug = currentSlug ?? params.slug;

  // Filter out the current project
  const suggestions = projects.filter((p) => p.slug !== activeSlug);

  // Creative picking strategy:
  // 1) Prefer one project from the same category (if current project exists and there are matches)
  // 2) Pick one random project from the remaining items
  const currentProject = projects.find((p) => p.slug === activeSlug);

  const sameCategoryCandidates = currentProject
    ? suggestions.filter((p) => p.category === currentProject.category)
    : [];

  const pickFromCategory =
    sameCategoryCandidates.length > 0 ? sameCategoryCandidates[0] : undefined;

  const remainingPool = suggestions.filter(
    (p) => p.slug !== pickFromCategory?.slug
  );
  const randomPick =
    remainingPool.length > 0
      ? remainingPool[Math.floor(Math.random() * remainingPool.length)]
      : undefined;

  const picks = [pickFromCategory, randomPick]
    .filter(Boolean)
    .slice(0, limit) as any[];

  if (picks.length === 0) return null;

  return (
    <footer className="pt-16 border-t py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-lg font-semibold mb-4">You may also like</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {picks.map((p) => (
            <Link
              to={`/project/${p.slug}`}
              key={p.id}
              className="relative overflow-hidden rounded-lg hover:scale-[1.02] transform transition-all duration-200"
            >
              <div className="relative ratio-16/9 bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 right-3 inline-flex items-center px-2 py-1 text-xs font-semibold bg-accent text-white rounded-full shadow-md">
                  Suggested
                </span>
              </div>
              <div className="mt-3 px-2 pb-3 text-center">
                <div className="text-xs text-muted-foreground">
                  {p.category}
                </div>
                <div className="mt-1 text-xl font-semibold">{p.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default ProjectFooter;
