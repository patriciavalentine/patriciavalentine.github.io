import { useState } from "react";
import { motion } from "framer-motion";

import { certifications, education, profile } from "../data/profile";
import { asset } from "../utils/assets";

export default function About() {
  const [aboutExpanded, setAboutExpanded] = useState(false);

  const previewParagraphs = profile.about.preview || [];
  const hiddenParagraphs = profile.about.more || [];
  const hasHiddenParagraphs = hiddenParagraphs.length > 0;

  return (
    <section className="section-pad about-section" id="about">
      <div className="container two-column">
        <motion.div
          className="section-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-kicker about-kicker">
            {profile.about.kicker}
          </span>

          <h2>{profile.about.title}</h2>

          <div className="about-text">
            {previewParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {aboutExpanded && (
              <div className="about-more" id="about-more-content">
                {hiddenParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            {hasHiddenParagraphs && (
              <button
                className="read-more-button"
                type="button"
                aria-expanded={aboutExpanded}
                aria-controls="about-more-content"
                onClick={() => setAboutExpanded((value) => !value)}
              >
                {aboutExpanded ? "Show Less" : "Read More"}
              </button>
            )}
          </div>

          <div className="highlight-list">
            {profile.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="timeline-panel"
          initial={{ opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="about-photo-card">
            <img
              src={asset(profile.photos.about)}
              alt={`${profile.name} profile`}
            />
            <div>
              <span>{profile.role}</span>
              <strong>{profile.professionalTitle}</strong>
              <small>{profile.location}</small>
            </div>
          </div>

          <div className="timeline-card featured-card">
            <span>Education</span>
            {education.map((item) => (
              <div key={item.title} className="timeline-item">
                <small>{item.period}</small>
                <strong>{item.title}</strong>
                <em>{item.place}</em>
                <p>{item.details}</p>
              </div>
            ))}
          </div>

          <div className="timeline-card cert-card">
            <span>Certifications & Training</span>
            <div className="cert-grid">
              {certifications.map((cert) => (
                <small key={cert}>{cert}</small>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// // import { motion } from "framer-motion";
// import { useState } from "react";
// import { motion } from "framer-motion";

// import { certifications, education, profile } from "../data/profile";
// import { asset } from "../utils/assets";

// export default function About() {
//   const [aboutExpanded, setAboutExpanded] = useState(false);
//   return (
//     <section className="section-pad about-section" id="about">
//       <div className="container two-column">
//         <motion.div
//           className="section-copy"
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55 }}
//         >
//           <span className="section-kicker">About Me</span>
//           {/* <h2>Mathematics foundation. Analytics mindset. Dashboard-ready storytelling.</h2> */}
//           <h2>My Path Into Analytics.</h2>
//           {profile.about.map((paragraph) => (
//             <p key={paragraph}>{paragraph}</p>
//           ))}

//           <div className="highlight-list">
//             {profile.highlights.map((item) => (
//               <span key={item}>{item}</span>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           className="timeline-panel"
//           initial={{ opacity: 0, x: 34 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.65 }}
//         >
//           <div className="about-photo-card">
//             <img src={asset(profile.photos.about)} alt={`${profile.name} profile`} />
//             <div>
//               <span>{profile.role}</span>
//               <strong>{profile.professionalTitle}</strong>
//               <small>{profile.location}</small>
//             </div>
//           </div>

//           <div className="timeline-card featured-card">
//             <span>Education</span>
//             {education.map((item) => (
//               <div key={item.title} className="timeline-item">
//                 <small>{item.period}</small>
//                 <strong>{item.title}</strong>
//                 <em>{item.place}</em>
//                 <p>{item.details}</p>
//               </div>
//             ))}
//           </div>

//           <div className="timeline-card cert-card">
//             <span>Certifications & Training</span>
//             <div className="cert-grid">
//               {certifications.map((cert) => (
//                 <small key={cert}>{cert}</small>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
