import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaCode,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const links = ["home", "about", "skills", "projects", "experience", "contact"];

  // 📜 Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll progress calculation
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Active section detection
      const sections = links.map((link) => document.getElementById(link));
      const scrollPos = window.scrollY + 150;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(links[index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎯 Handle link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // ⚡ Fast animations
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.25 },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.04, duration: 0.25 },
    }),
  };

  return (
    <>
      {/* 📊 Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
        style={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      {/* 🎯 Navbar */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-cyan-500/5 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
          {/* 🏷️ Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-2 cursor-pointer group"
          >
            {/* Logo Icon with glow */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30"
            >
              <FaCode className="text-sm" />
              {/* Pulsing ring */}
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-lg bg-cyan-400"
              />
            </motion.div>

            {/* Logo Text */}
            <span className="text-xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                My
              </span>
              <span className="text-white">Portfolio</span>
            </span>

            {/* Underline shine */}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            />
          </motion.div>

          {/* 💻 Desktop Menu */}
          <motion.ul
            variants={linkContainerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-1"
          >
            {links.map((link) => {
              const isActive = activeSection === link;
              return (
                <motion.li
                  key={link}
                  variants={linkVariants}
                  className="relative"
                >
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    onSetActive={() => setActiveSection(link)}
                    className={`relative px-4 py-2 cursor-pointer capitalize text-sm font-medium transition-colors rounded-lg block ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                    }`}
                  >
                    {/* Active background highlight */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBg"
                        className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20 -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Link text */}
                    <span className="relative z-10">{link}</span>

                    {/* Hover underline */}
                    {!isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-6" />
                    )}

                    {/* Active dot indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}

            {/* 🌐 Social Quick Links (Desktop) */}
            <motion.li variants={linkVariants} className="ml-2 flex items-center gap-1">
              <motion.a
                href="https://github.com/rifathossain18/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-gray-700 transition-all text-sm"
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mdrifathossainsagor/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-blue-600 transition-all text-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
            </motion.li>
          </motion.ul>

          {/* 📱 Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white text-xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars />
                </motion.span>
              )}
            </AnimatePresence>

            {/* Notification dot */}
            {!isOpen && (
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full"
              />
            )}
          </motion.button>
        </div>

        {/* 📱 Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-white/5"
            >
              <ul className="flex flex-col items-stretch gap-1 px-4 py-4">
                {links.map((link, i) => {
                  const isActive = activeSection === link;
                  return (
                    <motion.li
                      key={link}
                      custom={i}
                      variants={mobileItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={link}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={handleLinkClick}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer capitalize font-medium transition-all ${
                          isActive
                            ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                            : "text-gray-300 hover:bg-white/5 hover:text-cyan-400 border border-transparent"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {/* Number badge */}
                          <span
                            className={`text-xs font-mono ${
                              isActive ? "text-cyan-400" : "text-gray-500"
                            }`}
                          >
                            0{i + 1}
                          </span>
                          {link}
                        </span>

                        {/* Active indicator */}
                        {isActive ? (
                          <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
                          />
                        ) : (
                          <span className="text-cyan-400 text-xs">→</span>
                        )}
                      </Link>
                    </motion.li>
                  );
                })}

                {/* Mobile Social Links */}
                <motion.li
                  custom={links.length}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex gap-2 justify-center pt-3 border-t border-white/5 mt-2"
                >
                  <motion.a
                    href="https://github.com/rifathossain18/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/mdrifathossainsagor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-blue-600 transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </motion.a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;