import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-6xl mx-auto text-center"
    >
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-[16px] uppercase tracking-wider">
          About
        </p>

        <h2 className="text-white font-black text-[40px] sm:text-[55px] mt-2">
          Turning data into decisions.
        </h2>
      </motion.div>

      {/* Minimal Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-gray-300 text-[17px] sm:text-[19px] leading-relaxed max-w-3xl mx-auto"
      >
        I’m a Data Analyst focused on risk analytics, fraud monitoring, and KPI
        dashboards. I work with SQL, Python, Power BI, and machine learning to
        build insights that help teams move faster and smarter.
      </motion.p>

      {/* Highlight Cards */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.8)}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
        >
          <h3 className="text-white font-bold text-xl">
            Risk Analytics
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Fraud detection, monitoring, explainable models.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.8)}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
        >
          <h3 className="text-white font-bold text-xl">
            Dashboard Reporting
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            KPI tracking in Power BI, Excel, Tableau.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.6, 0.8)}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
        >
          <h3 className="text-white font-bold text-xl">
            Business Insights
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Data-driven decisions with clean storytelling.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
