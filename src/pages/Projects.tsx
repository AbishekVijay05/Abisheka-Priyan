import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Code2, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants/portfolio";

export function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="project-card group"
    >
      <Link to={`/projects/${project.id}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-gray">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-8 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-[#1D1D1F] mb-2">{project.title}</h2>
        <p className="text-on-surface-variant line-clamp-2 mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.tags.map((tag: string) => (
            <span key={tag} className="bg-surface-gray text-[#1D1D1F] text-xs font-semibold px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-6 border-t border-outline-variant">
          <Link
            to={`/projects/${project.id}`}
            className="bg-accent-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            View Case Study
          </Link>
          <a
            href={project.github}
            className="text-accent-blue text-sm font-semibold flex items-center gap-1 hover:underline"
          >
            Live Demo <ArrowUpRight size={14} />
          </a>
          <button className="ml-auto w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-gray text-on-surface-variant hover:text-[#1D1D1F] transition-all">
            <Code2 size={20} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-20">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold tracking-tight text-[#1D1D1F] mb-4"
        >
          Selected Works
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-on-surface-variant max-w-2xl"
        >
          A collection of engineering projects focused on scalability, performance, and clean architecture.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
