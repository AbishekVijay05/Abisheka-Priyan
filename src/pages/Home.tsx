import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "../constants/portfolio";
import ResumeFile from "./Resume.pdf"; // Ensure this path is correct and the file exists

export default function Home() {
  return (
    <div className="flex flex-col min-h-[80vh] justify-center pt-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#1D1D1F] mb-6 leading-[1.1]">
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 font-medium leading-relaxed">
          {PERSONAL_INFO.role} {PERSONAL_INFO.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Link to="/projects" className="btn-primary flex items-center gap-2">
            View Projects <ArrowRight size={20} />
          </Link>
          <a
            href="https://drive.google.com/file/d/1Frk2v_abnrZwnO5LXAJmqznaZP-0aZlo/view?usp=sharing"
            className="btn-secondary"
            
          >
            Download Resume <Download size={18} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
