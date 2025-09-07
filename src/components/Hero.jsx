import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-28 bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden">
      {/* Floating background circles */}
      <motion.div 
        className="absolute w-72 h-72 bg-white/10 rounded-full top-10 left-10 animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute w-96 h-96 bg-white/5 rounded-full bottom-0 right-0 animate-pulse"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Main text */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Hi, I’m Sakthi 👋
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-xl font-medium mb-6"
      >
        Cloud & DevOps Engineer | AWS Certified
      </motion.p>

      {/* ✅ Fixed Resume Download */}
      <motion.a
        href="/Sakthi Resume Cloud.pdf"
        download
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
      >
        Download Resume
      </motion.a>

      {/* Subtle professional tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8 text-sm md:text-base text-white/80 max-w-xl"
      >
        Building scalable cloud solutions and automating infrastructure to help businesses grow efficiently.
      </motion.p>
    </section>
  );
}
