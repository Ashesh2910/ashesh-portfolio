import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeIn, textVariant } from "../utils/motion";
import { FaTimes } from "react-icons/fa";

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.05, 0.75)}
      className="w-36 h-36 sm:w-40 sm:h-40"
    >
      <motion.div
        className="w-full h-full bg-[#101010] rounded-2xl border border-white/5 relative group cursor-pointer overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:bg-[#151030] hover:shadow-lg hover:shadow-purple-500/10"
      >
        {/* Default State: Icon & Name */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 transition-all duration-300 group-hover:opacity-0 group-hover:scale-75 group-hover:translate-y-4">
          <Icon size={36} color={skill.color} />
          <p className="text-[14px] text-gray-400 font-medium text-center px-1 transition-colors">{skill.name}</p>
        </div>

        {/* Hover State: Description */}
        <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
          <p
            className="text-[12px] text-center leading-relaxed font-semibold"
            style={{ color: skill.color }}
          >
            {skill.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CertFlipCard = ({ cert }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full h-full relative group perspective-1000">
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face - Image */}
        <div
          className="absolute inset-0 backface-hidden bg-[#101010] rounded-2xl border border-white/10 overflow-hidden flex flex-col items-center justify-center p-4 shadow-2xl"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex-1 w-full flex items-center justify-center overflow-hidden mb-4">
            <img
              src={cert.image}
              alt={cert.name}
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setIsFlipped(true); }}
            className="group px-6 py-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient-flow text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 z-10"
          >
            <span>View Description</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Back Face - Details */}
        <div
          className="absolute inset-0 backface-hidden bg-[#151030] rounded-2xl border border-purple-500/30 p-8 overflow-y-auto shadow-2xl flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <h3 className="text-white text-2xl font-bold mb-2 border-b border-white/10 pb-4 sticky top-0 bg-[#151030] z-10">{cert.name}</h3>

            <div className="flex items-center gap-3 text-gray-400 text-sm mb-6 mt-4">
              {cert.issuer && <span className="bg-white/5 px-3 py-1 rounded-full text-purple-300 border border-purple-500/20">{cert.issuer}</span>}
              {cert.date && <span className="flex items-center gap-1">📅 {cert.date}</span>}
            </div>

            {cert.points && cert.points.length > 0 ? (
              <div className="space-y-4 text-left">
                <h4 className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-purple-500 rounded-full"></span>
                  Key Competencies
                </h4>
                <ul className="list-none space-y-3">
                  {cert.points.map((point, i) => (
                    <li key={i} className="text-gray-300 text-[15px] leading-relaxed pl-4 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors bg-white/5 p-3 rounded-r-lg">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-40 text-gray-500 italic">
                <p>No additional details available.</p>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-center pt-4 border-t border-white/5">
            <button
              onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
              className="group px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-full font-semibold transition-all flex items-center gap-2"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>View Certificate</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative z-0">
      <motion.div variants={textVariant()}>
        <h2 className={`text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-tighter`}>
          Skills.
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-wrap gap-6 justify-center md:justify-start">
        {portfolioData.skills.list.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>

      {/* Certifications Section */}
      <motion.div variants={textVariant()} className="mt-24">
        <h2 className={`text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-tighter`}>
          Certifications.
        </h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioData.certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className="bg-[#101010] p-6 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all hover:bg-[#151030] cursor-pointer group relative"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 text-sm">✓</span>
              <h3 className="text-white text-[15px] font-bold leading-tight group-hover:text-purple-400 transition-colors">{cert.name}</h3>
            </div>
            <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Click to view certificate</p>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            {/* Modal Container / Scene */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-[16/9] perspective-1000"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 z-50 p-2 bg-white/10 hover:bg-red-500/80 rounded-full text-white transition-colors"
                title="Close"
              >
                <FaTimes size={20} />
              </button>

              {/* Flip Card */}
              <CertFlipCard cert={selectedCert} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Skills;
