import { motion } from "framer-motion";

const About = () => (
  <section className="pt-32 py-32 px-4 text-center bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      {/* Title */}
      <h1 className="text-6xl font-bold mb-8 text-red-400">About Me</h1>

      {/* Intro */}
      <p className="text-xl mb-12 leading-relaxed text-gray-300">
        I’m <span className="font-semibold text-white">Saloni Patel</span>, a{" "}
        <span className="text-red-400">Software Engineer</span> with strong
        experience in full-stack development, AI-powered systems, and modern web
        technologies. I enjoy building{" "}
        <span className="font-semibold">scalable, intuitive, and automation-driven</span>{" "}
        digital products that solve real-world problems using Node.js, React, and Python.
      </p>

      {/* Experience Summary */}
      <p className="text-lg mb-12 leading-relaxed text-gray-400">
        I’ve completed Software Development internships at{" "}
        <span className="text-white font-semibold">Atul Ltd</span> and{" "}
        <span className="text-white font-semibold">TatvaSoft</span>, where I contributed to
        production-grade applications including HR automation platforms, secure authentication
        systems, community portals, and ticket management tools. My work spans both frontend and
        backend development—building APIs, designing responsive UIs, ensuring security, and
        improving overall system performance.
      </p>

      {/* Research Summary */}
      <p className="text-lg mb-12 leading-relaxed text-gray-400">
        I also completed a research project titled{" "}
        <span className="text-red-400 font-semibold">
          “Vehicle Detection, Classification & Counting Using Deep Learning”
        </span>
        , which was presented at the{" "}
        <span className="text-white font-semibold">International Conference SDSTD 2025</span>{" "}
        and accepted for publication in{" "}
        <span className="text-white font-semibold">Victorious Publications</span>.
        This work focuses on real-time traffic analysis using YOLOv5, DeepSORT,
        and OpenCV to support smarter urban planning and safety.
      </p>

      {/* Education - Correct */}
      <p className="text-lg mb-12 leading-relaxed text-gray-400">
        I completed my{" "}
        <span className="text-white font-semibold">
          Bachelor of Engineering in Information Technology
        </span>{" "}
        from{" "}
        <span className="text-white font-semibold">
          G H Patel College of Engineering and Technology (GCET)
        </span>{" "}
        with a{" "}
        <span className="text-red-400 font-semibold">CGPA of 8.9/10</span>.
        Throughout my academics, I consistently balanced academics with practical projects,
        research, and skill-building initiatives.
      </p>

      {/* Achievements - Correct Separation */}
      <p className="text-lg mb-12 leading-relaxed text-gray-400">
        I was selected as an{" "}
        <span className="text-white font-semibold">SSIP Hackathon Finalist (2023)</span> for
        developing a school registration portal recognized among top innovative solutions
        under the Government of Gujarat initiative.
      </p>

      {/* Social Impact Project - Separate */}
      <p className="text-lg mb-12 leading-relaxed text-gray-400">
        Separately, I contributed to a{" "}
        <span className="text-white font-semibold">Social Impact IoT Project</span> in collaboration
        with Mittra Rehabilitation Trust, where I engineered a wearable IoT device that enhanced
        communication and sensory support for{" "}
        <span className="text-white font-semibold">50+ children with autism</span>.
        The project involved real-world testing, iterations with therapists, and a successful pilot
        implementation.
      </p>

      {/* Closing Direction */}
      <p className="text-lg mb-16 leading-relaxed text-gray-400">
        I’m passionate about AI, human-centered design, automation, and real-world problem solving.
        I love turning ideas into impactful digital experiences and continuously improving my skills
        through projects, research, and innovation.
      </p>

      {/* Tech Stack */}
      <h2 className="text-3xl font-semibold mb-8 text-white">
        Tech Stack & Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
        {[
          "React",
          "Angular.js",
          "Node.js",
          "Python",
          "Flask",
          "Django",
          "JavaScript",
          "TypeScript",
          "C++",
          "Java",
          "C",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "SQLite",
          "TensorFlow",
          "PyTorch",
          "OpenCV",
          "NumPy",
          "Pandas",
          "Streamlit",
          "Power BI",
          "Git",
          "Docker",
          "Jenkins",
          "Selenium",
          "REST APIs",
          "Data Structures",
          "Algorithms",
          "System Design",
        ].map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="p-5 bg-white/10 rounded-2xl backdrop-blur-md hover:bg-red-500/20 transition duration-200"
          >
            <span className="text-lg font-semibold text-white">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
