import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaCode,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "React",
      level: 90,
      icon: <FaReact />,
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-400",
      glowColor: "#22d3ee",
      textColor: "text-cyan-400",
    },
    {
      name: "Node.js",
      level: 85,
      icon: <FaNodeJs />,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-400",
      glowColor: "#4ade80",
      textColor: "text-green-400",
    },
    {
      name: "Express",
      level: 80,
      icon: <SiExpress />,
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-400",
      glowColor: "#9ca3af",
      textColor: "text-gray-300",
    },
    {
      name: "MongoDB",
      level: 75,
      icon: <SiMongodb />,
      color: "from-green-500 to-lime-500",
      bgColor: "bg-green-500",
      glowColor: "#22c55e",
      textColor: "text-green-400",
    },
    {
      name: "JavaScript",
      level: 95,
      icon: <FaJs />,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-400",
      glowColor: "#facc15",
      textColor: "text-yellow-400",
    },
    {
      name: "Tailwind CSS",
      level: 88,
      icon: <SiTailwindcss />,
      color: "from-sky-400 to-cyan-500",
      bgColor: "bg-sky-400",
      glowColor: "#38bdf8",
      textColor: "text-sky-400",
    },
  ];

  // ⚡ Fast animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* 🌌 Background Blobs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"
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
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* 🏷️ Badge */}
        <motion.div variants={itemVariants} className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium tracking-wider">
            💻 MY EXPERTISE
          </span>
        </motion.div>

        {/* 🎯 Title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Skills
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
          className="text-center text-gray-400 max-w-xl mx-auto mb-12"
        >
          Technologies I work with on a daily basis to build modern web
          applications. 🚀
        </motion.p>

        {/* 📊 Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${skill.glowColor}15, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon + Name + Level */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* Animated Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                      transition={{ duration: 0.4 }}
                      className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-xl text-white shadow-lg overflow-hidden`}
                    >
                      {/* Icon glow pulse */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="absolute inset-0 bg-white/30 blur-md"
                      />
                      <span className="relative z-10">{skill.icon}</span>
                    </motion.div>

                    {/* Skill Name */}
                    <span className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>

                  {/* Animated Percentage */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.4 + index * 0.08,
                      type: "spring",
                      stiffness: 250,
                    }}
                    viewport={{ once: true }}
                    className={`text-base font-bold ${skill.textColor} font-mono`}
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-2.5 bg-gray-800/80 rounded-full overflow-hidden border border-white/5">
                  {/* Animated fill */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index * 0.08,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className={`relative h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                    style={{ boxShadow: `0 0 10px ${skill.glowColor}80` }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                    />

                    {/* Dot at end */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 1 + index * 0.08,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg"
                      style={{ boxShadow: `0 0 12px ${skill.glowColor}` }}
                    />
                  </motion.div>
                </div>

                {/* Level Label */}
                <div className="flex justify-between mt-2 text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Expert</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🎯 Additional Skills / Tools */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-5">
            Also Familiar With
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Git",
              "GitHub",
              "VS Code",
              "REST API",
              "JWT Auth",
              "Firebase",
              "Figma",
              "Postman",
              "Vite",
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.04,
                  type: "spring",
                  stiffness: 250,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all cursor-pointer"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* 🎯 CTA */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/30 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaCode className="text-sm" />
              Let's Build Something Amazing
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;