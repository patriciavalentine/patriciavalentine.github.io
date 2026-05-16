import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { asset } from "../utils/assets";
import { getWhatsAppLink } from "../utils/whatsapp";

export default function Contact() {
  const whatsappLink = getWhatsAppLink(profile.whatsappNumber, profile.whatsappPrefill);
  const whatsappMailSubject = encodeURIComponent("WhatsApp chat request from portfolio");
  const whatsappMailBody = encodeURIComponent(
    "Hi Patricia, I viewed your analytics portfolio and would like to connect on WhatsApp."
  );

  return (
    <section className="section-pad contact-section" id="contact">
      <div className="container contact-card">
        <motion.div
          className="contact-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-kicker">Contact</span>
          <h2>Let&apos;s turn data into something useful.</h2>
          <p>
            Open to analytics projects, dashboards, collaboration, and roles where clean insight and strong communication matter.
          </p>
        </motion.div>

        <motion.div
          className="contact-portrait"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <img src={asset(profile.photos.contact)} alt={`${profile.name} contact portrait`} />
          <span>{profile.role}</span>
        </motion.div>

        <div className="contact-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            Email Me
          </a>
          <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {whatsappLink ? (
            <a className="button button-ghost" href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          ) : (
            <a className="button button-ghost" href={`mailto:${profile.email}?subject=${whatsappMailSubject}&body=${whatsappMailBody}`}>
              Request WhatsApp Chat
            </a>
          )}
        </div>

        <div className="contact-info">
          <span>{profile.email}</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
