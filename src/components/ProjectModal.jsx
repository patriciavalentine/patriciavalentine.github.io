import { motion } from "framer-motion";
import { asset } from "../utils/assets";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <motion.article
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
          ×
        </button>
        <img src={asset(project.image)} alt="" />
        <div className="modal-content">
          <span className="project-category">{project.category}</span>
          <h3 id="project-modal-title">{project.title}</h3>
          <p>{project.problem}</p>

          <h4>Key Insights</h4>
          <ul>
            {project.insights.map((insight) => (
              <li key={insight}>{insight}</li>
            ))}
          </ul>

          <h4>Impact</h4>
          <p>{project.impact}</p>

          <div className="tool-list">
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          <div className="modal-actions">
            {project.github && (
              <a className="button button-primary" href={project.github} target="_blank" rel="noreferrer">
                View GitHub
              </a>
            )}
            {project.live && (
              <a className="button button-ghost" href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
}
