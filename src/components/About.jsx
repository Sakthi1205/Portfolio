import { motion } from "framer-motion";

export default function About() {
  const skills = ["AWS", "Docker", "Terraform", "Jenkins", "CI/CD"];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <motion.div
        className="max-w-3xl mx-auto text-center p-10 bg-white rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          I am a passionate <span className="font-semibold text-gray-900">Cloud & DevOps Engineer</span> with hands-on experience in AWS, CI/CD, Docker, and Terraform.  
          I enjoy automating workflows, building scalable infrastructure, and solving real-world problems through technology.
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              className="px-5 py-2 rounded-full font-medium shadow-sm text-gray-800 bg-gray-100 cursor-default hover:bg-gray-200 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
