import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
  FaCode,
  FaFacebookF,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  // 🧭 Quick Links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // ⚡ Fast animation variants
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

  return (
    <>
      {/* 🔝 Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.25, type: "spring", stiffness: 300 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/50 flex items-center justify-center group"
            aria-label="Back to top"
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowUp />
            </motion.span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-400 overflow-hidden">
        {/* 🌊 Top Gradient Border with Shimmer */}
        <div className="relative h-0.5 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />
        </div>

        {/* 🌌 Background Blobs */}
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"
        />

        {/* ✨ Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full pointer-events-none"
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
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 max-w-6xl mx-auto px-6 py-12"
        >
          {/* 🎯 Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* 👤 Brand Section */}
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold mb-3 inline-block"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Rifat
                </span>
              </motion.h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Building modern, responsive & scalable web applications with
                passion and creativity. ✨
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/5 border border-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-green-300 font-medium">
                  Available for work
                </span>
              </div>
            </motion.div>

            {/* 🧭 Quick Links */}
            <motion.div variants={itemVariants} className="text-center">
              <h4 className="text-white font-semibold mb-4 flex items-center justify-center gap-2">
                <FaCode className="text-cyan-400 text-sm" />
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="group relative inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* 🌐 Social Links */}
            <motion.div variants={itemVariants} className="text-center md:text-right">
              <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
              <div className="flex justify-center md:justify-end gap-3">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.1 + index * 0.05,
                      type: "spring",
                      stiffness: 250,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.2,
                      y: -5,
                      rotate: [0, -8, 8, 0],
                      boxShadow: `0 0 20px ${social.glow}80`,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 text-lg transition-all ${social.color} hover:text-white`}
                    title={social.name}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Email Quick Copy Hint */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xs text-gray-500 mt-4"
              >
                📧 r18productionbusiness@gmail.com
              </motion.p>
            </motion.div>
          </div>

          {/* ➖ Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-6"
          />

          {/* 📝 Bottom Copyright */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          >
            <p className="text-gray-500 flex items-center gap-1.5 flex-wrap justify-center">
              © {new Date().getFullYear()}{" "}
              <span className="text-gray-300 font-medium">R18 Production</span>
              <span className="text-gray-600">•</span>
              All rights reserved.
            </p>

            <p className="text-gray-500 flex items-center gap-1.5">
              Made with
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500 inline-flex"
              >
                <FaHeart />
              </motion.span>
              by
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Rifat
              </span>
            </p>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;