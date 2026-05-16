import { motion } from "framer-motion";
import { asset } from "../utils/assets";

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      className={`project-card ${project.featured ? "featured" : ""}`}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.35 }}
    >
      <div className="project-image-wrap">
        <img src={asset(project.image)} alt={`${project.title} dashboard illustration`} />
        {project.featured && <span className="featured-pill">Featured</span>}
      </div>

      <div className="project-card-body">
        <div className="project-card-topline">
          <span className="project-category">{project.category}</span>
          <span>{project.tools[0]}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <div className="tool-list compact">
          {project.tools.slice(0, 4).map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        <div className="project-actions">
          <button className="text-button" type="button" onClick={() => onOpen(project)}>
            Read Case Study
          </button>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
