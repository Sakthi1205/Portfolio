import { motion } from "framer-motion";

export default function ProjectCard({ title, problem, approach, outcome, tech, github, demo }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      
      <div className="space-y-2 text-gray-700">
        <p><strong className="text-gray-800">Problem:</strong> {problem}</p>
        <p><strong className="text-gray-800">Approach:</strong> {approach}</p>
        <p><strong className="text-gray-800">Outcome:</strong> {outcome}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900 font-semibold rounded-full text-sm shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-6 mt-5">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
