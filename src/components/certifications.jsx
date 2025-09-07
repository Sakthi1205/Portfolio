import { certifications } from "../data/certifications";
import { motion } from "framer-motion";
import { Award } from "lucide-react"; // certification icon

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 bg-gradient-to-r from-gray-50 to-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Certifications
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
            >
              {/* Header with icon + title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {cert.name}
                </h3>
              </div>

              {/* Issuer + Year */}
              <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
              <span className="text-sm font-medium text-blue-700 mb-3">
                {cert.year}
              </span>

              {/* Credential link if available */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  🔗 View Credential
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
