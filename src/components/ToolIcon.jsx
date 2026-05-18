import {
  FaBrain,
  FaChartLine,
  FaChartBar,
  FaCode,
  FaDatabase,
  FaFileExcel,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaUsers,
  FaDocker,
  FaTable
} from "react-icons/fa";

const iconMap = {
  Python: FaPython,
  R: FaChartLine,
  Excel: FaFileExcel,
  "Google Sheets": FaTable,
  Pandas: FaTable,
  NumPy: FaTable,
  Jupyter: FaCode,

  SQL: FaDatabase,
  MySQL: FaDatabase,
  "Microsoft SQL Server": FaDatabase,
  "Google BigQuery": FaDatabase,
  "API Integration": FaCode,
  Postman: FaCode,

  "Power BI": FaChartBar,
  Tableau: FaChartBar,
  "Looker Studio": FaChartBar,
  Matplotlib: FaChartBar,
  Seaborn: FaChartLine,
  "Excel Dashboards": FaFileExcel,

  React: FaReact,
  JavaScript: FaJs,
  GitHub: FaGithub,
  Git: FaGithub,
  "Responsive Design": FaCode,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Docker: FaDocker,

  "Descriptive Statistics": FaChartBar,
  "Hypothesis Testing": FaBrain,
  Regression: FaChartLine,
  Inference: FaBrain,
  "A/B Testing": FaChartLine,
  Probability: FaBrain,

  "Critical Thinking": FaBrain,
  Communication: FaUsers,
  "Attention to Detail": FaBrain,
  Collaboration: FaUsers,
  "Project Management": FaUsers
};

export default function ToolIcon({ name }) {
  const Icon = iconMap[name];

  if (Icon) {
    return <Icon aria-hidden="true" />;
  }

  return <span aria-hidden="true">{name.slice(0, 2).toUpperCase()}</span>;
}

// import {
//   FaBrain,
//   FaChartBar,
//   FaChartLine,
//   FaCode,
//   FaDatabase,
//   FaFileExcel,
//   FaGithub,
//   FaJs,
//   FaPython,
//   FaHtml5,
//   FaCss3Alt,
//   FaReact,
//   FaTable,
//   FaUsers,
//   FaDocker
// } from "react-icons/fa";



// const iconMap = {
//   Python: FaPython,
//   HTML: FaHtml5,
//   CSS: FaCss3Alt,
//   R: FaChartLine,
//   Excel: FaFileExcel,
//   "Excel Dashboards": FaFileExcel,
//   "Google Sheets": FaTable,
//   Pandas: FaTable,
//   NumPy: FaTable,
//   Jupyter: FaCode,
//   SQL: FaDatabase,
//   MySQL: FaDatabase,
//   "Microsoft SQL Server": FaDatabase,
//   "Google BigQuery": FaDatabase,
//   "Power BI": FaChartBar,
//   Tableau: FaChartBar,
//   "Looker Studio": FaChartBar,
//   React: FaReact,
//   JavaScript: FaJs,
//   GitHub: FaGithub,
//   Matplotlib: FaChartBar,
//   Seaborn: FaChartLine,
//   "Responsive Design": FaCode,
//   "Descriptive Statistics": FaChartBar,
//   "Hypothesis Testing": FaBrain,
//   Regression: FaChartLine,
//   Inference: FaBrain,
//   Probability: FaBrain,
//   "Critical Thinking": FaBrain,
//   Communication: FaUsers,
//   Collaboration: FaUsers,
//   "Attention to Detail": FaBrain,
//   "Project Management": FaUsers,
//   Docker: FaDocker
//   // Postman: SiPostman,
// };

// export default function ToolIcon({ name }) {
//   const Icon = iconMap[name];

//   if (Icon) {
//     return <Icon aria-hidden="true" />;
//   }

//   return <span aria-hidden="true">{name.slice(0, 2).toUpperCase()}</span>;
// }
