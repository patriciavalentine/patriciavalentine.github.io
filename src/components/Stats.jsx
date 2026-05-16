import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Stats() {
  return (
    <section className="stats-strip" aria-label="Portfolio statistics">
      <div className="container stats-grid">
        {profile.stats.map((item, index) => (
          <motion.div
            className="stat-card"
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
