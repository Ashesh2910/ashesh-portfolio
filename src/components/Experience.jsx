import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const experiences = [
  {
    role: "Business Analyst Intern",
    company: "Dentsu Group",
    date: "Jun 2025 – Aug 2025",
    points: [
      "Tracked campaign KPIs across CTR, CPC, CPA, and ROAS.",
      "Built automated Excel + Google Sheets dashboards for reporting.",
      "Generated risk and performance insights for stakeholder reviews.",
      "Worked in an Agile environment with sprint-based delivery.",
    ],
  },
  {
    role: "Consultant & Social Media Intern",
    company: "Lotus AI",
    date: "Nov 2024 – Mar 2025",
    points: [
      "Analyzed engagement metrics to improve content strategy.",
      "Performed competitor analysis to identify growth opportunities.",
      "Supported investor pitch decks with data-backed insights.",
      "Optimized SEO and app content for user acquisition.",
    ],
  },
  {
    role: "Content Developer Intern",
    company: "Iris AI Innovations",
    date: "Mar 2024 – Sept 2024",
    points: [
      "Created SEO-focused content to improve organic visibility.",
      "Tracked web performance with Google Analytics reporting.",
      "Collaborated with UI/UX teams using Figma workflows.",
    ],
  },
];

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.8)}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-white/10 hover:border-white/30 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-white text-xl font-bold">{exp.role}</h3>
          <p className="text-gray-300 mt-1">{exp.company}</p>
        </div>

        <p className="text-gray-400 text-sm mt-3 sm:mt-0">
          {exp.date}
        </p>
      </div>

      <ul className="mt-5 space-y-2 text-gray-300 text-[15px] leading-relaxed list-disc pl-5">
        {exp.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      {/* Heading */}
      <motion.div variants={textVariant()} className="text-center">
        <p className="text-secondary text-[16px] uppercase tracking-wider">
          Experience
        </p>

        <h2 className="text-white font-black text-[40px] sm:text-[55px] mt-2">
          Internship Journey.
        </h2>
      </motion.div>

      {/* Timeline Cards */}
      <div className="mt-16 space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
