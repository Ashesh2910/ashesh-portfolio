import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
    const contact = portfolioData.contact;

    return (
        <section
            id="contact"
            className="py-24 px-6 max-w-6xl mx-auto text-center"
        >
            {/* Heading */}
            <motion.div variants={textVariant()}>
                <p className="text-secondary text-[16px] uppercase tracking-wider">
                    Contact
                </p>

                <h2 className="text-white font-black text-[40px] sm:text-[55px] mt-2">
                    Let’s Connect.
                </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-6 text-gray-300 text-[17px] sm:text-[19px] max-w-2xl mx-auto"
            >
                Open to data analyst opportunities, collaborations, and analytics
                projects. Feel free to reach out.
            </motion.p>

            {/* Links */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                {/* Email */}
                <a
                    href={`mailto:${contact.email}`}
                    className="px-8 py-4 rounded-2xl bg-white/90 text-black font-semibold hover:bg-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] backdrop-blur-md"
                >
                    Email Me
                </a>

                {/* GitHub */}
                <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-2xl bg-white/5 border border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all backdrop-blur-md shadow-lg"
                >
                    GitHub
                </a>

                {/* LinkedIn */}
                <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-2xl bg-white/5 border border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all backdrop-blur-md shadow-lg"
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Contact;
