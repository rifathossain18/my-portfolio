import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaFolder,
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaShoppingCart,
  FaBlog,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "E-commerce App",
      desc: "A full-stack MERN e-commerce site with cart and payment integration.",
      tech: ["React", "Node", "MongoDB"],
      img: "https://via.placeholder.com/600x400/0f172a/22d3ee?text=E-commerce+App",
      link: "#",
      github: "#",
      category: "Full Stack",
      featured: true,
    },
    {
      title: "Blog Platform",
      desc: "A blogging platform with authentication and CRUD posts management.",
      tech: ["React", "Express", "MongoDB"],
      img: "https://via.placeholder.com/600x400/0f172a/a855f7?text=Blog+Platform",
      link: "#",
      github: "#",
      category: "Full Stack",
      featured: false,
    },
    {
      title: "Portfolio Website",
      desc: "A modern, animated personal portfolio built with React and Tailwind.",
      tech: ["React", "Tailwind", "Framer"],
      img: "https://via.placeholder.com/600x400/0f172a/ec4899?text=Portfolio",
      link: "#",
      github: "#",
      category: "Frontend",
      featured: false,
    },
  ];

  const filters = ["All", "Full Stack", "Frontend"];

  // Filter projects
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  // Tech icon mapping
  const techIcons = {
    React: <FaReact className="text-cyan-400" />,
    Node: <FaNodeJs className="text-green-400" />,
    Express: <SiExpress className="text-gray-300" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    Tailwind: <SiTailwindcss className="text-sky-400" />,
    Framer: <FaCode className="text-purple-400" />,
  };

  // ⚡ Fast animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-20 px-4 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* 🌌 Background Blobs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 80, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-2xl pointer-events-none"
      />

      {/* ✨ Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 1,
          }}
        />
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* 🏷️ Badge */}
        <motion.div variants={itemVariants} className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium tracking-wider">
            🚀 MY WORK
          </span>
        </motion.div>

        {/* 🎯 Title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4"
        />

        <motion.p
          variants={itemVariants}
          className="text-center text-gray-400 max-w-xl mx-auto mb-8"
        >
          Here are some of my recent projects. Each one taught me something new
          and helped me grow as a developer. 💡
        </motion.p>

        {/* 🎛️ Filter Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((f, index) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.25 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "text-white"
                  : "text-gray-400 hover:text-white bg-white/5 border border-white/10"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* 📦 Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, index) => (
              <motion.div
                key={p.title}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 flex flex-col"
              >
                {/* 🌈 Glowing border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
                </div>

                {/* 🖼️ Image Container */}
                <div className="relative overflow-hidden h-48 bg-gray-900">
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />

                  {/* Featured Badge */}
                  {p.featured && (
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold shadow-lg flex items-center gap-1"
                    >
                      ⭐ Featured
                    </motion.span>
                  )}

                  {/* Category Badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-gray-900/80 backdrop-blur-md border border-white/20 text-xs text-cyan-400 font-medium">
                    {p.category}
                  </span>

                  {/* Icon overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xl shadow-lg"
                    >
                      <FaFolder />
                    </motion.div>
                  </motion.div>
                </div>

                {/* 📄 Content */}
                <div className="relative p-5 flex flex-col flex-1">
                  {/* Folder icon + Title row */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {p.title}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors text-lg flex-shrink-0"
                    >
                      <FaFolder />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {p.desc}
                  </p>

                  {/* 🛠️ Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t, idx) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.2 + idx * 0.04,
                          type: "spring",
                          stiffness: 250,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-default"
                      >
                        {techIcons[t] || <FaCode className="text-cyan-400" />}
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  {/* 🔗 Action Buttons */}
                  <div className="flex items-center gap-2 mt-auto">
                    <motion.a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-cyan-500/20 overflow-hidden group/btn"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </motion.a>

                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-500 transition-all flex-shrink-0"
                      aria-label="View source on GitHub"
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 🎯 View All Button */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <motion.a
            href="https://github.com/rifathossain18/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold backdrop-blur-lg hover:border-cyan-400/50 hover:bg-white/10 transition-all group"
          >
            <FaGithub className="text-lg" />
            <span>View All on GitHub</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-cyan-400"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;