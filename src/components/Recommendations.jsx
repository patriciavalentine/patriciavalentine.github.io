import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { recommendations } from "../data/recommendations";

function RecommendationCard({ item }) {
  return (
    <article className="recommendation-card">
      <div className="quote-mark">“</div>
      <p>{item.quote}</p>
      <div className="recommendation-author">
        <strong>{item.name}</strong>
        <span>{item.role}</span>
        <small>{item.relationship}</small>
      </div>
    </article>
  );
}

export default function Recommendations() {
  const [open, setOpen] = useState(false);
  const featured = recommendations.filter((item) => item.featured).slice(0, 3);

  return (
    <section className="section-pad recommendations-section" id="recommendations">
      <div className="container">
        <div className="section-heading split">
          <div>
            <span className="section-kicker">Recommendations</span>
            <h2>Social proof for the way I work, communicate, and deliver insights.</h2>
          </div>
          <p>
            Add real recommendations here from LinkedIn, clients, teammates, mentors, instructors, or project reviewers.
          </p>
        </div>

        <div className="recommendations-grid">
          {featured.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <RecommendationCard item={item} />
            </motion.div>
          ))}
        </div>

        <div className="recommendations-actions">
          <button className="button button-ghost" type="button" onClick={() => setOpen(true)}>
            View All Recommendations
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="All recommendations">
            <motion.article
              className="recommendations-modal"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.22 }}
            >
              <button className="modal-close" type="button" onClick={() => setOpen(false)} aria-label="Close recommendations">
                ×
              </button>
              <div className="modal-content">
                <span className="section-kicker">All Recommendations</span>
                <h3>What people say about Patricia&apos;s analytics work</h3>
                <div className="recommendations-list">
                  {recommendations.map((item) => (
                    <RecommendationCard item={item} key={item.id} />
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
