import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { asset } from "../utils/assets";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ResumeGate() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (!emailPattern.test(form.email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    const payload = {
      name: form.name || "Portfolio visitor",
      email: form.email,
      request_type: "Resume view",
      source: "Patricia Valentine Portfolio"
    };

    if (profile.resume.formEndpoint) {
      try {
        setStatus("loading");
        const response = await fetch(profile.resume.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("The resume request could not be saved.");
        }

        setUnlocked(true);
        setStatus("success");
        setMessage("Thanks! Your resume preview is unlocked below.");
      } catch (error) {
        setStatus("error");
        setMessage("Something went wrong while saving the request. Please try again or email Patricia directly.");
      }
      return;
    }

    setUnlocked(true);
    setStatus("success");
    setMessage("Demo unlock complete. Add a Formspree endpoint in profile.js to record visitor emails.");
  }

  return (
    <section className="section-pad resume-section" id="resume">
      <div className="container resume-layout">
        <motion.div
          className="resume-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-kicker">Resume</span>
          <h2>View my resume</h2>
          <p>{profile.resume.note}</p>

          <div className="resume-warning">
            <strong>Honest note:</strong> My resume is updated from time to time, but it might not always include my latest work. If you’d like the most recent version, just message me and I’ll gladly share it.
          </div>
        </motion.div>

        <motion.div
          className="resume-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className="resume-card-top">
            <img src={asset(profile.photos.about)} alt={`${profile.name} resume portrait`} />
            <div>
              <strong>{profile.name}</strong>
              <span>{profile.professionalTitle}</span>
            </div>
          </div>

          {!unlocked ? (
            <form className="resume-form" onSubmit={handleSubmit}>
              <label>
                Name <span>optional</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Your name"
                />
              </label>

              <label>
                Email <span>required</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <button className="button button-primary" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Unlocking..." : "Unlock Resume Preview"}
              </button>

              {message && <p className={`form-message ${status}`}>{message}</p>}
            </form>
          ) : (
            <div className="resume-viewer-wrap">
              {message && <p className={`form-message ${status}`}>{message}</p>}
              <div className="resume-viewer-toolbar">
                <span>Preview mode</span>
                <small>No custom download button shown</small>
              </div>
              <iframe
                className="resume-viewer"
                src={asset(profile.resume.file)}
                title="Patricia Valentine resume preview"
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
