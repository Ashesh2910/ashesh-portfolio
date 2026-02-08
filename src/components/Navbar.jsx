import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { id: "about", title: "About" },
        { id: "experience", title: "Experience" },
        { id: "projects", title: "Projects" },
        { id: "freelance", title: "Freelance" },
        { id: "contact", title: "Contact" },
    ];

    return (
        <nav
            className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary/70 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/10" : "bg-transparent"
                } transition-all duration-300`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="hero"
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src="/logo.svg" alt="logo" className="w-9 h-9 object-contain hidden" />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex ">
                        Ashesh &nbsp;
                        <span className="sm:block hidden"> | Data Analyst</span>
                    </p>
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
                            onClick={() => setActive(nav.title)}
                        >
                            <Link to={nav.id} smooth={true} duration={500}>{nav.title}</Link>
                        </li>
                    ))}
                    <a
                        href="/resume.html"
                        target="_blank"
                        className="px-4 py-1.5 border border-[#915EFF] rounded-full text-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-all text-sm font-bold"
                    >
                        Resume
                    </a>
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <div onClick={() => setToggle(!toggle)} className="cursor-pointer text-white">
                        {toggle ? <X size={28} /> : <Menu size={28} />}
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <Link to={nav.id} smooth={true} duration={500}>{nav.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
