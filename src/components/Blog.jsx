import { motion } from "framer-motion";
import { blogs } from "../data/blogs";

export default function Blog() {
  return (
    <section className="section-pad blog-section" id="blog">
      <div className="container">
        <div className="section-heading center">
          <span className="section-kicker">Writing Blog</span>
          <h2>My Thoughts on Data</h2>
          <p>
            A space for exploring ideas in data, analytics, visualization, and technology. It features short insights, trends, and learnings, with full articles hosted on my main blog.
          </p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              className="blog-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <span>{blog.date} • {blog.read}</span>
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
              <a href={blog.link} target="_blank" rel="noreferrer">Read on {blog.source} →</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
