import { useState, useRef, useEffect } from "react"
import AboutPage from "./AboutPage"
import EducationPage from "./EducationPage"
import ProjectsPage from "./ProjectsPage"
import SkillsPage from "./SkillsPage"
import CertificationsPage from "./CertificationsPage"
import ContactPage from "./ContactPage"
import { Button } from "@/components/ui/button"

// Animation hook
function useIntersectionObserver(options = {}, delay = 0) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      }, options)

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [options, delay])

  return { ref, isVisible }
}

export default function PortfolioPage() {
  const titleSection = useIntersectionObserver({ threshold: 0.1 })
  const [activeSection, setActiveSection] = useState<string>("about")
  
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "portfolio-about",
        "portfolio-education",
        "portfolio-projects",
        "portfolio-skills",
        "portfolio-certifications",
        "portfolio-contact"
      ]
      
      // Find the section that is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const isInView = rect.top <= 100 && rect.bottom >= 100
          
          if (isInView) {
            setActiveSection(sectionId.replace("portfolio-", ""))
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative w-full">
      {/* Fixed navigation sidebar */}
      <div className="fixed top-28 left-4 z-40 hidden xl:block">
        <div className="p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-primary/30 shadow-lg">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm mb-2">Navigation</h3>
            {[
              { id: "about", label: "About" },
              { id: "education", label: "Education" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
              { id: "certifications", label: "Certifications" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <Button 
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                className="justify-start"
                onClick={() => scrollToSection(`portfolio-${item.id}`)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      <div 
        ref={titleSection.ref}
        className={`w-full text-center py-12 transition-all duration-1000 transform ${
          titleSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          My Portfolio
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive showcase of my skills, education, projects, and professional background
        </p>
        
        {/* Mobile navigation */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 xl:hidden">
          {[
            { id: "about", label: "About" },
            { id: "education", label: "Education" },
            { id: "projects", label: "Projects" },
            { id: "skills", label: "Skills" },
            { id: "certifications", label: "Certifications" },
            { id: "contact", label: "Contact" }
          ].map((item) => (
            <Button 
              key={item.id}
              variant={activeSection === item.id ? "default" : "outline"}
              size="sm"
              onClick={() => scrollToSection(`portfolio-${item.id}`)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Sections */}
      <div className="space-y-12">
        {/* About Section */}
        <section id="portfolio-about" className="scroll-mt-28">
          <AboutPage />
        </section>
        
        {/* Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        
        {/* Education Section */}
        <section id="portfolio-education" className="scroll-mt-28">
          <EducationPage />
        </section>
        
        {/* Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        
        {/* Projects Section */}
        <section id="portfolio-projects" className="scroll-mt-28">
          <ProjectsPage />
        </section>
        
        {/* Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        
        {/* Skills Section */}
        <section id="portfolio-skills" className="scroll-mt-28">
          <SkillsPage />
        </section>
        
        {/* Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        
        {/* Certifications Section */}
        <section id="portfolio-certifications" className="scroll-mt-28">
          <CertificationsPage />
        </section>
        
        {/* Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        
        {/* Contact Section */}
        <section id="portfolio-contact" className="scroll-mt-28">
          <ContactPage />
        </section>
      </div>
      
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 opacity-80 hover:opacity-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  )
}
