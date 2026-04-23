import { motion } from "motion/react";
import { Code2, Layers, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PERSONAL_INFO, SKILLS } from "../constants/portfolio";

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-surface-gray border border-outline-variant"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold tracking-tight text-[#1D1D1F] mb-12 leading-tight"
            >
              Engineering<br />Clarity.
            </motion.h1>
            
            <div className="space-y-6 text-xl text-on-surface-variant max-w-2xl font-normal leading-relaxed">
              <p>
                I am a {PERSONAL_INFO.role} focused on building robust, scalable systems and interfaces that prioritize user experience without compromising on technical rigor.
              </p>
              <p>
                My approach is rooted in architectural minimalism—solving complex problems with the simplest, most maintainable solutions. I believe that good code, like good design, should be invisible to the end user.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <Link to="/projects" className="inline-flex items-center gap-2 text-accent-blue font-semibold hover:opacity-80 transition-opacity">
                View Full Journey <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills / Palette */}
      <section>
        <h2 className="text-4xl font-bold text-[#1D1D1F] mb-12">Technical Palette</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="bg-surface-gray rounded-3xl p-8 border border-outline-variant hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="text-accent-blue" />
              <h3 className="text-xs uppercase font-bold tracking-widest text-on-surface-variant">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.languages.map(lang => (
                <span key={lang} className="bg-white px-4 py-2 rounded-xl text-sm font-medium shadow-sm border border-outline-variant">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="bg-surface-gray rounded-3xl p-8 border border-outline-variant hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <Layers className="text-accent-blue" />
              <h3 className="text-xs uppercase font-bold tracking-widest text-on-surface-variant">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.frameworks.map(fw => (
                <span key={fw} className="bg-white px-4 py-2 rounded-xl text-sm font-medium shadow-sm border border-outline-variant">
                  {fw}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-surface-gray rounded-3xl p-8 border border-outline-variant hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <Wrench className="text-accent-blue" />
              <h3 className="text-xs uppercase font-bold tracking-widest text-on-surface-variant">Tools & Infra</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.tools.map(tool => (
                <span key={tool} className="bg-white px-4 py-2 rounded-xl text-sm font-medium shadow-sm border border-outline-variant">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
