import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import AboutPage from '@/pages/AboutPage'
import EducationPage from '@/pages/EducationPage'
import ProjectsPage from '@/pages/ProjectsPage'
import SkillsPage from '@/pages/SkillsPage'
import CertificationsPage from '@/pages/CertificationsPage'
import ContactPage from '@/pages/ContactPage'
import PortfolioPage from '@/pages/PortfolioPage'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioPage />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.3 }}
            >
              <AboutPage />
            </motion.div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioPage />
            </motion.div>
          }
        />
        <Route
          path="/education"
          element={
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.3 }}
            >
              <EducationPage />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectsPage />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.3 }}
            >
              <SkillsPage />
            </motion.div>
          }
        />
        <Route
          path="/certifications"
          element={
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.3 }}
            >
              <CertificationsPage />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.3 }}
            >
              <ContactPage />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -32 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Navbar />
          <AnimatedRoutes />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
