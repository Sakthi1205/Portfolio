import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, Lambda, API Gateway, DynamoDB, Bedrock)", "Docker", "Jenkins", "Ansible", "Terraform", "GitHub Actions"]
    },
    {
      category: "Programming Languages",
      skills: ["Java (Intermediate)", "Python (Basic)", "JavaScript (Basic)"]
    },
    {
      category: "Frontend Technologies",
      skills: ["HTML", "CSS", "React.js"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "DynamoDB"]
    },
    {
      category: "Tools & Environments",
      skills: ["Git", "GitHub", "Linux", "ITIS"]
    }
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gradient-to-r from-gray-100 to-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-900">Skills</h2>
      
      <div className="flex flex-col gap-12 items-center">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="w-full max-w-4xl text-left"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{cat.category}:</h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white shadow-lg rounded-full text-gray-800 font-medium cursor-pointer hover:bg-blue-100 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
