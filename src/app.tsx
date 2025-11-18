import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResearchPaper from './components/ResearchPaper';

// Component to handle smooth scrolling when navigating to #projects
function ScrollToProjects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash and we're on home page
    if (hash === '#projects' && pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById('projects');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Small delay ensures DOM is ready after render
      );
    }

    // Optional: Scroll to top on normal route changes
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Header />

        {/* This handles smooth scroll to #projects */}
        <ScrollToProjects />

        <AnimatePresence mode="wait">
          <Routes>
            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <motion.main
                  key="home"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <Hero />
                  <Projects />
                </motion.main>
              }
            />

            {/* ABOUT PAGE */}
            <Route
              path="/about"
              element={
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.div>
              }
            />

            {/* CONTACT PAGE */}
            <Route
              path="/contact"
              element={
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.div>
              }
            />

            {/* RESEARCH PAGE */}
            <Route
              path="/research"
              element={
                <motion.div
                  key="research"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ResearchPaper />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
