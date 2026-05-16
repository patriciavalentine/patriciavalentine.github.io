import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projectCategories, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const visibleProjects = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <section className="section-pad projects-section" id="projects">
      <div className="container">
        <div className="section-heading split">
          <div>
            <span className="section-kicker">Featured Projects</span>
            {/* <h2>Case studies with data, visuals, tools, and business context.</h2> */}
            <h2>Real-world analytics, visualization and automation projects.</h2>
          </div>
          <p>
            Filter projects by the relevant technology stack to quickly discover work that matches your area of interest. Once you select a project, you can explore a detailed, in-depth overview covering its objectives, implementation approach, features, and overall impact. Each project is also linked to its corresponding GitHub repository, where you can access the full source code, technical documentation, and deeper insights into the build process.
          </p>
        </div>

        <div className="filter-row" aria-label="Project filters">
          {projectCategories.map((category) => (
            <button
              type="button"
              key={category}
              className={active === category ? "active" : ""}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
