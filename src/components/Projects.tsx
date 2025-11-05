import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Github } from "lucide-react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import VideoModal from "./VideoModal";

const categories = [
  { id: "web", title: "Web Apps", color: "from-blue-500 to-indigo-600" },
  { id: "ai", title: "AI & Data", color: "from-purple-500 to-pink-600" },
  { id: "dash", title: "Dashboards", color: "from-green-500 to-emerald-600" },
];

const Projects = () => {
  const [activeCat, setActiveCat] = useState("all");
  const [search, setSearch] = useState("");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filtered = projects.filter(
    (p) =>
      (activeCat === "all" || p.category === activeCat) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="text-red-500">Projects</span>
        </motion.h2>

        {/* 🔍 Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center w-full">
          <div className="flex bg-black/50 p-3 rounded-full w-full sm:w-auto max-w-md">
            <Search className="mr-3 opacity-70" />
            <input
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent border-none outline-none flex-1 text-white text-base"
            />
          </div>
          <button className="p-3 rounded-full bg-red-600 hover:bg-red-500 transition">
            <Filter size={20} />
          </button>
        </div>

        {/* 🧭 Category Filter */}
        <div className="flex overflow-x-auto gap-3 mb-12 pb-3 snap-x snap-mandatory scrollbar-hide justify-center">
          {[{ id: "all", title: "All Projects" }, ...categories].map((cat) => (
            <motion.button
              key={cat.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCat(cat.id)}
              className={`flex-shrink-0 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base whitespace-nowrap snap-center ${
                activeCat === cat.id
                  ? "bg-gradient-to-r from-red-600 to-red-500 shadow-xl"
                  : "bg-black/50 hover:bg-white/10"
              }`}
            >
              {cat.title}
            </motion.button>
          ))}
        </div>

        {/* 💻 Project Sections */}
        {categories.map((cat) => {
          const catProjects = filtered.filter((p) => p.category === cat.id);
          if (catProjects.length === 0) return null;

          return (
            <div key={cat.id} className="mb-20">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 pl-2 sm:pl-4">
                {cat.title}
              </h3>
              <motion.div
                className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 snap-x snap-mandatory scrollbar-hide"
                whileTap={{ cursor: "grabbing" }}
              >
                {catProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpenVideo={() => setVideoUrl(project.video ?? null)}
                    onOpenDescription={() => setSelectedProject(project)}
                  />
                ))}
              </motion.div>
            </div>
          );
        })}

        {/* 🎬 Modals */}
        <VideoModal videoUrl={videoUrl} onClose={() => setVideoUrl(null)} />
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

// 🧱 Project Card
interface ProjectCardProps {
  project: any;
  onOpenVideo: () => void;
  onOpenDescription: () => void;
}

const ProjectCard = ({
  project,
  onOpenVideo,
  onOpenDescription,
}: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex-shrink-0 w-64 sm:w-80 lg:w-96 snap-center cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onOpenDescription}
    >
      <div className="bg-black/50 rounded-2xl overflow-hidden shadow-2xl relative group">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-40 sm:h-48 lg:h-56 object-cover"
        />

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6 flex flex-col justify-end"
            >
              <div className="flex gap-2 sm:gap-3 items-center">
                {/* 🎥 Demo button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenVideo();
                  }}
                  className="px-4 sm:px-6 py-2 bg-red-600 rounded-full font-bold text-sm sm:text-base hover:bg-red-500"
                >
                  Demo
                </button>

                {/* 🐙 GitHub Icon */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-gray-700 flex items-center justify-center transition-all duration-300"
                >
                  <Github size={18} className="text-white" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-4 sm:p-6">
          <h4 className="font-bold text-lg sm:text-xl mb-2">{project.title}</h4>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.tech.map((t: string) => (
              <span
                key={t}
                className="px-2 sm:px-3 py-1 bg-red-600/50 rounded-full text-xs sm:text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
