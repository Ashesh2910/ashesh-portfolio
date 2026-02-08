import churnDashboard from "../assets/churn-dashboard.png";

import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaFileExcel,
  FaTable,
  FaCode,
  FaBrain,
  FaServer,
  FaLayerGroup,
  FaSearch,
  FaChartLine,
  FaGraduationCap,
  FaRobot,
  FaTasks,
  FaChessKnight,
  FaFigma,
  FaFilePowerpoint,
} from "react-icons/fa";
import { SiTableau } from "react-icons/si";
import CanvaIcon from "../components/icons/CanvaIcon";

export const portfolioData = {
  name: "Ashesh Samrajya",
  role: "Data Analyst | Risk Analytics",
  email: "archit.ashesh29@gmail.com",
  phone: "+91-7091912101",
  socialLinks: {
    github: "https://github.com/Ashesh2910",
    linkedin: "https://www.linkedin.com/in/ashesh-samrajya-b5174b1ab/",
    streamlit: "#",
  },

  // Added for Contact Component compatibility
  contact: {
    email: "archit.ashesh29@gmail.com",
    github: "https://github.com/Ashesh2910",
    linkedin: "https://www.linkedin.com/in/ashesh-samrajya-b5174b1ab/",
  },

  about: {
    title: "Summary.",
    content:
      "Data analytics professional with a strong quantitative and business focus, experienced in delivering end-to-end analytics solutions that support operational decision-making and performance management. Skilled in analyzing complex datasets, developing KPIs, and producing executive reporting using SQL, Python, Excel, and visualization tools. Proven ability to work independently and collaboratively to translate business requirements into data-driven insights.",
  },

  experience: [
    {
      title: "Business Analyst Intern",
      company_name: "Dentsu Group | Pune",
      icon: FaChartLine,
      iconBg: "#383E56",
      date: "June 2025 – Aug 2025",
      points: [
        "Supported campaign structuring, performance monitoring, and compliance reviews using Google Ads Manager and Meta Ads Manager.",
        "Analyzed historical campaign performance data to identify trends, optimization opportunities, and efficiency gaps across key metrics including CTR, CPC, CPA, and ROAS.",
        "Developed and automated stakeholder dashboards using Excel and Google Sheets to track KPIs and improve reporting efficiency.",
        "Partnered with cross-functional teams in an Agile environment to support digital marketing operations and analytics-driven decision-making.",
        "Prepared analytical reports and communication materials to ensure clear information flow between technical teams and business stakeholders.",
        "Contributed to knowledge transfer documentation, sprint reviews, and project handovers to ensure continuity and process efficiency.",
      ],
    },
    {
      title: "Consultant & Social Media Intern",
      company_name: "Lotus AI | Remote",
      icon: FaBrain,
      iconBg: "#E6DEDD",
      date: "Nov 2024 - Mar 2025",
      points: [
        "Supported social media campaign planning and execution by analyzing engagement metrics and content performance.",
        "Conducted market and competitor analysis to identify user acquisition opportunities and inform growth strategies.",
        "Created an investor pitch deck outlining the product value proposition and growth potential.",
        "Developed SEO-optimized app store and in-app content to improve visibility, discoverability, and user engagement.",
        "Enhanced brand presence through targeted messaging, content optimization, and data-informed content strategies.",
      ],
    },
    {
      title: "Content Developer Intern",
      company_name: "Iris AI Innovations | Remote",
      icon: FaCode,
      iconBg: "#383E56",
      date: "Mar 2024 - Sept 2024",
      points: [
        "Led end-to-end content strategy for website pages, blog posts, and training modules to support user engagement and organic growth.",
        "Wrote and edited SEO-optimized content tailored for course promotion, platform information, and learning resources.",
        "Simplified complex topics through structured storytelling to improve accessibility and readability for diverse audiences.",
        "Collaborated closely with UI/UX designers using Figma to align content structure with layout, typography, and user experience goals.",
        "Used Google Analytics to track content performance, user engagement, and organic reach, iterating content strategy based on data-driven insights.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Business Administration (BBA)",
      school: "Doon Business School, Dehradun",
      date: "2023-2026",
      icon: FaGraduationCap,
    },
    {
      degree: "Intermediate",
      school: "Bihar Board of Open Schooling & Examination",
      date: "2019",
      icon: FaGraduationCap,
    },
    {
      degree: "Matriculation",
      school: "Kendriya Vidyalaya, Varanasi (CBSE)",
      date: "2017",
      icon: FaGraduationCap,
    }
  ],

  projects: [
    {
      title: "Credit Card Fraud Detection",
      subtitle: "Python, SQL, Streamlit, ML",
      description:
        "Designed an end-to-end fraud risk monitoring system. Developed a Random Forest model with SHAP explainability for transaction-level decisioning. Built a Streamlit KPI dashboard to visualize risk tiering (Low/Medium/High) and optimized thresholds to balance fraud loss vs. operational costs.",
      tags: ["Python", "SQL", "Scikit-learn", "SHAP", "Streamlit"],
      image: "",
      githubUrl: "https://github.com/Ashesh2910/Credit-Card-Fraud-Detection",
    },
    {
      title: "Customer Churn Analysis",
      subtitle: "Excel & Power BI",
      description:
        "Analyzed customer data to identify churn risks and trends. Built executive dashboards tracking key retention KPIs. Implemented predictive risk scoring to prioritize retention efforts and improve customer lifetime value.",
      tags: ["Power BI", "Excel", "Data Governance", "SQL"],
      image: churnDashboard,
      githubUrl: "https://github.com/Ashesh2910/Customer-Churn-Analysis-Prediction",
    },
    {
      title: "Zomato Business Dashboard",
      subtitle: "Power BI",
      description:
        "Built a dynamic dashboard showcasing sales volume, order frequency, ratings, and demographics. Implemented drill-downs by city and slicers for food categories to enable targeted operational decisions and trend identification.",
      tags: ["Power BI", "Data Visualization", "Analytics"],
      image: "",
      githubUrl: "https://github.com/Ashesh2910/Zomato-Sales-Analysis",
    },
    {
      title: "Modern Data Warehouse",
      subtitle: "SQL Server (SSMS)",
      description:
        "Designed a scalable Medallion Architecture (Bronze, Silver, Gold). Developed ETL pipelines to transform ERP/CRM data into star schemas. Optimized queries via indexing and enforced referential integrity for robust analytics workflows.",
      tags: ["SQL Server", "ETL", "Data Modeling", "SSMS"],
      image: "",
      githubUrl: "https://github.com/Ashesh2910/SQL--Data---Warehouse_Project",
    },
    {
      title: "Airbnb Data Analysis",
      subtitle: "Python",
      description:
        "Performed EDA on listings to study pricing and availability. Cleaned datasets and used Matplotlib/Seaborn to visualize price variances by location and seasonal trends, generating insights for optimal pricing strategies.",
      tags: ["Python", "Matplotlib", "Seaborn", "EDA"],
      image: "",
      githubUrl: "https://github.com/Ashesh2910/Airbnb-Data_Analysis",
    },
    {
      title: "Instamart Sales Analysis",
      subtitle: "Excel",
      description:
        "Built interactive dashboards using Pivot Tables/Slicers. Cleaned raw sales data to identify top products and seasonal demand, delivering actionable insights for inventory management and marketing.",
      tags: ["Excel", "Pivot Tables", "Inventory Analysis"],
      image: "",
      githubUrl: "https://github.com/Ashesh2910/Python-Cheat-Sheet",
    },
  ],

  skills: {
    list: [
      {
        name: "SQL",
        icon: FaDatabase,
        color: "#00BCF2",
        description: "Optimizing complex queries to extract actionable insights from massive datasets, ensuring data integrity."
      },
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
        description: "Building automated data pipelines and predictive models to solve business problems and reduce manual effort."
      },
      {
        name: "Excel",
        icon: FaFileExcel,
        color: "#217346",
        description: "Creating dynamic dashboards and financial models that turn raw numbers into clear strategic narratives."
      },
      {
        name: "Power BI",
        icon: FaChartBar,
        color: "#F2C811",
        description: "Designing interactive, executive-grade dashboards that empower stakeholders to make data-driven decisions."
      },
      {
        name: "Tableau",
        icon: SiTableau,
        color: "#E97627",
        description: "Visualizing complex trends and patterns, making data accessible and understandable for non-technical audiences."
      },
      {
        name: "Streamlit",
        icon: FaServer,
        color: "#FF4B4B",
        description: "Rapidly prototyping and deploying data apps to bridge the gap between analysis and end-user tools."
      },
      {
        name: "Risk Analytics",
        icon: FaLayerGroup,
        color: "#F7931E",
        description: "Quantifying operational and credit risks to minimize losses and optimize decision thresholds."
      },
      {
        name: "EDA",
        icon: FaSearch,
        color: "#4285F4",
        description: "Uncovering hidden patterns and outliers in data to provide the foundational 'why' behind business trends."
      },
      {
        name: "Machine Learning",
        icon: FaRobot,
        color: "#FF9900",
        description: "Developing predictive models (Random Forest, Regression) to forecast outcomes and classify risks."
      },
      {
        name: "Google Analytics",
        icon: FaChartLine,
        color: "#E37400",
        description: "Tracking user behavior and campaign performance to optimize digital marketing ROI and conversion rates."
      },
      {
        name: "Figma",
        icon: FaFigma,
        color: "#F24E1E",
        description: "Designing intuitive UI/UX for data products, ensuring insights are presented with clarity and appeal."
      },
      {
        name: "Strategic Analysis",
        icon: FaChessKnight,
        color: "#607D8B",
        description: "Translating technical findings into business strategy, aligning data initiatives with organizational goals."
      },
      {
        name: "Agile",
        icon: FaTasks,
        color: "#4CAF50",
        description: "Managing analytics projects in sprints, ensuring rapid delivery of value and adaptability to change."
      },
      {
        name: "PowerPoint",
        icon: FaFilePowerpoint,
        color: "#D04423",
        description: "Crafting compelling data stories and executive presentations that drive business action."
      },
      {
        name: "Canva",
        icon: CanvaIcon,
        color: "#00C4CC",
        description: "Designing professional graphics and marketing assets to enhance brand visual communication."
      },
    ]
  },

  certifications: [
    {
      name: "Tata GenAI Powered Data Analytics",
      image: "/certificates/TATA GenAI Powered Data Analytics Job Simulation.jpg",
      date: "June 2025",
      issuer: "Forage",
      points: [
        "Completed a job simulation involving AI-powered data analytics and strategy development for the Financial Services team at Tata iQ.",
        "Conducted exploratory data analysis (EDA) using GenAI tools to assess data quality, identify risk indicators, and structure insights for predictive modeling.",
        "Proposed and justified an initial no-code predictive modeling framework to assess customer delinquency risk, leveraging GenAI for structured model logic and evaluation criteria.",
        "Designed an AI-driven collections strategy leveraging agentic AI and automation, incorporating ethical AI principles, regulatory compliance, and scalable implementation frameworks."
      ]
    },
    {
      name: "Tata Data Visualisation & Insights",
      image: "/certificates/Tata Data Visualisation Empowering Business with Effective Insights Job Simulation.jpg",
      date: "November 2025",
      issuer: "Forage",
      points: [
        "Completed a simulation involving creating data visualizations for Tata Consultancy Services",
        "Prepared questions for a meeting with client senior leadership",
        "Created visuals for data analysis to help executives with effective decision making"
      ]
    },
    {
      name: "Tata ESG Strategy",
      image: "/certificates/TATA ESG Job Simulation.jpg",
      date: "July 2025",
      issuer: "Forage",
      points: [
        "Completed a simulation involving sustainability consulting for Tata Consultancy Services",
        "Assessed a client's sustainability needs",
        "Completed a comparative analysis of potential TCS solutions",
        "Developed a fitment matrix to present proposed solutions to address the client's needs"
      ]
    },
    {
      name: "Accenture Strategy Consulting",
      image: "/certificates/accenture Strategy Consulting Job Simulation.jpg",
      date: "June 2025",
      issuer: "Forage",
      points: [
        "Completed a job simulation involving a hypothetical Government client on how to improve a grant application process.",
        "Reviewed a client brief and identified the most crucial priorities for the project.",
        "Analysed varied data sources to make decisions about web page changes.",
        "Managed a project issue with the client and helped to prioritise long term initiatives."
      ]
    },
    {
      name: "Deloitte Data Analytics",
      image: "/certificates/Deloitte. Data Analytics Job Simulation.jpg",
      date: "June 2025",
      issuer: "Forage",
      points: [
        "Completed a Deloitte job simulation involving data analysis and forensic technology",
        "Created a data dashboard using Tableau",
        "Used Excel to classify data and draw business conclusions"
      ]
    },
    {
      name: "J.P. Morgan Quantitative Research",
      image: "/certificates/JPMORGAN CHASE & Co. Quantitative Research Job Simulation.jpg",
      date: "July 2025",
      issuer: "Forage",
      points: [
        "Completed a simulation focused on quantitative research methods",
        "Analyzed a book of loans to estimate a customer's probability of default",
        "Used dynamic programming to convert FICO scores into categorical data to predict defaults"
      ]
    },
    {
      name: "Citi Markets Quantitative Analysis (MQA)",
      image: "/certificates/CITI Markets Quantitative Analysis (MQA) Job Simulation.jpg",
      date: "June 2025",
      issuer: "Forage",
      points: []
    },
    {
      name: "BCG X Data Science",
      image: "/certificates/BCG X Data Science Job Simulation.jpg",
      date: "June 2025",
      issuer: "Forage",
      points: [
        "Completed a customer churn analysis simulation for XYZ Analytics, demonstrating advanced data analytics skills, identifying essential client data and outlining a strategic investigation approach.",
        "Conducted efficient data analysis using Python, including Pandas and NumPy. Employed data visualization techniques for insightful trend interpretation.",
        "Completed the engineering and optimization of a random forest model, achieving an 50% recall rate in predicting customer churn.",
        "Completed a concise executive summary for the team, delivering actionable insights for informed decision-making based on the analysis."
      ]
    },
    {
      name: "Lloyds Banking Group Data Science",
      image: "/certificates/LLOYD BANKING GROUPS Data science Job Simulation.jpg",
      date: "June 2025",
      issuer: "Forage",
      points: [
        "Completed a job simulation involving customer churn prediction for the Data Science & Analytics team at Lloyds Banking Group",
        "Developed and implemented a predictive model using random forest and other machine learning algorithms, achieving an ROC-AUC score of 0.82",
        "Conducted advanced data preprocessing, including handling missing values, encoding categorical variables, and feature scaling, utilising Python libraries such as pandas, scikit-learn, and matplotlib",
        "Performed comprehensive model evaluation and tuning, optimising hyperparameters with GridSearchCV, and applied feature importance analysis to derive actionable business insights"
      ]
    },
    {
      name: "Quantium Data Analytics",
      image: "/certificates/Quantium Data Analytics Job Simulation.jpg",
      date: "June 2025",
      issuer: "Forage",
      points: [
        "Completed a job simulation focused on Data Analytics and Commercial Insights for the data science team.",
        "Developed expertise in data preparation and customer analytics, utilizing transaction datasets to extract valuable insights and deliver data-driven commercial recommendations.",
        "Extended analytical capabilities to identify benchmark stores for conducting uplift testing on trial store layouts, enabling evidence-based decision-making.",
        "Leveraged acquired data analytics and insights from previous tasks to create comprehensive reports for the Category Manager, facilitating informed strategic decisions and enhancing commercial applications."
      ]
    },
    {
      name: "MongoDB for SQL Experts",
      image: "/certificates/MongoDB for SQL Experts.jpg",
      date: "2024",
      issuer: "MongoDB",
      points: []
    },
    {
      name: "Six Sigma White Belt",
      image: "/certificates/Six Sigma White Belt.jpg",
      date: "2024",
      issuer: "Six Sigma Council",
      points: []
    },
  ],

  freelance: [
    {
      title: "Ayurvedic Clinic Brochure",
      subtitle: "Tri-fold Design",
      description: "A calming, nature-inspired brochure design for an Ayurvedic clinic, featuring herbal motifs and a clean layout.",
      image: "/templates/uploaded_media_0_1770379209609.jpg",
    },
    {
      title: "Spa & Therapy Menu",
      subtitle: "Service Menu",
      description: "Elegant and soothing service menu design for a wellness center, highlighting therapeutic treatments.",
      image: "/templates/uploaded_media_1_1770379209609.jpg",
    },
    {
      title: "Mocktail Menu",
      subtitle: "Dark Theme",
      description: "Vibrant and modern mocktail menu with a dark background to make the drink colors pop.",
      image: "/templates/uploaded_media_2_1770379209609.jpg",
    },
    {
      title: "Italian Cafe Menu",
      subtitle: "Dark Theme",
      description: "Sophisticated dark-themed menu for an Italian cafe, focusing on premium typography and imagery.",
      image: "/templates/uploaded_media_3_1770379209609.jpg",
    },
    {
      title: "Healthy Salad Menu",
      subtitle: "Fresh Theme",
      description: "Bright and fresh layout for a salad bar, utilizing green tones to emphasize health and organic ingredients.",
      image: "/templates/uploaded_media_4_1770379209609.jpg",
    },
    {
      title: "Signature Mocktail Menu",
      subtitle: "Dark & Elegant",
      description: "A premium dark-themed menu design for a cocktail bar, focusing on high-contrast typography and drink photography.",
      image: "/templates/media__1770389004829.jpg",
    },
    {
      title: "Coffee Shop Branding",
      subtitle: "Spill The Bean",
      description: "Warm and inviting branding collateral for a coffee shop, featuring custom typography and a cozy aesthetic.",
      image: "/templates/media__1770389004835.jpg",
    },
    {
      title: "Milkshake Menu",
      subtitle: "Fun & Playful",
      description: "A colorful and illustrated menu design for a milkshake bar, targeting a youthful audience with vibrant visuals.",
      image: "/templates/media__1770389004839.jpg",
    },
    {
      title: "Noodle Bar Menu",
      subtitle: "Asian Fusion",
      description: "Modern and bold menu layout for an Asian noodle bar, combining traditional elements with a contemporary dark style.",
      image: "/templates/media__1770389004840.jpg",
    },
    {
      title: "Restaurant Promotional Flyer",
      subtitle: "Marketing Material",
      description: "Eye-catching promotional flyer design for restaurant specials, optimized for print and social media distribution.",
      image: "/templates/media__1770389004894.jpg",
    },
    {
      title: "Healthy Breakfast Menu",
      subtitle: "Morning Fresh",
      description: "A clean and appetizing high-contrast breakfast menu design highlighting healthy options like eggs and toast.",
      image: "/templates/media__1770389276350.jpg",
    },
    {
      title: "Chinese Cuisine Menu",
      subtitle: "Red & Gold Theme",
      description: "Traditional yet modern red and gold themed menu for a Chinese restaurant, featuring bold typography and food illustrations.",
      image: "/templates/media__1770389276354.jpg",
    },
    {
      title: "Maggie Station Menu",
      subtitle: "Rustic Wood Style",
      description: "A cozy, rustic wooden board style menu design for a Maggie noodle station, giving a warm and authentic vibe.",
      image: "/templates/media__1770389276355.jpg",
    },
    {
      title: "Sandwich Bar Menu",
      subtitle: "Blackboard Board",
      description: "Casual and trendy blackboard-style menu design for a sandwich shop, utilizing chalk textures and fun graphics.",
      image: "/templates/media__1770389276466.jpg",
    },
    {
      title: "Burger & Wraps Flyer",
      subtitle: "Dark Fire Theme",
      description: "Intense and bold dark-themed burger menu featuring fire effects to emphasize the 'grilled' and 'spicy' flavors.",
      image: "/templates/media__1770389276469.jpg",
    },
  ],
  presentations: [
    {
      title: "Que Universe - Pitch Deck",
      subtitle: "Slide 1: Hero & Vision",
      description: "Introduction slide featuring brand vision and hero imagery.",
      image: "/presentations/media__1770391530144.jpg",
    },
    {
      title: "Que Universe - Story",
      subtitle: "Slide 2: Brand Story",
      description: "The origin story and mission statement of Que Universe.",
      image: "/presentations/media__1770391530381.jpg",
    },
    {
      title: "Que Universe - Partnership",
      subtitle: "Slide 3: Shikhar Dhawan",
      description: "Brand partnership details featuring Shikhar Dhawan.",
      image: "/presentations/media__1770391530420.jpg",
    },
    {
      title: "Que Universe - Journey",
      subtitle: "Slide 4: Evolution",
      description: "Timeline of the brand's evolutionary journey.",
      image: "/presentations/media__1770391530423.jpg",
    },
    {
      title: "Que Universe - Inception",
      subtitle: "Slide 5: Vision",
      description: "Core belief and inception vision statement.",
      image: "/presentations/media__1770391530424.jpg",
    },
    {
      title: "Que Universe - Commitment",
      subtitle: "Slide 6: Craftsmanship",
      description: "Details on the commitment to craft and quality.",
      image: "/presentations/media__1770391597037.jpg",
    },
    {
      title: "Que Universe - Culture",
      subtitle: "Slide 7: Redefining",
      description: "Redefining the sunglass culture with modern aesthetics.",
      image: "/presentations/media__1770391597105.jpg",
    },
    {
      title: "Que Universe - Lifestyle",
      subtitle: "Slide 8: Statement",
      description: "Establishing the brand as a lifestyle statement.",
      image: "/presentations/media__1770391597153.jpg",
    },
  ],
  cocaCola: [
    {
      title: "Coca-Cola",
      subtitle: "Pitch Deck",
      description: "Strategic pitch deck for Coca-Cola, focusing on brand evolution and digital engagement.",
      image: "/presentations/media__1770442029668.png",
    },
  ],
  vizn: [
    {
      title: "Vizn Ventures",
      subtitle: "Fund One | Info Pack",
      description: "Investment fund deck detailing the vision, creator economy focus, and portfolio strategy for Vizn Ventures.",
      image: "/presentations/media__1770442120059.jpg",
    },
  ],
  nike: [
    {
      title: "Nike",
      subtitle: "Pitch Deck",
      description: "A dynamic pitch deck for Nike, focusing on women as a powerful consumer group and unlocking new engagement opportunities.",
      image: "/presentations/media__1770442398124.png",
    },
  ],
};
