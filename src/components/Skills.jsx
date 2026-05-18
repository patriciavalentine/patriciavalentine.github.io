import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import ToolIcon from "./ToolIcon";

export default function Skills() {
  return (
    <section className="section-pad skills-section" id="skills">
      <div className="container">
        <div className="section-heading center">
          <span className="section-kicker">Core Skills</span>
          <h2>My Analytics Toolkit.</h2>
          <p>
            {/* From data cleaning and querying to visualization and dashboard design, these are the tools I use to transform raw data into actionable insights. */}
            From extracting and cleaning data to querying databases, integrating APIs, building dashboards, and deploying projects, these are the tools I use to turn complex data into meaningful business insights.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className={`skill-card accent-${group.accent}`}
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              <div className="skill-card-top">
                <div className="skill-icon">{index + 1}</div>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="tool-chip">
                    <span className="tool-chip-icon"><ToolIcon name={skill} /></span>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
