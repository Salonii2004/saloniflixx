import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResearchPaper from './components/ResearchPaper'; // ✅ NEW PAGE

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Header />

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Hero />
                <Projects />
              </motion.main>
            }
          />

          {/* ABOUT PAGE */}
          <Route path="/about" element={<About />} />

          {/* CONTACT PAGE */}
          <Route path="/contact" element={<Contact />} />

          {/* RESEARCH PAPER PAGE (NEW) */}
          <Route path="/research" element={<ResearchPaper />} />

          {/* FIX: Anchor-style routes ("/#projects") do not work in React Router */}
          {/* Instead, users should navigate via <Link to="/#projects"> or scroll logic */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
