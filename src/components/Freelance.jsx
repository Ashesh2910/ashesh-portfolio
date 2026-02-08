import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Folder, ArrowLeft, Presentation, Layers } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { fadeIn, textVariant } from "../utils/motion";

const FreelanceCard = ({ index, title, subtitle, description, image, onClick, color }) => {
    // Theme logic based on color prop
    const theme = {
        blue: {
            border: "hover:border-blue-400/40",
            shadow: "hover:shadow-blue-900/20",
            text: "group-hover:text-blue-300",
            subtitle: "text-blue-400"
        },
        green: {
            border: "hover:border-green-400/40",
            shadow: "hover:shadow-green-900/20",
            text: "group-hover:text-green-300",
            subtitle: "text-green-400"
        },
        purple: {
            border: "hover:border-purple-400/40",
            shadow: "hover:shadow-purple-900/20",
            text: "group-hover:text-purple-300",
            subtitle: "text-purple-400"
        },
        red: {
            border: "hover:border-red-400/40",
            shadow: "hover:shadow-red-900/20",
            text: "group-hover:text-red-300",
            subtitle: "text-red-400"
        },
        cyan: {
            border: "hover:border-cyan-400/40",
            shadow: "hover:shadow-cyan-900/20",
            text: "group-hover:text-cyan-300",
            subtitle: "text-cyan-400"
        },
        orange: {
            border: "hover:border-orange-400/40",
            shadow: "hover:shadow-orange-900/20",
            text: "group-hover:text-orange-300",
            subtitle: "text-orange-400"
        }
    }[color] || { // default to green
        border: "hover:border-green-400/40",
        shadow: "hover:shadow-green-900/20",
        text: "group-hover:text-green-300",
        subtitle: "text-green-400"
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="h-full"
        >
            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => onClick(image)}
                className={`relative h-full flex flex-col cursor-pointer overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-300 ${theme.border} ${theme.shadow} group`}
            >
                {/* Glass Reflection Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="relative w-full h-[240px] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                    {/* Overlay hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                        <span className="text-white text-sm font-medium border border-white/40 bg-white/10 px-5 py-2 rounded-full backdrop-blur-md shadow-lg">View Design</span>
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-1 relative z-10">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className={`text-white font-bold text-[22px] tracking-tight drop-shadow-md transition-colors ${theme.text}`}>
                            {title}
                        </h3>
                    </div>
                    <p className={`${theme.subtitle} font-bold text-[12px] uppercase tracking-wider mb-3`}>
                        {subtitle}
                    </p>
                    <p className="text-gray-300 text-[14px] leading-relaxed line-clamp-3 font-light">
                        {description}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const FolderCard = ({ onClick, count, title, type = "template", theme = "green" }) => {
    // Theme Config
    const styles = {
        green: {
            gradient: "from-green-400/20 to-emerald-600/20",
            hoverBorder: "group-hover:border-green-400/50",
            iconBg: "group-hover:bg-green-400/20",
            iconColor: "group-hover:text-green-400",
            titleHover: "group-hover:text-green-300"
        },
        blue: {
            gradient: "from-blue-400/20 to-sky-600/20",
            hoverBorder: "group-hover:border-blue-400/50",
            iconBg: "group-hover:bg-blue-400/20",
            iconColor: "group-hover:text-blue-400",
            titleHover: "group-hover:text-blue-300"
        },
        purple: {
            gradient: "from-purple-400/20 to-pink-600/20",
            hoverBorder: "group-hover:border-purple-400/50",
            iconBg: "group-hover:bg-purple-400/20",
            iconColor: "group-hover:text-purple-400",
            titleHover: "group-hover:text-purple-300"
        },
        red: {
            gradient: "from-red-400/20 to-orange-600/20",
            hoverBorder: "group-hover:border-red-400/50",
            iconBg: "group-hover:bg-red-400/20",
            iconColor: "group-hover:text-red-400",
            titleHover: "group-hover:text-red-300"
        },
        cyan: {
            gradient: "from-cyan-400/20 to-teal-600/20",
            hoverBorder: "group-hover:border-cyan-400/50",
            iconBg: "group-hover:bg-cyan-400/20",
            iconColor: "group-hover:text-cyan-400",
            titleHover: "group-hover:text-cyan-300"
        },
        orange: {
            gradient: "from-orange-400/20 to-yellow-600/20",
            hoverBorder: "group-hover:border-orange-400/50",
            iconBg: "group-hover:bg-orange-400/20",
            iconColor: "group-hover:text-orange-400",
            titleHover: "group-hover:text-orange-300"
        }
    }[theme];

    // Icon Selection
    const Icon = {
        template: Folder,
        presentation: Presentation,
        deck: Layers
    }[type] || Folder;

    return (
        <motion.div
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer group relative w-full aspect-[4/3]"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50`} />

            <div className={`relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] ${styles.hoverBorder} transition-all duration-300`}>
                <div className={`bg-white/10 p-6 rounded-full border border-white/10 mb-6 ${styles.iconBg} group-hover:scale-110 transition-all duration-300 shadow-inner`}>
                    <Icon size={64} className={`text-white ${styles.iconColor} transition-colors`} />
                </div>

                <h3 className={`text-white font-bold text-3xl tracking-tight mb-2 ${styles.titleHover} transition-colors text-center`}>{title}</h3>
                <p className="text-gray-400 font-medium tracking-wider uppercase text-sm group-hover:text-white transition-colors">
                    {count} {type === "deck" ? "Slides" : (type === "template" ? "Designs" : "Items")} Inside
                </p>

                <div className="mt-6 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 group-hover:bg-white/10 transition-colors">
                    Tap to Open
                </div>
            </div>
        </motion.div>
    );
};

const ImageModal = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-[20px]"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-7xl w-full max-h-[95vh] flex flex-col items-center justify-center p-2"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 md:-right-12 text-white hover:text-green-400 transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg"
                >
                    <X size={28} />
                </button>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-1">
                    <img
                        src={image}
                        alt="Full screen preview"
                        className="max-h-[80vh] w-auto object-contain rounded-xl"
                    />
                </div>

                <button
                    onClick={onClose}
                    className="mt-8 px-8 py-3 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 rounded-full text-white font-medium transition-all hover:scale-105 active:scale-95 backdrop-blur-md flex items-center gap-2 shadow-lg group"
                >
                    <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                    Close Preview
                </button>
            </motion.div>
        </motion.div>
    );
};

const SectionWrapper = ({ children }) => (
    <section id="freelance" className="py-24 px-6 max-w-7xl mx-auto relative z-0">
        {children}
    </section>
);

const Freelance = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [view, setView] = useState("home"); // home, templates, presentations_root, pitch_deck, coca_cola, vizn, nike

    const handleBack = () => {
        if (view === "pitch_deck" || view === "coca_cola" || view === "vizn" || view === "nike") setView("presentations_root");
        else setView("home");
    };

    return (
        <SectionWrapper>
            <motion.div variants={textVariant()}>
                <p className="text-gray-400 text-[14px] uppercase tracking-wider text-center md:text-left font-medium">
                    My Creative Work
                </p>
                <h2 className="text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center md:text-left tracking-tighter drop-shadow-lg">
                    Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Designs.</span>
                </h2>
                <p className="mt-4 text-gray-300 text-[18px] max-w-2xl leading-relaxed text-center md:text-left font-light">
                    A collection of brochures, menus, and brand assets designed for clinics, cafes, and wellness centers.
                </p>
            </motion.div>

            <div className="mt-16 min-h-[400px]">
                <AnimatePresence mode="wait">
                    {/* HOME VIEW: Root Folders */}
                    {view === "home" && (
                        <motion.div
                            key="home-list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto py-10"
                        >
                            <FolderCard
                                title="Templates"
                                type="template"
                                theme="green"
                                count={portfolioData.freelance.length}
                                onClick={() => setView("templates")}
                            />
                            <FolderCard
                                title="Presentations"
                                type="presentation"
                                theme="blue"
                                count={4} // Now 4 decks
                                onClick={() => setView("presentations_root")}
                            />
                        </motion.div>
                    )}

                    {/* PRESENTATIONS ROOT: Nested Folders */}
                    {view === "presentations_root" && (
                        <motion.div
                            key="presentations-list"
                            className="relative"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <motion.button
                                onClick={handleBack}
                                className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-5 py-2 rounded-full border border-white/10 backdrop-blur-md"
                            >
                                <ArrowLeft size={18} /> Back to Home
                            </motion.button>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto py-10">
                                <FolderCard
                                    title="Pitch Deck Design"
                                    type="deck"
                                    theme="purple"
                                    count={portfolioData.presentations.length}
                                    onClick={() => setView("pitch_deck")}
                                />
                                <FolderCard
                                    title="Coca-Cola Deck"
                                    type="deck"
                                    theme="red"
                                    count={portfolioData.cocaCola.length}
                                    onClick={() => setView("coca_cola")}
                                />
                                <FolderCard
                                    title="Vizn Ventures"
                                    type="deck"
                                    theme="cyan"
                                    count={portfolioData.vizn.length}
                                    onClick={() => setView("vizn")}
                                />
                                <FolderCard
                                    title="Nike Deck"
                                    type="deck"
                                    theme="orange"
                                    count={portfolioData.nike.length}
                                    onClick={() => setView("nike")}
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* GRID VIEWS */}
                    {(view === "templates" || view === "pitch_deck" || view === "coca_cola" || view === "vizn" || view === "nike") && (
                        <motion.div
                            key="grid-view"
                            className="relative"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <motion.button
                                onClick={handleBack}
                                className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-5 py-2 rounded-full border border-white/10 backdrop-blur-md"
                            >
                                <ArrowLeft size={18} /> {view === "templates" ? "Back to Folders" : "Back to Decks"}
                            </motion.button>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {view === "templates" && portfolioData.freelance.map((project, index) => (
                                    <FreelanceCard
                                        key={`freelance-${index}`}
                                        index={index}
                                        color="green"
                                        {...project}
                                        onClick={setSelectedImage}
                                    />
                                ))}

                                {view === "pitch_deck" && portfolioData.presentations.map((project, index) => (
                                    <FreelanceCard
                                        key={`presentation-${index}`}
                                        index={index}
                                        color="purple"
                                        {...project}
                                        onClick={setSelectedImage}
                                    />
                                ))}

                                {view === "coca_cola" && portfolioData.cocaCola.map((project, index) => (
                                    <FreelanceCard
                                        key={`coca-${index}`}
                                        index={index}
                                        color="red"
                                        {...project}
                                        onClick={setSelectedImage}
                                    />
                                ))}

                                {view === "vizn" && portfolioData.vizn.map((project, index) => (
                                    <FreelanceCard
                                        key={`vizn-${index}`}
                                        index={index}
                                        color="cyan"
                                        {...project}
                                        onClick={setSelectedImage}
                                    />
                                ))}

                                {view === "nike" && portfolioData.nike.map((project, index) => (
                                    <FreelanceCard
                                        key={`nike-${index}`}
                                        index={index}
                                        color="orange"
                                        {...project}
                                        onClick={setSelectedImage}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
};

export default Freelance;
