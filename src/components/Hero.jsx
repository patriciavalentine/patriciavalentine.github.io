import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { asset } from "../utils/assets";

export default function Hero() {
  return (
    <section className="hero section-pad" id="home">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow availability-eyebrow">
            <span className="pulse-dot" />
            Available for data projects
          </div>

          {/* <h1>Analytics designed for decision making.</h1> */}
          <h1>Sharper insights start here.</h1>
          {/* <h1>Data storytelling with measurable impact.</h1> */}
          <p className="hero-lead">{profile.intro}</p>

          <div className="pv-mobile-portrait" aria-label={`${profile.name} portrait`}>
            <img src={asset(profile.photos.hero)} alt={`${profile.name} portrait`} />
            <div>
              <span>Business Intelligence Analyst</span>
              <strong>{profile.name}</strong>
              <p>Dashboards • Data storytelling • Business insights</p>
            </div>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore Projects
            </a>
            <a className="button button-ghost" href="#resume">
              View Resume
            </a>
          </div>

          <div className="tool-ticker" aria-label="Core analytics tools">
            {["Python", "SQL", "Power BI", "Tableau", "Excel", "BigQuery", "React"].map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="device-stage pv-hero-visual pv-portrait-first"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          <div className="pv-halo pv-halo-one" aria-hidden="true" />
          <div className="pv-halo pv-halo-two" aria-hidden="true" />

          <div className="pv-portrait-showcase">
            <div className="pv-portrait-card">
              <img src={asset(profile.photos.hero)} alt={`${profile.name} portrait`} />

              <div className="pv-portrait-caption">
                <span>Business Intelligence Analyst</span>
                <strong>{profile.name}</strong>
                <p>Dashboards • Data storytelling • Business insights</p>
              </div>
            </div>
          </div>

          <div className="pv-dashboard-card pv-dashboard-secondary" aria-label="Dashboard preview">
            <div className="pv-dashboard-topbar">
              <div className="pv-window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="pv-live-chip">Live dashboard</span>
            </div>

            <div className="pv-dashboard-header">
              <div>
                <span>Decision intelligence studio</span>
                <strong>Revenue Performance</strong>
              </div>
            </div>

            <div className="pv-metric-grid">
              <div className="pv-metric-card">
                <span>Projects</span>
                <strong>9+</strong>
                <small>Dashboards built</small>
              </div>
              <div className="pv-metric-card hot">
                <span>Rows</span>
                <strong>84K</strong>
                <small>Analyzed</small>
              </div>
              <div className="pv-metric-card">
                <span>Reporting</span>
                <strong>-40%</strong>
                <small>Time saved</small>
              </div>
            </div>

            <div className="pv-chart-card pv-chart-card-compact">
              <div className="pv-chart-heading">
                <span>Monthly trend</span>
                <strong>+18.4%</strong>
              </div>

              <div className="pv-chart-area" aria-label="Revenue trend chart preview">
                <div className="pv-bars" aria-hidden="true">
                  <i style={{ height: "45%" }} />
                  <i style={{ height: "66%" }} />
                  <i style={{ height: "52%" }} />
                  <i style={{ height: "82%" }} />
                  <i style={{ height: "61%" }} />
                  <i style={{ height: "92%" }} />
                </div>

                <svg className="pv-trend-line" viewBox="0 0 420 150" aria-hidden="true">
                  <defs>
                    <linearGradient id="pvHeroLine" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="rgba(56,189,248,0)" />
                      <stop offset="42%" stopColor="rgba(56,189,248,1)" />
                      <stop offset="100%" stopColor="rgba(56,189,248,0.2)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M10 116 C70 86, 104 94, 150 66 S238 32, 286 58 S350 86, 410 30"
                    fill="none"
                    stroke="url(#pvHeroLine)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <circle cx="286" cy="58" r="7" />
                  <circle cx="410" cy="30" r="7" />
                </svg>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}


// import { motion } from "framer-motion";
// import { profile } from "../data/profile";
// import { asset } from "../utils/assets";

// export default function Hero() {
//   return (
//     <section className="hero section-pad" id="home">
//       <div className="hero-bg-grid" aria-hidden="true" />
//       <div className="hero-orb hero-orb-one" aria-hidden="true" />
//       <div className="hero-orb hero-orb-two" aria-hidden="true" />

//       <div className="container hero-layout">
//         <motion.div
//           className="hero-copy"
//           initial={{ opacity: 0, y: 32 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="eyebrow">
//             <span className="pulse-dot" />
//             {profile.professionalTitle}
//           </div>
//           <h1>
//             {/* Data stories that look sharp, feel interactive, and drive decisions. */}
//             Analytics designed for decision making.
//           </h1>
//           <p className="hero-lead">{profile.intro}</p>

//           <div className="hero-actions">
//             <a className="button button-primary" href="#projects">
//               Explore Projects
//             </a>
//             <a className="button button-ghost" href="#resume">
//               View Resume
//             </a>
//           </div>

//           <div className="tool-ticker" aria-label="Core analytics tools">
//             {["Python", "SQL", "Power BI", "Tableau", "Excel", "BigQuery", "React"].map((tool) => (
//               <span key={tool}>{tool}</span>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           className="device-stage"
//           initial={{ opacity: 0, scale: 0.94, y: 24 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.85, delay: 0.1 }}
//         >
//           <div className="device laptop">
//             <div className="device-topbar">
//               <span />
//               <span />
//               <span />
//             </div>
//             <div className="dashboard-screen">
//               <div className="dash-header">
//                 <div>
//                   <small>{profile.role}</small>
//                   <strong>Executive Overview</strong>
//                 </div>
//                 <span className="live-pill">Live</span>
//               </div>
//               <div className="hero-kpis">
//                 <div><strong>9+</strong><span>Projects</span></div>
//                 <div><strong>84K</strong><span>Rows</span></div>
//                 <div><strong>92%</strong><span>Insight Score</span></div>
//               </div>
//               <div className="chart-bars">
//                 <i style={{ height: "52%" }} />
//                 <i style={{ height: "72%" }} />
//                 <i style={{ height: "44%" }} />
//                 <i style={{ height: "86%" }} />
//                 <i style={{ height: "63%" }} />
//                 <i style={{ height: "94%" }} />
//               </div>
//               <div className="line-visual" />
//             </div>
//           </div>

//           <div className="device tablet profile-tablet">
//             <img src={asset(profile.photos.hero)} alt={`${profile.name} portrait`} />
//             <div>
//               <strong>{profile.name}</strong>
//               <span>{profile.professionalTitle}</span>
//             </div>
//           </div>

//           <div className="device phone">
//             <div className="phone-notch" />
//             <img src={asset(profile.photos.hero)} alt={`${profile.name} profile preview`} />
//             <strong>{profile.name.split(" ")[0]}</strong>
//             <span>{profile.role}</span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
