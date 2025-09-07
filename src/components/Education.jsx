import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      year: "2026 (Expected)",
      school: "Karpagam Institute Of Technology, Coimbatore",
      score: "CGPA: 7.78",
    },
    {
      degree: "HSC",
      year: "2022",
      school: "Sri Sowdeswari Vidyalaya Matric Hr Sec School, Coimbatore",
      score: "Percentage: 82.2%",
    },
    {
      degree: "SSLC",
      year: "2020",
      school: "Sri Sowdeswari Vidyalaya Matric Hr Sec School, Coimbatore",
      score: "Percentage: 68.6%",
    },
  ];

  return (
    <section id="education" className="py-16 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Education
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line for timeline */}
        <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>

        <div className="space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              {/* Circle indicator */}
              <div className="absolute left-0 top-4 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>

              {/* Card */}
              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-gray-900">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 mt-1">{edu.school}</p>
                <p className="text-gray-600 font-medium mt-2">
                  {edu.year} | {edu.score}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
