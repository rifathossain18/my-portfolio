import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  // ⚡ Typing animation
  const fullText = "MERN Stack Developer";
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0 },
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

  const skills = [
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", color: "from-green-400 to-emerald-500" },
    { name: "Express", color: "from-gray-400 to-gray-600" },
    { name: "MongoDB", color: "from-green-500 to-lime-500" },
    { name: "JavaScript", color: "from-yellow-400 to-orange-500" },
    { name: "Tailwind", color: "from-sky-400 to-cyan-500" },
  ];

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "25+", label: "Projects Done" },
    { number: "15+", label: "Happy Clients" },
    { number: "10+", label: "Technologies" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* 🌌 Background Blobs */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 80, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl"
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
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* 🏷️ Section Badge */}
        <motion.div variants={itemVariants} className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium tracking-wider">
            ✨ GET TO KNOW ME
          </span>
        </motion.div>

        {/* 🎯 Title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8"
        />

        {/* 👤 Profile / Intro Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 mb-10 shadow-2xl overflow-hidden group"
        >
          {/* Card Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* 🎨 Modern Animated Avatar */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
              viewport={{ once: true }}
              className="relative flex-shrink-0"
            >
              {/* Outer Rotating Gradient Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #22d3ee, #a855f7, #ec4899, #22d3ee)",
                  padding: "3px",
                }}
              >
                <div className="w-full h-full rounded-full bg-gray-900" />
              </motion.div>

              {/* Middle Pulsing Ring */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-md"
              />

              {/* Inner Glow */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl"
              />

              {/* 🎯 Avatar Circle with Custom SVG */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-cyan-400/30 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.4)]"
              >
                {/* Inner gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

                {/* 👤 Custom SVG Avatar - Developer Silhouette */}
                <svg
                  viewBox="0 0 100 100"
                  className="relative w-20 h-20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="avatarGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient
                      id="avatarGradient2"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>

                  {/* Head */}
                  <circle
                    cx="50"
                    cy="35"
                    r="15"
                    fill="url(#avatarGradient)"
                  />

                  {/* Body / Shoulders */}
                  <path
                    d="M 20 90 Q 20 60 50 60 Q 80 60 80 90 Z"
                    fill="url(#avatarGradient2)"
                  />

                  {/* Eyes */}
                  <circle cx="44" cy="33" r="2" fill="#0f172a" />
                  <circle cx="56" cy="33" r="2" fill="#0f172a" />

                  {/* Smile */}
                  <path
                    d="M 44 41 Q 50 46 56 41"
                    stroke="#0f172a"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Laptop/Code Symbol on chest */}
                  <rect
                    x="42"
                    y="70"
                    width="16"
                    height="10"
                    rx="1"
                    fill="#0f172a"
                    opacity="0.6"
                  />
                  <text
                    x="50"
                    y="78"
                    fontSize="8"
                    fill="#22d3ee"
                    textAnchor="middle"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    {"</>"}
                  </text>
                </svg>

                {/* Shine effect */}
                <motion.div
                  animate={{ x: [-100, 100] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="absolute inset-0 w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </motion.div>

              {/* 🌟 Orbit Dots */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 6 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 rounded-full"
                  style={{ transformOrigin: "center" }}
                >
                  <div
                    className={`absolute w-2.5 h-2.5 rounded-full shadow-lg ${
                      i === 0
                        ? "bg-cyan-400 top-0 left-1/2 -translate-x-1/2 shadow-cyan-400/50"
                        : i === 1
                        ? "bg-purple-400 top-1/2 right-0 -translate-y-1/2 shadow-purple-400/50"
                        : "bg-pink-400 bottom-0 left-1/2 -translate-x-1/2 shadow-pink-400/50"
                    }`}
                  />
                </motion.div>
              ))}

              {/* 🟢 Online Status Indicator */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-lg shadow-green-500/50"
              >
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                <span className="relative w-2 h-2 bg-white rounded-full" />
              </motion.div>
            </motion.div>

            {/* Intro Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Hi, I'm a{" "}
                <span className="text-cyan-400">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 align-middle"
                  />
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate MERN stack developer with experience in
                building responsive and scalable web applications. I love
                turning ideas into reality using{" "}
                <span className="text-cyan-400 font-medium">React</span>,{" "}
                <span className="text-green-400 font-medium">Node.js</span>,{" "}
                <span className="text-gray-400 font-medium">Express</span>, and{" "}
                <span className="text-lime-400 font-medium">MongoDB</span>.
              </p>

              {/* 🎯 Quick Info Pills */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                {[
                  { icon: "📍", text: "Dhaka, BD" },
                  { icon: "💼", text: "Open to Work" },
                  { icon: "⚡", text: "Fast Learner" },
                ].map((pill, index) => (
                  <motion.span
                    key={pill.text}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-cyan-400/50 transition-colors"
                  >
                    <span>{pill.icon}</span>
                    <span>{pill.text}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🛠️ Skills Section */}
        <motion.div variants={itemVariants} className="mb-10">
          <h3 className="text-center text-xl font-semibold text-gray-300 mb-6">
            💻 My Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`px-5 py-2 rounded-full bg-gradient-to-r ${skill.color} text-white font-medium shadow-lg cursor-pointer`}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* 📊 Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)",
              }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 text-center cursor-pointer transition-all"
            >
              <motion.h4
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: index * 0.05 + 0.1,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1"
              >
                {stat.number}
              </motion.h4>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 🎯 CTA Button */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/30 overflow-hidden group"
          >
            <span className="relative z-10">Let's Work Together 🚀</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;