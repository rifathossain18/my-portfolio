import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowDown,
  FaFacebookF,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  // ⚡ Typing effect for roles
  const roles = ["MERN Stack Developer", "React Developer", "Full Stack Dev"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // 🌐 Social Links
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/rifathossain18/",
      color: "hover:bg-gray-700",
      glow: "#6b7280",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/mdrifathossainsagor/",
      color: "hover:bg-blue-600",
      glow: "#2563eb",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/share/14oPPa8MsGi/",
      color: "hover:bg-blue-700",
      glow: "#1d4ed8",
    },
    {
      name: "Email",
      icon: <MdEmail />,
      url: "mailto:r18productionbusiness@gmail.com",
      color: "hover:bg-cyan-600",
      glow: "#0891b2",
    },
  ];

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

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 overflow-hidden pt-24 pb-16"
    >
      {/* 🌌 Background Blobs */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 80, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"
      />

      {/* ✨ Floating Particles */}
      {[...Array(15)].map((_, i) => (
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

      {/* 🎯 Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* 👤 Avatar with Rotating Ring */}
        <motion.div variants={itemVariants} className="relative mb-6 md:mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 md:-inset-4 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #22d3ee, #a855f7, #ec4899, #22d3ee)",
              padding: "3px",
            }}
          >
            <div className="w-full h-full rounded-full bg-gray-900" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute -inset-2 rounded-full bg-cyan-400/30 blur-xl"
          />

          <motion.div
            whileHover={{ scale: 1.08, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-900 shadow-[0_0_50px_rgba(34,211,238,0.5)]"
          >
            <img
              src="src/assets/my_photo.jpeg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-4 md:-inset-6 rounded-full pointer-events-none"
              style={{ transformOrigin: "center" }}
            >
              <div
                className={`absolute w-2.5 h-2.5 md:w-3 md:h-3 rounded-full shadow-lg ${
                  i === 0
                    ? "bg-cyan-400 top-0 left-1/2 -translate-x-1/2 shadow-cyan-400/50"
                    : i === 1
                    ? "bg-purple-400 top-1/2 right-0 -translate-y-1/2 shadow-purple-400/50"
                    : "bg-pink-400 bottom-0 left-1/2 -translate-x-1/2 shadow-pink-400/50"
                }`}
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-lg shadow-green-500/50"
          >
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
            <span className="relative w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>

        {/* 👋 Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-cyan-400 text-xs md:text-base font-medium tracking-widest uppercase mb-2 md:mb-3"
        >
          👋 Welcome to my portfolio
        </motion.p>

        {/* 🎯 Name */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 leading-tight"
        >
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Rifat
            </span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-1 left-0 h-0.5 md:h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            />
          </span>
        </motion.h1>

        {/* ⌨️ Typing Role */}
        <motion.div
          variants={itemVariants}
          className="text-base md:text-2xl text-gray-300 mb-4 md:mb-6 h-7 md:h-8 flex items-center gap-2 flex-wrap justify-center"
        >
          <span className="text-gray-500">I'm a</span>
          <span className="text-cyan-400 font-semibold">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-0.5 h-5 md:h-6 bg-cyan-400 ml-0.5 align-middle"
            />
          </span>
        </motion.div>

        {/* 📝 Short Bio */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 max-w-xl mx-auto mb-6 md:mb-8 text-xs sm:text-sm md:text-base leading-relaxed px-2"
        >
          I build modern, responsive web applications with clean code and
          beautiful user experiences. Turning ideas into reality with{" "}
          <span className="text-cyan-400 font-medium">React</span>,{" "}
          <span className="text-green-400 font-medium">Node.js</span> &{" "}
          <span className="text-lime-400 font-medium">MongoDB</span>.
        </motion.p>

        {/* 🌐 Social Icons */}
        <motion.div variants={itemVariants} className="flex gap-3 md:gap-4 mb-6 md:mb-8">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4 + index * 0.08,
                type: "spring",
                stiffness: 250,
              }}
              whileHover={{
                scale: 1.2,
                y: -6,
                rotate: [0, -10, 10, 0],
                boxShadow: `0 10px 30px ${social.glow}80`,
              }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 text-lg md:text-xl transition-all backdrop-blur-lg ${social.color} hover:text-white`}
              title={social.name}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* 🎯 CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center"
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative group inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/30 overflow-hidden text-sm md:text-base"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaDownload className="text-sm" />
              Download CV
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

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold backdrop-blur-lg hover:border-cyan-400/50 hover:bg-white/10 transition-all text-sm md:text-base"
          >
            <span>Hire Me</span>
            <span className="text-cyan-400">→</span>
          </motion.a>
        </motion.div>
      </motion.div>

      
    </section>
  );
};

export default Hero;