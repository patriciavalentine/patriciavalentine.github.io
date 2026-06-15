export const profile = {
  name: "Patricia Valentine",

  // To adjust the branding.
  // role appears in the navbar/footer. professionalTitle appears in the hero and resume areas.
  role: "The Analyst",
  professionalTitle: "Data / BI Analyst",

  location: "Nairobi, Kenya",
  tagline: "Turning raw data into clear stories, practical insights, and decision-ready dashboards.",
  intro:
    // "I combine analytics, visualization, and business thinking to uncover patterns, explain performance, and help teams make smarter decisions.",
    "I use analytics, visualization, and strategic thinking to turn data into clear insights that help businesses understand performance and make smarter decisons.",
  email: "patriciavalentinedanga@gmail.com",
  github: "https://github.com/patriciavalentine",
  linkedin: "https://www.linkedin.com/in/patricia-valentine-danga",
  oldPortfolio: "https://valepatricia16.wixsite.com/patricia-valentine",

  //  The number will be visible in the site code/link.
  whatsappNumber: "254700620032",
  whatsappPrefill:
    "Hi Patricia, I viewed your analytics portfolio and would like to connect about a data project.",

  // Images as put in public/images/profile/.
  photos: {
    // hero: "images/profile/profile-hero.svg",
    hero: "images/profile/profile-hero.jpg",
    about: "images/profile/profile-about.jpg",
    contact: "images/profile/profile-contact.jpg"
  },

  // Put your PDF at public/resume.pdf. This front-end gate is elegant, but not a true security wall.
  resume: {
    // file: "resume-placeholder.html",
    file: "resume.pdf",
    formEndpoint: "https://formspree.io/f/mdajkaeo", // 
    note: [
      "A detailed overview of my professional experience, academic background, technical skills, and hands-on projects.",
      " It also highlights how I've worked with the tools and technologies showcased.",
      " It covers the problems I've solved through real projects and practical applications of data and technology."
    ]
  },

  // about: [
  //   "My journey into analytics started with a strong love for mathematics and problem-solving. Studying Applied Mathematics helped me build a solid quantitative foundation and sharpened how I approach complex questions.",
  //   "Today, I use data cleaning, querying, analysis, visualization, and storytelling to transform raw information into insights that support smarter decisions.",
  //   "I enjoy working across the full data lifecycle: extracting data, preparing it, exploring patterns, building dashboards, and turning findings into clear recommendations."
  // ],
  about: {
    kicker: "ABOUT ME",
    title: "My Path Into Analytics.",
    preview: [
      // "My journey into analytics started with a strong love for mathematics, problem-solving, and making sense of complex information. Studying Applied Mathematics helped me build a solid quantitative foundation and sharpened how I approach patterns, questions, and business challenges.",
      //  "Today, I use data cleaning, querying, analysis, visualization, and storytelling to transform raw information into insights that support smarter decisions.",
      // "I enjoy working across the full data lifecycle: extracting data, preparing it, exploring trends, building dashboards, and turning findings into clear recommendations. My goal is not just to create visuals, but to design dashboards that help people understand what is happening, why it matters, and what action they can take next."
      "My journey into analytics started with something very simple: I've always loved Mathematics and solving problems. Ever since I was young, I naturally enjoyed working with numbers, identifying patterns, and making sense of information.",
      "Studying Applied Mathematics strengthened that passion and gave me a solid analytical foundation that continues to shape how I approach data, business challenges, and decision-making today.",
      "Over time, that interest grew into a passion for analytics and using data to create meaningful impact. I enjoy transforming raw, unstructured information into insights that help businesses understand performance, identify opportunities, and make smarter decisions. From data cleaning and querying to analysis, visualization, and storytelling, I enjoy every stage of the data process."
    ],
    more: [
      // "I am especially interested in business intelligence, performance reporting, dashboard automation, and data storytelling. I like combining analytical thinking with clean visual design so that insights are easy to understand for both technical and non-technical audiences.",
      // "Whether I am working with Excel, SQL, Power BI, Tableau, or Python, I focus on clarity, accuracy, and usefulness. I believe strong analytics should make decision-making easier, faster, and more confident."
      "One thing I particularly enjoy is building dashboards and reports that are not only visually clean, but also practical and easy to understand. To me, a good dashboard should do more than present numbers - it should clearly communicate what is happening, why it matters, and what actions should be taken next.",
      "I enjoy combining analytical thinking with thoughtful design to make insights accessible to both technical & non-technical audiences.",
      "I am especially interested in business intelligence, perfomance reporting, dashboard automation, and data storytelling. I enjoy working with tools such as Excel, SQL, Power BI, Tableau, Python and GCP platforms to turn data into solutions that are clear, accurate and useful.",
      "I'm also very interested in improving processes and automating repetitive workflows, making systems more efficient and reducing manual effort so that teams can focus more on decision-making and value creation.",
      "At the core of my work is a simple goal: to use data not only to make decision-making easier, faster, more confident, but also to continuosly improve how work gets done through smarter processes and automation - for the people and businesses I work with."
    ]
  },


  highlights: [
    "Applied Mathematics background",
    "Python, SQL, Excel, Power BI, Tableau, Looker",
    "End-to-end analytics projects",
    "Dashboard design and storytelling",
    "Process Automation"
  ],
  
  stats: [
    { value: "15+", label: "Analytics Projects" },
    { value: "6+", label: "Visualization Tools" },
    { value: "5", label: "Core Analysis Areas" },
    { value: "100%", label: "Insight-Focused" }
  ]
};

export const education = [
  {
    // period: "2017 - 2021",
    period: "2021",
    title: "Bachelor of Science in Applied Mathematics",
    place: "Kenyatta University",
    details:
      "Built a strong foundation in mathematical modeling, statistical analysis, numerical methods, problem-solving, and quantitative reasoning."
  }
];

export const certifications = [
  "IBM Data Analyst Professional Certificate",
  "Google Data Analysis with R Programming Certificate",
  "Microsoft Data Analysis and Visualization with Power BI Certificate",
  "UC Davis Fundamentals of Visualization with Tableau",
  "Google Cloud Data Analytics Professional Certificate",
  "Financial Modeling & Valuation Analysis training"
];
