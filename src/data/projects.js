export const projects = [
  {
    id: "phone-sales",
    title: "Phone Sales Data Analysis",
    category: "Python",
    featured: true,
    image: "images/projects/phone-sales.svg",
    tools: ["Python", "Jupyter", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
    summary:
      "Analyzed phone sales data to uncover pricing patterns, brand performance, customer ratings, sales volume, and discount behavior.",
    problem:
      "The project explored how phone brands, models, prices, colors, ratings, and discounts relate to sales performance and customer preference.",
    insights: [
      "Samsung led in unit sales while Apple generated strong revenue performance.",
      "Pricing varied significantly across brands, with premium brands showing wider price ranges.",
      "Discount percentage had a very weak relationship with sales in the dataset."
    ],
    impact:
      "The analysis helps compare brand positioning, pricing strategy, and customer preference patterns in the phone market.",
    github: "https://github.com/patriciavalentine/PHONE-SALES-DATA-ANALYSIS",
    live: ""
  },
  {
    id: "bolt-rides",
    title: "Bolt Ride Analytics",
    category: "SQL",
    featured: true,
    image: "images/projects/bolt-rides.svg",
    tools: ["MySQL", "Tableau", "SQL", "Dashboarding"],
    summary:
      "Analyzed Bolt ride operations across January and February to understand ride activity, revenue, distance, payment behavior, and performance trends.",
    problem:
      "The goal was to transform operational ride data into useful metrics and visual dashboards for decision-making.",
    insights: [
      "Ride activity and revenue can be compared across time periods to identify operational trends.",
      "Payment methods, booking fees, tips, distance, and ride states provide useful performance indicators.",
      "Dashboard visuals make ride operations easier to monitor and explain."
    ],
    impact:
      "The project supports better operational monitoring by turning raw ride data into structured insights and visuals.",
    github: "https://github.com/patriciavalentine/BOLT-RIDE-ANALYTICS",
    live: ""
  },
  {
    id: "healthcare-performance",
    title: "Healthcare Performance Analysis",
    category: "Power BI",
    featured: true,
    image: "images/projects/healthcare.svg",
    tools: ["Microsoft SQL Server", "Power BI", "T-SQL", "Data Visualization"],
    summary:
      "Analyzed healthcare facility performance across patient demographics, medical conditions, billing, insurance, admissions, doctors, and hospitals.",
    problem:
      "The project aimed to understand healthcare performance by studying patient, hospital, insurance, billing, and admission data.",
    insights: [
      "Healthcare performance can be explored through patient demographics, medical conditions, billing amounts, and length of admission.",
      "SQL Server helped structure and analyze the dataset before dashboard design.",
      "Power BI visuals made the findings easier to communicate to stakeholders."
    ],
    impact:
      "The analysis highlights patterns that can support healthcare performance monitoring and operational review.",
    github: "https://github.com/patriciavalentine/HEALTHCARE-PERFORMANCE-ANALYSIS",
    live: ""
  },
  {
    id: "supermarket-sales",
    title: "Supermarket Sales Analysis",
    category: "Excel",
    featured: false,
    image: "images/projects/supermarket.svg",
    tools: ["Excel", "Pivot Tables", "Charts", "Dashboard"],
    summary:
      "Studied three supermarket branches over a three-month period to compare branch performance, product lines, payment methods, and sales trends.",
    problem:
      "The analysis focused on identifying the strongest branch, preferred payments, top-selling products, and sales opportunities.",
    insights: [
      "Branch performance and customer preferences can be compared with Excel dashboards.",
      "Pivot tables help summarize product, branch, and payment trends quickly.",
      "The project highlights opportunities to improve sales efficiency and profitability."
    ],
    impact:
      "The dashboard gives a quick business view of supermarket sales performance and customer behavior.",
    github: "https://github.com/patriciavalentine/SUPERMARKET-SALES-ANALYSIS",
    live: ""
  },
  {
    id: "kcse-scraping",
    title: "KCSE Results Web Scraping",
    category: "Python",
    featured: false,
    image: "images/projects/kcse.svg",
    tools: ["Python", "Web Scraping", "Data Cleaning", "Jupyter"],
    summary:
      "Built a Python-based scraping workflow to extract, clean, and structure KCSE tabular results data for further analysis.",
    problem:
      "The project automated data collection from a web page and transformed the extracted table into a cleaner analysis-ready format.",
    insights: [
      "Web scraping can reduce manual copy-paste work when collecting public tabular data.",
      "Cleaning and structuring are essential before analysis can begin.",
      "The project demonstrates automation, data extraction, and preparation skills."
    ],
    impact:
      "The workflow turns scattered web table data into a structured dataset that can be reused for analysis.",
    github: "https://github.com/patriciavalentine/KCSE-RESULTS-WEB-SCRAPING",
    live: ""
  },
  {
    id: "loan-data",
    title: "Loan Data Queries",
    category: "BigQuery",
    featured: false,
    image: "images/projects/loan.svg",
    tools: ["Google BigQuery", "SQL", "Looker Studio", "Asset Finance"],
    summary:
      "Analyzed a vehicle loan dataset using BigQuery and visualized the findings in Looker Studio for strategic decision-making.",
    problem:
      "The project explored demographics, financial stability, employment trends, risk assessment, credit scores, and profitability patterns.",
    insights: [
      "SQL queries helped uncover financial and demographic patterns in vehicle loan data.",
      "Risk and profitability indicators can guide better loan offering decisions.",
      "Looker Studio makes SQL-based findings easier to explore visually."
    ],
    impact:
      "The project supports better loan strategy, risk review, and data-driven product decisions.",
    github: "https://github.com/patriciavalentine/LOAN-DATA-QUERIES",
    live: ""
  },
  {
    id: "gym-membership",
    title: "Gym Membership EDA",
    category: "Excel",
    featured: false,
    image: "images/projects/gym.svg",
    tools: ["Excel", "Advanced Excel", "EDA", "Dashboard"],
    summary:
      "Explored gym membership behavior and usage patterns through Excel analysis, charts, and dashboard visuals.",
    problem:
      "The goal was to understand how members use gym services and identify patterns that can support retention and operations.",
    insights: [
      "Excel can be used for a full exploratory analysis workflow.",
      "Charts and dashboards make member behavior easier to interpret.",
      "Usage patterns can guide better gym operations and member engagement."
    ],
    impact:
      "The project gives a practical view of member behavior using a clear Excel dashboard approach.",
    github: "https://github.com/patriciavalentine/GYM-MEMBERSHIP-EXPLORATORY-DATA-ANALYSIS",
    live: ""
  }
];

export const projectCategories = ["All", "Python", "SQL", "Power BI", "Excel", "BigQuery"];
