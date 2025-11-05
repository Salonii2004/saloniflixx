import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="pt-28 pb-20 sm:pt-36 sm:pb-32 text-center px-4">
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent leading-tight"
    >
      I build <span className="text-red-500">scalable</span>
      <br />
      intelligent web apps<span className="text-red-500">.</span>
    </motion.h1>

    <motion.p
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-2xl mx-auto opacity-90"
    >
      Turning ideas into code that <span className="text-red-400">tells a story</span>.
    </motion.p>

    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="bg-red-600 px-8 sm:px-12 py-4 sm:py-6 rounded-full font-semibold text-lg sm:text-xl hover:bg-red-500 transition-all shadow-lg flex items-center justify-center"
      >
        View Projects <ArrowRight className="ml-2" size={20} />
      </motion.a>

      <Link
        to="/contact"
        className="border-2 border-red-600 px-8 sm:px-12 py-4 sm:py-6 rounded-full font-semibold text-lg sm:text-xl hover:bg-red-600 transition-all shadow-lg flex items-center justify-center"
      >
        Get In Touch
      </Link>
    </div>
  </section>
);

export default Hero;
