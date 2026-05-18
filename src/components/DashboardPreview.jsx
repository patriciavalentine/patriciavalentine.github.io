import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import { categoryRevenue, channelMix, miniKpis, revenueTrend } from "../data/chartData";

const views = ["Revenue", "Operations", "Mix"];
const tooltipContentStyle = {
  background: "var(--chart-tooltip-bg)",
  border: "1px solid var(--chart-tooltip-border)",
  borderRadius: 14,
  color: "var(--chart-tooltip-text)",
  boxShadow: "0 18px 44px var(--chart-tooltip-shadow)"
};

const tooltipLabelStyle = {
  color: "var(--chart-tooltip-title)",
  fontWeight: 900
};

const tooltipItemStyle = {
  color: "var(--chart-tooltip-text)",
  fontWeight: 800
};

function AnimatedNumber({ value, duration = 1200 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const valueString = String(value);

    const prefix = valueString.match(/^[^\d.]*/)?.[0] || "";
    const suffix = valueString.match(/[^\d.]*$/)?.[0] || "";
    const numericValue = parseFloat(valueString.replace(/[^\d.]/g, ""));

    if (Number.isNaN(numericValue)) {
      setDisplayValue(valueString);
      return;
    }

    const decimalMatch = valueString.match(/\.(\d+)/);
    const decimalPlaces = decimalMatch ? decimalMatch[1].replace(/[^\d]/g, "").length : 0;

    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = numericValue * easedProgress;

      const formattedValue =
        decimalPlaces > 0
          ? currentValue.toFixed(decimalPlaces)
          : Math.round(currentValue).toString();

      setDisplayValue(`${prefix}${formattedValue}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <strong ref={ref}>{displayValue}</strong>;
}

export default function DashboardPreview() {
  const [view, setView] = useState("Revenue");

  return (
    <section className="section-pad dashboard-section" id="dashboard">
      <div className="container">
        <div className="dashboard-shell">
          <div className="dashboard-copy">
            <span className="section-kicker">Interactive Preview</span>

            <h2>Live Dashboard Experience</h2>

            <p>
              Hover for insights, and experience responsive dashboard cards designed
              for real-time exploration.
            </p>

            <div className="dashboard-tabs" role="tablist" aria-label="Dashboard chart views">
              {views.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={view === item ? "active" : ""}
                  onClick={() => setView(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="kpi-grid">
            {miniKpis.map((kpi, index) => (
              <motion.div
                className="kpi-card"
                key={kpi.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
              >
                <span>{kpi.label}</span>
                <AnimatedNumber value={kpi.value} />
                <small>{kpi.delta}</small>
              </motion.div>
            ))}
          </div>

          <div className="chart-panel">
            <div className="chart-title-row">
              <div>
                <small>Live sample data</small>
                <h3>{view} Analysis</h3>
              </div>

              <span className="chart-badge">Hover me</span>
            </div>

            <div className="chart-area">
              {view === "Revenue" && (
                <ResponsiveContainer width="100%" height={320}>
                  <AreaChart data={revenueTrend} margin={{ top: 10, right: 18, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.9} />
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, .18)" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    {/* <YAxis stroke="#9ca3af" /> */}
                    <YAxis
                      stroke="#9ca3af"
                      tickFormatter={(value) => `$${value}K`}
                    />
                    {/* <Tooltip
                      contentStyle={{
                        background: "#0f172a",
                        border: "1px solid rgba(255,255,255,.12)",
                        borderRadius: 14
                      }}
                    /> */}
                    <Tooltip
                      contentStyle={tooltipContentStyle}
                      labelStyle={tooltipLabelStyle}
                      itemStyle={tooltipItemStyle}
                      formatter={(value) => [`$${value}K`, "Revenue"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#22d3ee"
                      fill="url(#revenueFill)"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}

              {view === "Operations" && (
                <ResponsiveContainer width="100%" height={320}>
                  <BarChart data={categoryRevenue} margin={{ top: 10, right: 18, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, .18)" />
                    <XAxis dataKey="category" stroke="#9ca3af" />
                    {/* <YAxis stroke="#9ca3af" /> */}
                    <YAxis
                      stroke="#9ca3af"
                      tickFormatter={(value) => `${value}K`}
                    />
                    {/* <Tooltip
                      contentStyle={{
                        background: "#0f172a",
                        border: "1px solid rgba(255,255,255,.12)",
                        borderRadius: 14
                      }}
                    /> */}
                    {/* <Tooltip
                      contentStyle={tooltipContentStyle}
                      labelStyle={tooltipLabelStyle}
                      itemStyle={tooltipItemStyle}
                    /> */}
                    <Tooltip
                      contentStyle={tooltipContentStyle}
                      labelStyle={tooltipLabelStyle}
                      itemStyle={tooltipItemStyle}
                      formatter={(value) => [`${value}K`, "Sales"]}
                    />
                    <Bar dataKey="value" radius={[14, 14, 4, 4]} fill="#0ea5e9" />
                  </BarChart>
                </ResponsiveContainer>
              )}

              {view === "Mix" && (
                <ResponsiveContainer width="100%" height={320}>
                  <PieChart>
                    {/* <Tooltip
                      contentStyle={{
                        background: "#0f172a",
                        border: "1px solid rgba(255,255,255,.12)",
                        borderRadius: 14
                      }}
                    /> */}
                    {/* <Tooltip
                      contentStyle={tooltipContentStyle}
                      labelStyle={tooltipLabelStyle}
                      itemStyle={tooltipItemStyle}
                    /> */}
                    <Tooltip
                      contentStyle={tooltipContentStyle}
                      labelStyle={tooltipLabelStyle}
                      itemStyle={tooltipItemStyle}
                      formatter={(value, name) => [`${value}%`, name]}
                    />

                    <Pie
                      data={channelMix}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={72}
                      outerRadius={116}
                      paddingAngle={6}
                    >
                      {channelMix.map((entry, index) => (
                        <Cell
                          key={entry.name}
                          fill={["#22d3ee", "#2563eb", "#0ea5e9", "#60a5fa"][index]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// import { useState } from "react";
// // import { motion } from "framer-motion";
// import { motion, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// import {
//   Area,
//   AreaChart,
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Cell,
//   Pie,
//   PieChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis
// } from "recharts";
// import { categoryRevenue, channelMix, miniKpis, revenueTrend } from "../data/chartData";

// const views = ["Revenue", "Operations", "Mix"];

// export default function DashboardPreview() {
//   const [view, setView] = useState("Revenue");

//   return (
//     <section className="section-pad dashboard-section" id="dashboard">
//       <div className="container">
//         <div className="dashboard-shell">
//           <div className="dashboard-copy">
//             <span className="section-kicker">Interactive Preview</span>
//             <h2>Live Dashboard Experience</h2>
//             <p>
//               {/* This section gives visitors something to explore immediately: KPIs, chart tabs, hover tooltips, and responsive dashboard cards. */}
//               Hover for insights, and experience responsive dashboard cards designed for real-time exploration.
//             </p>

//             <div className="dashboard-tabs" role="tablist" aria-label="Dashboard chart views">
//               {views.map((item) => (
//                 <button
//                   key={item}
//                   type="button"
//                   className={view === item ? "active" : ""}
//                   onClick={() => setView(item)}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="kpi-grid">
//             {miniKpis.map((kpi, index) => (
//               <motion.div
//                 className="kpi-card"
//                 key={kpi.label}
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05, duration: 0.35 }}
//               >
//                 <span>{kpi.label}</span>
//                 <strong>{kpi.value}</strong>
//                 <small>{kpi.delta}</small>
//               </motion.div>
//             ))}
//           </div>

//           <div className="chart-panel">
//             <div className="chart-title-row">
//               <div>
//                 <small>Live sample data</small>
//                 <h3>{view} Analysis</h3>
//               </div>
//               <span className="chart-badge">Hover me</span>
//             </div>

//             <div className="chart-area">
//               {view === "Revenue" && (
//                 <ResponsiveContainer width="100%" height={320}>
//                   <AreaChart data={revenueTrend} margin={{ top: 10, right: 18, left: 0, bottom: 0 }}>
//                     <defs>
//                       <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.9} />
//                         <stop offset="95%" stopColor="#2563eb" stopOpacity={0.05} />
//                       </linearGradient>
//                     </defs>
//                     <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, .18)" />
//                     <XAxis dataKey="month" stroke="#9ca3af" />
//                     <YAxis stroke="#9ca3af" />
//                     <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.12)", borderRadius: 14 }} />
//                     <Area type="monotone" dataKey="revenue" stroke="#22d3ee" fill="url(#revenueFill)" strokeWidth={3} />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               )}

//               {view === "Operations" && (
//                 <ResponsiveContainer width="100%" height={320}>
//                   <BarChart data={categoryRevenue} margin={{ top: 10, right: 18, left: 0, bottom: 0 }}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, .18)" />
//                     <XAxis dataKey="category" stroke="#9ca3af" />
//                     <YAxis stroke="#9ca3af" />
//                     <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.12)", borderRadius: 14 }} />
//                     <Bar dataKey="value" radius={[14, 14, 4, 4]} fill="#0ea5e9" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               )}

//               {view === "Mix" && (
//                 <ResponsiveContainer width="100%" height={320}>
//                   <PieChart>
//                     <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,.12)", borderRadius: 14 }} />
//                     <Pie
//                       data={channelMix}
//                       dataKey="value"
//                       nameKey="name"
//                       innerRadius={72}
//                       outerRadius={116}
//                       paddingAngle={6}
//                     >
//                       {channelMix.map((entry, index) => (
//                         <Cell key={entry.name} fill={["#22d3ee", "#2563eb", "#0ea5e9", "#60a5fa"][index]} />
//                       ))}
//                     </Pie>
//                   </PieChart>
//                 </ResponsiveContainer>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
