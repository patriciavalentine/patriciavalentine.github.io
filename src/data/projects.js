export const projects = [
  {
    id: "phone-sales",
    title: "Phone Sales Data Analysis",
    category: "Python",
    featured: true,
    image: "images/projects/elegant-smartphone.avif",
    tools: ["Python", "Jupyter", "Pandas", "NumPy", "Seaborn", "Matplotlib"],

    summary:
      "Analyzed phone sales data to uncover pricing patterns, brand performance, customer ratings, sales volume, and discount behavior.",

    overview:
      "A mobile phone retailer was experiencing fluctuating sales and increasing competition. Although the retailer offered discounts and stocked multiple brands, they needed to understand what was truly driving sales performance.",

    objective:
      "The goal of this project was to uncover actionable insights into brand performance, model popularity, pricing trends, customer preferences, and the impact of discounts on sales volume.",

    questions: [
      "Which phone models have the highest sales volume?",
      "How do average selling prices vary across different phone brands?",
      "Does phone color affect pricing?",
      "What are the top-rated mobile models?",
      "Does a higher discount lead to higher sales?"
    ],

    process: [
      "Cleaned and processed the raw phone sales dataset.",
      "Handled missing values and prepared the data for analysis.",
      "Calculated key metrics including sales revenue, average selling price, and market share by brand.",
      "Created visualizations to explore pricing, colors, ratings, discounts, and sales volume."
    ],

    insights: [
      "Samsung had the highest unit sales, with 696 units sold.",
      "Apple generated the highest total revenue, showing strong premium brand positioning.",
      "Apple iPhone 11 was the leading model, with 36 units sold.",
      "Black was the most sold phone color, showing strong customer preference.",
      "Gold showed both high sales and high average price, suggesting strong market appeal.",
      "Apple achieved the highest customer ratings.",
      "Discount percentage had a very weak relationship with sales, suggesting discounts did not strongly drive sales volume."
    ],

    recommendations: [
      "Reassess discount strategies instead of relying heavily on discounts to increase sales.",
      "Explore stronger promotional tactics beyond price cuts.",
      "Stock more premium color options such as Gold, Rose Gold, and Space Grey.",
      "Use brand and model performance insights to guide inventory and marketing decisions."
    ],

    charts: [
      {
        title: "Average Selling Prices and Count of Phones Sold by Top 10 Phone Colors",
        image: "images/projects/phone_bar_chart_of_colours.png",
        alt: "The bar graph helps to quickly identify that the Black colors are the most sold, indicating a high consumer preference for it."
      },
      {
        title: "Distribution of Selling Prices Across Brands",
        image: "images/projects/phone_boxplot_distribution_of_sales.png",
        alt: "This boxplot provides insights into the distribution of selling prices for each brand."
      }
    ],

    impact:
      "The analysis helps the retailer improve inventory planning, pricing strategy, product positioning, and marketing decisions.",

    files: ["Raw data", "Cleaned data", "Project notebook"],

    github: "https://github.com/patriciavalentine/PHONE-SALES-DATA-ANALYSIS",
    live: ""
  },

  {
    id: "bolt-rides",
    title: "Bolt Ride Analytics",
    category: "SQL",
    featured: true,
    image: "images/projects/taxi.avif",
    tools: ["MySQL", "Tableau", "SQL", "Dashboarding"],

    summary:
      "Analyzed Bolt ride operations across January and February to understand ride activity, revenue, distance, payment behavior, and performance trends.",

    overview:
      "This project analyzed Bolt ride data from January and February, focusing on ride activity, revenue, pickup locations, booking fees, tips, payment methods, and ride performance trends.",

    objective:
      "The objective was to identify high-demand periods, popular pickup locations, revenue trends, and payment behavior to help drivers make smarter operational decisions.",

    questions: [
      "What are the peak and off-peak hours for Bolt rides?",
      "Which pickup locations are most frequently used?",
      "How does revenue vary across January and February?",
      "Which payment methods are most common among riders?",
      "Are drivers receiving tips from completed rides?"
    ],

    process: [
      "Cleaned and prepared the ride dataset for analysis.",
      "Used MySQL to query ride activity, revenue, distance, booking fees, tips, and payment behavior.",
      "Compared ride performance across January and February.",
      "Built dashboard visuals to communicate operational trends and driver-focused insights."
    ],

    insights: [
      "Peak ride activity occurred around 10 a.m., while lower activity was observed around 9 p.m.",
      "The most frequent pickup locations included Nairobi CBD, JKIA, and Donholm.",
      "January revenue peaked at over KSh 10,000, while February revenue peaked at over KSh 12,000.",
      "Payment method analysis helped show how riders preferred to pay for completed rides.",
      "The analysis showed that drivers received no tips, suggesting an opportunity to improve customer experience."
    ],

    recommendations: [
      "Drivers should align their schedules with high-demand periods to increase ride opportunities.",
      "Drivers should position themselves near high-demand pickup locations such as Nairobi CBD and JKIA.",
      "Drivers can improve customer experience through cleanliness, communication, comfort, and professionalism.",
      "Drivers should monitor revenue patterns across months to identify stronger earning periods."
    ],

    charts: [
      {
        title: "Bolt Ride Dashboard Overview",
        image: "images/projects/taxi_bolt_dashboard.png",
        alt: "Dashboard showing Bolt ride activity, revenue, pickup locations, payment methods, and ride performance trends"
      }
    ],

    impact:
      "The analysis helps Bolt drivers make better decisions about when and where to operate, improving ride availability, revenue potential, customer experience, and service efficiency.",

    github: "https://github.com/patriciavalentine/BOLT-RIDE-ANALYTICS",
    live: ""
  },

  {
    id: "healthcare-performance",
    title: "Healthcare Performance Analysis",
    category: "Power BI",
    featured: true,
    image: "images/projects/healthcare_main.avif",
    tools: ["Microsoft SQL Server", "Power BI", "T-SQL", "Dashboarding"],

    summary:
      "Analyzed healthcare facility performance across patient demographics, medical conditions, billing, insurance, admissions, doctors, and hospitals.",

    overview:
      "This project analyzed healthcare data across multiple facilities, focusing on patient demographics, medical conditions, billing information, insurance providers, doctors, hospitals, and admission details.",

    objective:
      "The objective was to uncover patterns in patient care, medical conditions, healthcare access, billing trends, and resource availability to help facilities improve performance and decision-making.",

    questions: [
      "Is there a relationship between gender and specific medical conditions?",
      "What are the most common medical conditions across different age groups?",
      "Which doctors are associated with specific conditions?",
      "What is the average billing amount by insurance provider?",
      "How are patients distributed across hospitals and doctors?"
    ],

    process: [
      "Cleaned and prepared the healthcare dataset using Microsoft SQL Server.",
      "Explored patient demographics, medical conditions, billing amounts, insurance providers, doctors, and hospital records.",
      "Used SQL queries to analyze patterns across age groups, gender, conditions, and billing.",
      "Built Power BI visuals to communicate healthcare performance trends and key metrics."
    ],

    insights: [
      "A slight relationship was observed between gender and some medical conditions, with asthma appearing more among males and arthritis more among females.",
      "Seniors represented the largest patient group across most medical conditions, highlighting the importance of geriatric care.",
      "The number of doctors was slightly higher than the number of patients, suggesting strong resource availability.",
      "The number of hospitals was proportionate to the number of patients, supporting healthcare accessibility.",
      "Average billing amounts varied significantly by insurance provider and medical condition."
    ],

    recommendations: [
      "Healthcare facilities should prioritize geriatric care services, including specialized units, wellness programs, and preventive care.",
      "Insurance plans should be reviewed and optimized to better support high-cost treatments.",
      "Facilities should use patient demographic trends to guide staffing, resource planning, and care delivery.",
      "Hospital administrators should monitor billing and admission patterns to improve cost-efficiency and patient care."
    ],

    charts: [
      {
        title: "Healthcare Performance Dashboard",
        image: "images/projects/healthcare_dashboard.avif",
        alt: "Power BI dashboard showing healthcare performance, patient demographics, billing, insurance, and medical condition trends"
      }
    ],

    impact:
      "The analysis helps healthcare administrators and decision-makers better understand patient needs, resource availability, billing trends, and opportunities for improving care quality and operational efficiency.",

    github: "https://github.com/patriciavalentine/HEALTHCARE-PERFORMANCE-ANALYSIS",
    live: ""
  },

  {
    id: "supermarket-sales",
    title: "Supermarket Sales Analysis",
    category: "Excel",
    featured: true,
    image: "images/projects/supermarket_main.avif",
    tools: ["Excel", "Pivot Tables", "Dashboarding", "Data Cleaning"],

    summary:
      "Analyzed supermarket sales across three branches to understand revenue performance, customer payment preferences, top-selling products, and sales trends.",

    overview:
      "This project used a supermarket sales dataset from Kaggle covering three branches over a three-month period. The analysis focused on branch performance, product line sales, customer payment behavior, revenue trends, and customer purchasing patterns.",

    objective:
      "The objective was to identify the key factors driving sales performance and uncover insights that could help the supermarket improve revenue, optimize branch operations, and align marketing strategies with customer preferences.",

    questions: [
      "Which branch generated the highest sales?",
      "Which payment method was most preferred by customers?",
      "Which product categories were the top sellers?",
      "What was the overall sales trend across the three months?",
      "How did customer demographics and product ratings relate to sales performance?"
    ],

    process: [
      "Loaded and prepared the supermarket sales dataset in Excel.",
      "Cleaned the data by checking spelling errors, removing empty rows, extra spaces, missing values, and duplicate records.",
      "Formatted date and currency fields to improve readability and consistency.",
      "Calculated key financial metrics including total revenue, cost of goods sold, and gross income.",
      "Created pivot tables to analyze branch performance, payment methods, product lines, customer demographics, and sales trends.",
      "Built an Excel dashboard with charts and slicers for interactive exploration."
    ],

    insights: [
      "Branch C in Naypyitaw was the highest-performing branch.",
      "E-wallets were the most preferred payment method among customers.",
      "Electronic accessories and food & beverages were among the top-selling product categories.",
      "Food & beverages received the highest customer ratings, suggesting strong customer satisfaction.",
      "January generated the highest revenue, while February recorded the lowest sales revenue."
    ],

    recommendations: [
      "Expand inventory for high-performing categories such as electronic accessories and food & beverages.",
      "Maintain strong quality standards in food & beverages to support customer satisfaction and loyalty.",
      "Use targeted promotions in February to address lower sales performance.",
      "Introduce seasonal offers, limited-time campaigns, or customer engagement events during slower months.",
      "Use payment preference insights to support smoother digital checkout experiences."
    ],

    charts: [
      {
        title: "Supermarket Sales Dashboard",
        image: "images/projects/supermarket_dashboard.avif",
        alt: "Excel dashboard showing supermarket sales by branch, product line, payment method, customer demographics, and sales trends"
      }
    ],

    impact:
      "The analysis helps supermarket management better understand branch performance, customer preferences, product demand, and seasonal sales trends, supporting improved inventory planning, marketing, and revenue growth.",

    github: "https://github.com/patriciavalentine/SUPERMARKET-SALES-ANALYSIS",
    live: ""
  },

  {
    id: "kcse-web-scraping",
    title: "KCSE Results Web Scraping Project",
    category: "Python",
    // featured: true,
    featured: false,
    image: "images/projects/webscrapping.avif",
    tools: [
      "Python",
      "Jupyter",
      "Pandas",
      "BeautifulSoup",
      "Requests",
      "CSV"
    ],

    summary:
      "Built a Python-based web scraping solution to automate the extraction, cleaning, and structuring of KCSE examination results data from a school website.",

    overview:
      "This project involved designing and implementing a web scraping workflow to extract KCSE examination results data from the official Moi Kapsowar Girls High School website. The extracted data was cleaned, structured, and exported into CSV format for easier analysis and reporting.",

    objective:
      "The objective was to automate the collection of KCSE results data, reduce manual effort, improve data accuracy, and prepare the dataset for further educational analysis and performance tracking.",

    questions: [
      "How can tabular KCSE data be extracted automatically from a website?",
      "How can inconsistent table structures be cleaned and standardized?",
      "How can extracted data be organized for future educational analysis?",
      "How can web scraping improve efficiency compared to manual data collection?"
    ],

    process: [
      "Used the Requests library to retrieve HTML content from the official school website.",
      "Parsed the webpage using BeautifulSoup to identify and isolate the KCSE results tables.",
      "Extracted the relevant rows and columns from the target tables.",
      "Defined appropriate column headers because the original tables lacked structured headers.",
      "Removed unnecessary rows and cleaned inconsistencies in the extracted data.",
      "Structured the cleaned data into Pandas DataFrames.",
      "Exported the final datasets into CSV files for future analysis and reporting."
    ],

    insights: [
      "Automated web scraping significantly reduced the time required for collecting KCSE data.",
      "The project demonstrated how unstructured HTML tables can be transformed into analysis-ready datasets.",
      "Data cleaning was essential because the source tables lacked proper headers and contained irrelevant rows.",
      "Structured CSV outputs improved accessibility and usability for future educational analysis."
    ],

    recommendations: [
      "Schools and educational institutions should standardize online result publishing formats to improve data accessibility.",
      "Automated scraping workflows can be expanded to collect and monitor educational performance data across multiple institutions.",
      "Additional validation checks can be added to improve reliability when websites change structure.",
      "The exported datasets can be integrated into dashboards or reporting systems for performance monitoring."
    ],

    charts: [
      {
        title: "KCSE Results Dataset Preview",
        image: "images/projects/webscrapping_snap.png",
        alt: "Structured KCSE examination results dataset extracted using Python web scraping"
      }
    ],

    impact:
      "The project streamlined the process of collecting KCSE examination results data, improved data accuracy, reduced manual effort, and prepared the information for future educational analysis and reporting.",

    github: "https://github.com/patriciavalentine/KCSE-RESULTS-WEB-SCRAPING",
    live: ""
  },

  {
    id: "loan-data-queries",
    title: "Loan Data Queries",
    category: "SQL",
    featured: true,
    image: "images/projects/loan_main.avif",
    tools: ["Google BigQuery", "SQL", "Looker Studio", "Google Cloud Storage"],

    summary:
      "Analyzed vehicle loan applicant data using BigQuery SQL and Looker Studio to identify loan risk patterns, applicant demographics, creditworthiness, and profitability opportunities.",

    overview:
      "This project explored a vehicle loan dataset containing applicant demographics, income, credit scores, loan amounts, loan tenure, loan-to-value ratios, credit history, customer type, and geographic information. SQL queries were written in BigQuery, and the findings were visualized in Looker Studio.",

    objective:
      "The objective was to uncover actionable insights that could help the company reduce lending risk, optimize loan products, improve customer retention, and support better data-driven lending decisions.",

    questions: [
      "Which cities have the highest number of loan applicants?",
      "What is the average credit score of all applicants?",
      "What is the relationship between income and credit score?",
      "What profit could the company earn annually assuming a 15% interest rate?",
      "Which applicants have high LTV ratios and multiple existing loans?",
      "Which applicants requested loan amounts more than four times their annual income?"
    ],

    process: [
      "Stored the vehicle loan dataset using Google Cloud Storage.",
      "Used BigQuery to run SQL queries on applicant demographics, credit scores, income, loan amounts, tenure, and LTV ratios.",
      "Analyzed high-risk applicant groups based on credit score, number of existing loans, and loan-to-value ratio.",
      "Calculated financial metrics including outstanding loan amounts, requested loan totals, EMI estimates, and projected profit.",
      "Built a Looker Studio dashboard to visualize regional loan trends, applicant profiles, risk indicators, and financial insights."
    ],

    insights: [
      "Applicant gender distribution was nearly balanced, showing broad product appeal across different customer groups.",
      "The average applicant age was 44 years, suggesting that the company mainly serves middle-aged customers in their prime earning years.",
      "Karnataka, Telangana, and Maharashtra had the highest applicant distribution, while Kolkata, New Delhi, and Hyderabad were the top cities.",
      "The average credit score was 582.95, indicating that many applicants had moderate or weak creditworthiness.",
      "A large group of applicants had credit scores below 500, representing a high-risk customer segment.",
      "The average LTV ratio was 71.64%, meaning most loans were not extremely high-risk, although loans above 80% LTV required closer monitoring.",
      "Existing customers requested ₹11.5 billion in loans, while new customers requested ₹18.1 billion.",
      "Assuming a 15% interest rate, the company could generate approximately ₹4.44 billion in annual profit."
    ],

    recommendations: [
      "Strengthen risk assessment for applicants with low credit scores and multiple existing loans.",
      "Increase marketing efforts in high-demand regions such as Karnataka, Telangana, Maharashtra, Kolkata, New Delhi, and Hyderabad.",
      "Create tailored loan products for high-income applicants and customers with strong repayment potential.",
      "Develop retention strategies for existing customers through loyalty offers and personalized loan products.",
      "Monitor loans with long tenures and high LTV ratios to reduce exposure to potential defaults."
    ],

    charts: [
      {
        title: "Vehicle Loan Dashboard",
        image: "images/projects/Vehicle Loan Dashboard_PNG.avif",
        alt: "Looker Studio dashboard showing vehicle loan applicant demographics, credit scores, loan amounts, LTV ratios, and regional trends"
      }
    ],

    impact:
      "The analysis provided a strategic foundation for improving lending decisions, managing high-risk applicants, optimizing loan products, strengthening customer retention, and supporting long-term growth in the vehicle financing market.",

    github: "https://github.com/patriciavalentine/LOAN-DATA-QUERIES",
    live: ""
  }
];

export const projectCategories = ["All", "Python", "SQL", "Power BI", "Excel", "BigQuery"];
