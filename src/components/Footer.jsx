import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Sakthi1205",
      name: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/sakthi-s-3063b1257/",
      name: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:sakthisabarinathan12@gmail.com",
      name: "Email",
      color: "hover:text-red-400"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold mb-4">Let's Connect!</h3>
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`text-2xl transition-transform duration-300 ${link.color}`}
              whileHover={{ scale: 1.3, rotate: 10 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Sakthi S</p>
      </motion.div>
    </footer>
  );
}
