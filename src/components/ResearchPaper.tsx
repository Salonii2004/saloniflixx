import { motion } from "framer-motion";

const ResearchPaper = () => {
  return (
    <section className="pt-32 pb-32 px-6 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
      
      {/* PAGE TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-6xl font-bold text-red-400 mb-4">
          Research Publication
        </h1>
        <p className="text-xl text-gray-300">
          Vehicle Detection, Classification & Counting Using Deep Learning
        </p>
        <p className="text-lg text-gray-400 mt-2">
          Presented at International Conference SDSTD 2025  
          <br /> Accepted for Publication in Victorious Publications
        </p>
      </motion.div>

      {/* SECTION: OVERVIEW */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold text-red-300 mb-4">Overview</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          This research presents a real-time traffic monitoring system capable of detecting,
          classifying, and counting vehicles using YOLOv5, DeepSORT, and OpenCV. The system is
          designed to support smart city development by delivering accurate traffic insights,
          reducing manual monitoring, and enhancing urban mobility analysis.
        </p>
      </motion.div>

      {/* SECTION: PROBLEM STATEMENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <h2 className="text-3xl font-bold text-red-300 mb-4">Research Problem</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Traditional traffic monitoring systems struggle with accuracy during heavy congestion,
          diverse lighting conditions, and rapid movement. Manual observation is slow,
          inefficient, and error-prone. This study introduces an AI-driven system capable
          of understanding traffic conditions in real time, offering enhanced precision and
          automation for modern smart-city environments.
        </p>
      </motion.div>

      {/* SECTION: METHODOLOGY */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <h2 className="text-3xl font-bold text-red-300 mb-6">Methodology</h2>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            <span className="font-semibold text-white">1. Vehicle Detection – YOLOv5</span>  
            <br />
            Used for detecting multiple vehicle types with high speed & accuracy.
          </p>

          <p>
            <span className="font-semibold text-white">2. Vehicle Tracking – DeepSORT</span>  
            <br />
            Assigns a unique ID to each vehicle, ensuring continuous tracking even during occlusions.
          </p>

          <p>
            <span className="font-semibold text-white">3. Vehicle Classification & Counting</span>  
            <br />
            Categorizes vehicles (car, truck, bus, two-wheeler, etc.) and counts them in real time.
          </p>

          
        </div>
      </motion.div>

      {/* SECTION: RESULTS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <h2 className="text-3xl font-bold text-red-300 mb-6">Results</h2>
        <ul className="text-gray-300 text-lg list-disc list-inside space-y-3 leading-relaxed">
          <li>92% vehicle detection accuracy across diverse traffic scenarios.</li>
          <li>Stable multi-object tracking even in dense traffic conditions.</li>
          <li>Highly accurate real-time classification of moving vehicles.</li>
          <li>Clear traffic analytics for smart-city infrastructure decisions.</li>
          <li>Strong performance under low light and angle variations.</li>
        </ul>
      </motion.div>

      {/* SECTION: TECH STACK */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold text-red-300 mb-6">Technologies Used</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "YOLOv5",
            "DeepSORT",
            "OpenCV",
            "Python",
            "NumPy",
            "Pandas",
            "Streamlit",
            "Deep Learning",
            "Computer Vision"
          ].map((tech) => (
            <div
              key={tech}
              className="px-5 py-2 bg-red-500/20 border border-red-500/30 text-red-300 rounded-full text-sm font-semibold"
            >
              {tech}
            </div>
          ))}
        </div>
      </motion.div>

      {/* LINKS SECTION */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-4xl mx-auto mt-20 text-center"
>
  <h2 className="text-2xl font-bold text-red-300 mb-4">Resources</h2>

  <div className="space-y-4">

    {/* ⭐ NEW: Certificate Link */}
    <a
      href="https://drive.google.com/file/d/1fvL1_j0JWYpQw3vtTfP2hSvR807dmuQD/view"
      className="text-red-400 hover:underline text-lg font-semibold"
      target="_blank"
      rel="noopener noreferrer"
    >
      🏅 View Conference Certificate
    </a>
    <br />

    {/* Research Paper (coming soon) */}
    <a
      href="https://drive.google.com/file/d/1a6l3JjggFMx257pqX6MXti60TRJ3ohe3/view"
      className="text-red-400 hover:underline text-lg font-semibold"
    >
      📄 Research Paper (Victorious Publications – Coming Soon)
    </a>
    <br />

    {/* GitHub link if available */}
    
  </div>
</motion.div>

    </section>
  );
};

export default ResearchPaper;
