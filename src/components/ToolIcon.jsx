import {
  FaBrain,
  FaChartBar,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaFileExcel,
  FaGithub,
  FaJs,
  FaPython,
  FaReact,
  FaTable,
  FaUsers
} from "react-icons/fa";

const iconMap = {
  Python: FaPython,
  R: FaChartLine,
  Excel: FaFileExcel,
  "Excel Dashboards": FaFileExcel,
  "Google Sheets": FaTable,
  Pandas: FaTable,
  NumPy: FaTable,
  Jupyter: FaCode,
  SQL: FaDatabase,
  MySQL: FaDatabase,
  "Microsoft SQL Server": FaDatabase,
  "Google BigQuery": FaDatabase,
  "Power BI": FaChartBar,
  Tableau: FaChartBar,
  "Looker Studio": FaChartBar,
  React: FaReact,
  JavaScript: FaJs,
  GitHub: FaGithub,
  Matplotlib: FaChartBar,
  Seaborn: FaChartLine,
  "Responsive Design": FaCode,
  "Descriptive Statistics": FaChartBar,
  "Hypothesis Testing": FaBrain,
  Regression: FaChartLine,
  Inference: FaBrain,
  Probability: FaBrain,
  "Critical Thinking": FaBrain,
  Communication: FaUsers,
  Collaboration: FaUsers,
  "Attention to Detail": FaBrain,
  "Project Management": FaUsers
};

export default function ToolIcon({ name }) {
  const Icon = iconMap[name];

  if (Icon) {
    return <Icon aria-hidden="true" />;
  }

  return <span aria-hidden="true">{name.slice(0, 2).toUpperCase()}</span>;
}
