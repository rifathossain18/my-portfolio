import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaLaptopCode } from "react-icons/fa";
import { MdWorkOutline, MdSchool } from "react-icons/md";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "XYZ Ltd",
      year: "2023 - Present",
      desc: "Built responsive UIs with React and Tailwind.",
      icon: <FaLaptopCode />,
      color: "from-cyan-400 to-blue-500",
      glowColor: "#22d3ee",
      current: true,
    },
    {
      role: "Intern Developer",
      company: "ABC Corp",
      year: "2022 - 2023",
      desc: "Worked on REST APIs with Express and MongoDB.",
      icon: <FaCode />,
      color: "from-purple-400 to-pink-500",
      glowColor: "#a855f7",
      current: false,
    },
  ];

  // ⚡ Fast container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0,
      },
    },
  };

  // ⚡ Fast card animation
  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* 🌌 Background Blobs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-2xl"
      />

      {/* ✨ Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
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
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* 🏷️ Badge */}
        <motion.div variants={cardVariants} className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium tracking-wider">
            💼 MY JOURNEY
          </span>
        </motion.div>

        {/* 🎯 Title */}
        <motion.h2
          variants={cardVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-12"
        />

        {/* 📅 Timeline */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute left-4 md:left-6 top-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-lg shadow-cyan-500/50"
          />

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="relative pl-14 md:pl-20"
              >
                {/* 🔘 Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  className="absolute left-0 md:left-2 top-2 z-10"
                >
                  {/* Pulsing ring for current job */}
                  {exp.current && (
                    <motion.span
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-cyan-400"
                    />
                  )}

                  {/* Outer glow */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="absolute inset-0 rounded-full blur-md"
                    style={{ backgroundColor: exp.glowColor }}
                  />

                  {/* Main dot with icon */}
                  <div
                    className={`relative w-9 h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg border-4 border-gray-900`}
                  >
                    <span className="text-sm md:text-base">{exp.icon}</span>
                  </div>
                </motion.div>

                {/* 📇 Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Card glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top left, ${exp.glowColor}15, transparent 70%)`,
                    }}
                  />

                  {/* Top gradient line */}
                  <div
                    className={`absolute top-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${exp.color} transition-all duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-cyan-300 font-medium flex items-center gap-2">
                          <FaBriefcase className="text-xs" />
                          {exp.company}
                        </p>
                      </div>

                      {/* Year Badge */}
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white shadow-lg`}
                      >
                        📅 {exp.year}
                        {exp.current && (
                          <span className="relative flex h-2 w-2 ml-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                          </span>
                        )}
                      </motion.span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mt-3">
                      {exp.desc}
                    </p>

                    {/* Tag chips (decorative) */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {(i === 0
                        ? ["React", "Tailwind", "UI/UX"]
                        : ["Node.js", "Express", "MongoDB"]
                      ).map((tag, idx) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1 + idx * 0.05 }}
                          viewport={{ once: true }}
                          className="px-2.5 py-0.5 text-xs rounded-full bg-white/5 border border-white/10 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors cursor-pointer"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🎯 Bottom CTA */}
        <motion.div variants={cardVariants} className="text-center mt-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/30 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Work Together 🚀
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;