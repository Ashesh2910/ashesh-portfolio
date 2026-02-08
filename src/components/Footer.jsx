import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-10 text-center border-t border-white/10 bg-black">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Ashesh Samrajya
      </p>

      <p className="text-gray-600 text-xs mt-2">
        Built with React, Tailwind, and Data-driven storytelling.
      </p>
    </footer>
  );
};

export default Footer;
