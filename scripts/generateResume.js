import { jsPDF } from "jspdf";

const generateResume = () => {
    const doc = new jsPDF();
    let yPos = 20;
    const lineHeight = 5;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - (margin * 2);

    // Helpers
    const sectionTitle = (title) => {
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text(title, margin, yPos);
        yPos += 8;
        doc.setLineWidth(0.5);
        doc.line(margin, yPos - 6, pageWidth - margin, yPos - 6);
    };

    const jobEntry = (title, company, date, bullets) => {
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text(title, margin, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(date, pageWidth - margin, yPos, { align: "right" });
        yPos += 5;
        doc.setFont("helvetica", "italic");
        doc.text(company, margin, yPos);
        yPos += 5;
        doc.setFont("helvetica", "normal");

        bullets.forEach(bullet => {
            const splitBullet = doc.splitTextToSize(`• ${bullet}`, contentWidth - 5);
            doc.text(splitBullet, margin + 5, yPos);
            yPos += (splitBullet.length * 4) + 2;
        });
        yPos += 3;
    };

    // Header
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("ASHESH SAMRAJYA", pageWidth / 2, yPos, { align: "center" });
    yPos += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("+91-7091912101 | archit.ashesh29@gmail.com | LinkedIn | Github | Streamlit", pageWidth / 2, yPos, { align: "center" });
    yPos += 15;

    // Summary
    sectionTitle("SUMMARY");
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const summary = "Data analytics professional with a strong quantitative and business focus, experienced in delivering end-to-end analytics solutions. Skilled in SQL, Python, Excel, Power BI. Proven ability to translate business requirements into insights.";
    const splitSummary = doc.splitTextToSize(summary, contentWidth);
    doc.text(splitSummary, margin, yPos);
    yPos += (splitSummary.length * 5) + 5;

    // Competencies
    sectionTitle("KEY COMPETENCIES");
    doc.setFontSize(10);
    doc.text("Analytics: SQL, Python, Excel, Power BI, EDA, KPI Development", margin, yPos);
    yPos += 5;
    doc.text("Business: Operational Analytics, Risk Analysis, Business Impact", margin, yPos);
    yPos += 5;
    doc.text("Collaboration: Stakeholder Engagement, Agile Execution, Storytelling", margin, yPos);
    yPos += 10;

    // Experience
    sectionTitle("PROFESSIONAL EXPERIENCE");

    jobEntry("Business Analyst Intern", "Dentsu Group | Pune", "June 2025 – Aug 2025", [
        "Supported campaign structuring & monitoring using Google/Meta Ads Manager.",
        "Analyzed historical data to identify trends & optimization gaps (CTR, CPC, ROAS).",
        "Automated stakeholder dashboards using Excel/Google Sheets for KPI tracking.",
        "Partnered with cross-functional teams in Agile for analytics-driven decisions."
    ]);

    jobEntry("Consultant & Social Media Intern", "Lotus AI | Remote", "Nov 2024 - Mar 2025", [
        "Analyze engagement metrics & content performance for social campaigns.",
        "Conducted market/competitor analysis for user acquisition strategies.",
        "Created an investor pitch deck emphasizing product value proposition.",
        "Developed SEO-optimized content to improve app visibility."
    ]);

    jobEntry("Content Developer Intern", "Iris AI Innovations | Remote", "Mar 2024 - Sept 2024", [
        "Led end-to-end content strategy for website and training modules.",
        "Wrote SEO-optimized content for course promotion and learning resources.",
        "Used Google Analytics to track performance and iterate strategy."
    ]);

    // Check page break for Projects
    if (yPos > 220) {
        doc.addPage();
        yPos = 20;
    }

    // Projects
    sectionTitle("PROJECTS");

    // Condensed Project List
    const projects = [
        "Credit Card Fraud Detection (Jan 2026): Python, SQL, ML. Built end-to-end risk monitoring system with Random Forest & Streamlit.",
        "Enterprise Data & Governance (Jan 2026): Excel, Power BI. Analyzed 60+ records, built executive dashboards for risk/issue tracking.",
        "Zomato Dashboard (May-June 2025): Power BI. Dynamic dashboard for sales volume, frequency, and customer ratings.",
        "Modern Data Warehouse (June 2025): SQL Server. Designed Medallion Architecture data warehouse with ETL pipelines."
    ];

    projects.forEach(proj => {
        const splitProj = doc.splitTextToSize(`• ${proj}`, contentWidth);
        doc.text(splitProj, margin, yPos);
        yPos += (splitProj.length * 5) + 3;
    });

    yPos += 5;

    // Education
    sectionTitle("EDUCATION");
    doc.setFont("helvetica", "bold");
    doc.text("BBA | Doon Business School", margin, yPos);
    doc.setFont("helvetica", "normal");
    doc.text("2023-2026", pageWidth - margin, yPos, { align: "right" });
    yPos += 5;
    doc.text("Intermediate | Bihar Board (2019)", margin, yPos);
    yPos += 5;
    doc.text("Matriculation | CBSE (2017)", margin, yPos);
    yPos += 10;

    // Certifications
    sectionTitle("CERTIFICATIONS");
    const certs = [
        "Tata GenAI Powered Data Analytics", "Deloitte Australia Data Analytics",
        "J.P. Morgan Quantitative Research", "Citi Markets Quantitative Analysis",
        "Accenture Strategy Consulting", "IBM Data Visualization with Excel & Cognos"
    ];

    certs.forEach(c => {
        doc.text(`• ${c}`, margin, yPos);
        yPos += 5;
    });

    // Save
    doc.save("public/resume.pdf");
};

generateResume();
console.log("Resume generated at public/resume.pdf");
