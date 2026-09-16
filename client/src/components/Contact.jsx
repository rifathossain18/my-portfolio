import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      await axios.post("/api/contact", form);
      setStatus("Message sent successfully ✅");
      setStatusType("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Something went wrong ❌");
      setStatusType("error");
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(""), 4000);
    }
  };

  // ⚡ Fast container animation - 1s এ সব শেষ
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // 0.15 → 0.05 (3x faster)
        delayChildren: 0,      // 0.2 → 0 (no initial delay)
      },
    },
  };

  // ⚡ Fast item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }, // 0.6 → 0.3 (2x faster)
    },
  };

  const contactInfo = [
    {
      icon: <MdEmail />,
      label: "Email",
      value: "r18productionbusiness@gmail.com",
      href: "mailto:r18productionbusiness@gmail.com",
      color: "from-cyan-400 to-blue-500",
      glowColor: "#22d3ee",
    },
    {
      icon: <MdPhone />,
      label: "Phone",
      value: "+880 1642-695161",
      href: "tel:+8801642695161",
      color: "from-green-400 to-emerald-500",
      glowColor: "#4ade80",
    },
    {
      icon: <MdLocationOn />,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
      color: "from-purple-400 to-pink-500",
      glowColor: "#c084fc",
    },
  ];

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "hover:bg-gray-700 hover:text-white",
      hoverColor: "#6b7280",
      url: "https://github.com/rifathossain18/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      color: "hover:bg-blue-600 hover:text-white",
      hoverColor: "#2563eb",
      url: "https://www.linkedin.com/in/mdrifathossainsagor/",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      color: "hover:bg-blue-700 hover:text-white",
      hoverColor: "#1d4ed8",
      url: "https://www.facebook.com/share/14oPPa8MsGi/",
    },
  ];

  const inputFields = [
    { name: "name", type: "text", label: "Name" },
    { name: "email", type: "email", label: "Email" },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* 🌌 Background Blobs - Slow animate থাকুক (এগুলো load এর অংশ না) */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />

      {/* ✨ Particles - animation delay কমিয়ে দিলাম */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 1, // 2 → 1
          }}
        />
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // 0.2 → 0.1 (আরও তাড়াতাড়ি trigger)
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* 🏷️ Badge */}
        <motion.div variants={itemVariants} className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium tracking-wider">
            💬 GET IN TOUCH
          </span>
        </motion.div>

        {/* 🎯 Title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact Me
          </span>
        </motion.h2>

        {/* Animated underline - delay কমিয়ে দিলাম */}
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
          Have a project in mind or just want to say hello? Drop me a message
          and I'll get back to you as soon as possible! 🚀
        </motion.p>

        {/* Main Grid */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* 📇 Left Side - Contact Info */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-5">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }} // ⚡ delay কম
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  x: 5,
                  boxShadow: `0 10px 40px ${info.glowColor}30`,
                }}
                className="group flex items-center gap-4 p-5 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-2xl shadow-lg overflow-hidden`}
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="absolute inset-0 bg-white/30 rounded-xl blur-md"
                  />
                  <span className="relative z-10 text-white">{info.icon}</span>
                </motion.div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                    {info.label}
                  </p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors truncate">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* 🌐 Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }} // ⚡ delay কম
              viewport={{ once: true }}
              className="p-5 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl"
            >
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.1 + index * 0.05, // ⚡ delay কম
                      duration: 0.3,
                      type: "spring",
                      stiffness: 250,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.15,
                      y: -5,
                      rotate: 5,
                      boxShadow: `0 0 20px ${social.hoverColor}80`,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 ${social.color} transition-all cursor-pointer text-xl`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* 💡 Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }} // ⚡ delay কম
              viewport={{ once: true }}
              className="flex items-center gap-3 p-5 bg-green-500/5 backdrop-blur-lg border border-green-500/20 rounded-2xl"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-sm text-green-300 font-medium">
                Available for freelance work
              </p>
            </motion.div>
          </motion.div>

          {/* 📝 Right Side - Form */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <motion.form
              onSubmit={handleSubmit}
              whileHover={{ scale: 1.005 }}
              className="relative p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Animated gradient border */}
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(90deg, #06b6d4, #a855f7, #06b6d4)",
                    "linear-gradient(270deg, #06b6d4, #a855f7, #06b6d4)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
              />

              <h3 className="text-2xl font-bold mb-1">
                Send a{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Message
                </span>
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                I'll reply within 24 hours ⏰
              </p>

              <div className="flex flex-col gap-5">
                {/* Name & Email Inputs */}
                {inputFields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }} // ⚡ delay কম
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <motion.label
                      animate={{
                        y: focused === field.name || form[field.name] ? -28 : 0,
                        scale:
                          focused === field.name || form[field.name] ? 0.85 : 1,
                        color:
                          focused === field.name || form[field.name]
                            ? "#22d3ee"
                            : "#9ca3af",
                      }}
                      transition={{ duration: 0.15 }} // ⚡ faster
                      className="absolute left-4 top-4 pointer-events-none origin-left text-gray-400 text-sm bg-gray-900/80 px-1 rounded"
                    >
                      {field.label}
                    </motion.label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused("")}
                      className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-white"
                      required
                    />
                  </motion.div>
                ))}

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }} // ⚡ delay কম
                  viewport={{ once: true }}
                  className="relative"
                >
                  <motion.label
                    animate={{
                      y: focused === "message" || form.message ? -28 : 0,
                      scale: focused === "message" || form.message ? 0.85 : 1,
                      color:
                        focused === "message" || form.message
                          ? "#22d3ee"
                          : "#9ca3af",
                    }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-4 top-4 pointer-events-none origin-left text-gray-400 text-sm bg-gray-900/80 px-1 rounded"
                  >
                    Message
                  </motion.label>
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none text-white"
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="relative overflow-hidden py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/30 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>Send Message 🚀</>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.button>
              </div>

              {/* Status Message */}
              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`mt-4 p-3 rounded-xl text-center text-sm font-medium border ${
                      statusType === "success"
                        ? "bg-green-500/10 border-green-500/30 text-green-300"
                        : "bg-red-500/10 border-red-500/30 text-red-300"
                    }`}
                  >
                    {status}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;