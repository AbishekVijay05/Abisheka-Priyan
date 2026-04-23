import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Github, ExternalLink, Calendar, MapPin, User, ChevronRight } from "lucide-react";
import { PROJECTS } from "../constants/portfolio";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/projects" className="text-accent-blue hover:underline mt-4 block">
          Return to projects
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link to="/projects" className="flex items-center gap-2 text-on-surface-variant hover:text-[#1D1D1F] transition-colors font-medium">
          <ArrowLeft size={18} /> Projects
        </Link>
      </motion.div>

      {/* Hero */}
      <header className="mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-[#1D1D1F] mb-6 leading-tight"
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-on-surface-variant max-w-4xl font-normal leading-relaxed mb-12"
        >
          {project.fullDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-[21/9] rounded-3xl overflow-hidden bg-surface-gray shadow-xl"
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </motion.div>
      </header>

      {/* Meta Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-y border-outline-variant mb-20">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant flex items-center gap-2">
            <User size={12} /> Role
          </span>
          <p className="font-semibold text-lg">{project.role}</p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant flex items-center gap-2">
            <Calendar size={12} /> Timeline
          </span>
          <p className="font-semibold text-lg">{project.timeline}</p>
        </div>
        <div className="md:col-span-2 space-y-1">
          <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Technologies</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="bg-surface-gray px-4 py-1.5 rounded-full text-sm font-semibold border border-outline-variant">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold sticky top-32">Case Study</h2>
        </div>
        <div className="md:col-span-8 space-y-16">
          <section>
            <h3 className="text-xl font-bold mb-4">The Problem</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              {project.problem}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Approach</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              {project.approach}
            </p>
            {/* Bento Grid Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {project.metrics.map((m: any) => (
                <div key={m.label} className="bg-surface-gray p-8 rounded-2xl border border-outline-variant">
                  <span className="text-accent-blue font-bold text-3xl block mb-2">{m.value}</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">{m.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">Solution</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              {project.solution}
            </p>
            
            {/* Code Snippet */}
            <div className="bg-[#1D1D1F] rounded-2xl overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 p-4 bg-[#2D2D2F]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="text-xs text-on-surface-variant ml-2 font-mono">Source Implementation</span>
              </div>
              <pre className="p-8 overflow-x-auto">
                <code className="text-sm font-mono text-white/90 leading-relaxed">
                  {project.code}
                </code>
              </pre>
            </div>
          </section>
        </div>
      </div>

      {/* Bottom CTA */}
      <footer className="pt-20 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-semibold hover:text-accent-blue transition-colors">
            <Github size={20} /> View Source
          </a>
          <button className="flex items-center gap-2 font-semibold hover:text-accent-blue transition-colors">
            <ExternalLink size={20} /> Live Demo
          </button>
        </div>
        <Link to="/projects" className="btn-primary flex items-center gap-2">
          Next Project <ChevronRight size={18} />
        </Link>
      </footer>
    </main>
  );
}
