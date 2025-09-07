import { motion } from "framer-motion";
import { User, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-gray-50 to-gray-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-gray-900"
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        action="https://formspree.io/f/mzzayvqk"
        method="POST"
        className="max-w-xl mx-auto bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl space-y-6 border border-gray-200"
      >
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Write your message..."
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
        >
          Send Message 🚀
        </motion.button>
      </motion.form>
    </section>
  );
}
