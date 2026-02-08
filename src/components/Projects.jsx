import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  title,
  subtitle,
  description,
  tags,
  image,
  githubUrl,
}) => {
  const safeGithubUrl = githubUrl || "https://github.com/Ashesh2910";

  const handleGithubClick = (e) => {
    e.stopPropagation();
    window.open(safeGithubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-6 rounded-3xl sm:w-[380px] w-full hover:border-purple-400/30 transition-all duration-300 h-full flex flex-col shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-purple-900/20'
      >
        <div className='relative w-full h-[220px] overflow-hidden rounded-2xl'>
          <img
            src={image || "/src/assets/code-card.png"}
            alt={title}
            className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-500'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={handleGithubClick}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/10 hover:bg-white/20 transition-colors z-20 pointer-events-auto shadow-md'
              title="View Code"
            >
              <Github className='w-5 h-5 object-contain text-white' />
            </div>
          </div>
        </div>

        <div className='mt-6 flex-1'>
          <h3 className='text-white font-bold text-[22px] tracking-tight'>{title}</h3>
          <p className="text-purple-400 text-[13px] mb-3 font-semibold uppercase tracking-wider">{subtitle}</p>
          <p className='text-gray-400 text-[15px] leading-relaxed'>{description}</p>
        </div>

        <div className='mt-5 flex flex-wrap gap-2'>
          {tags.map((tag, i) => (
            <span key={i} className={`text-[12px] px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-300 font-medium`}>
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const SectionWrapper = ({ children }) => (
  <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-0">
    {children}
  </section>
);

const Projects = () => {
  return (
    <SectionWrapper>
      <motion.div variants={textVariant()}>
        <h2 className={`text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center md:text-left tracking-tighter`}>
          Selected Work.
        </h2>
        <p className="mt-4 text-gray-400 text-[18px] max-w-2xl leading-relaxed text-center md:text-left">
          Selected work in analytics, governance, and fraud detection.
        </p>
      </motion.div>

      <div className='mt-16 flex flex-wrap gap-8 justify-center md:justify-start'>
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} image="/src/assets/code-card.png" />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
