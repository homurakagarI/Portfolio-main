import { useState, useEffect, useRef } from "react"

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

// School achievements data
const educationData = [
  {
    school: "Quezon City University",
    degree: "Bachelor of Science in Information Technology",
    period: "2021 - 2025",
    logo: "/QCU.jpg", 
    background: "/QCU_thumbnail.jpg",
    achievements: [
      "Participated in Inter-University Programming Competition",
      "Awarded Best Capstone Project for KM Foundation Management System",
      "Active member of Computer Science Society"
    ],
    description: "My journey at QCU has been transformative, building a strong foundation in both theoretical concepts and practical applications in IT. The supportive environment has allowed me to develop my technical skills and leadership abilities."
  },
  {
    school: "ACCESS Computer College",
    degree: "Senior High School",
    period: "2018 - 2020",
    logo: "/Access.jpg",
    background: "/Access Computer.jpg",
    achievements: [
      "Graduated with Honors",
      "2nd Runner up on Web Design competition",
      
      
    ],
    description: "ACCESS Computer College provided me with my first serious exposure to programming and web development, sparking my passion for technology. The specialized curriculum prepared me well for my IT degree."
  },
  {
    school: "Maligaya High School",
    degree: "High School",
    period: "2015 - 2018",
    logo: "/HighSchool.jpg",
    background: "/Maligaya High.jpg",
    achievements: [
      "Honor Student",
      
      
    ],
    description: "During my time at Maligaya High School, I discovered my aptitude for technical subjects and analytical thinking. The foundational knowledge I gained here set me on my path toward a career in technology."
  },
  {
    school: "Maligaya Elementary School",
    degree: "Elementary School",
    period: "2009 - 2015",
    logo: "/ELEMentary Maligaya.jpg",
    background: "/ElemMaligaya.jpg",
    achievements: [
      
    ],
    description: "My academic journey began at Maligaya Elementary School, where I developed a strong work ethic and curiosity for learning. The supportive teachers encouraged my interest in STEM subjects from an early age."
  }
]

export default function EducationPage() {
  const titleSection = useIntersectionObserver({ threshold: 0.1 })
  const [selectedSchool, setSelectedSchool] = useState<number | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSchoolClick = (index: number) => {
    if (selectedSchool === index && isExpanded) {
      setIsExpanded(false)
      setTimeout(() => setSelectedSchool(null), 300)
    } else {
      setSelectedSchool(index)
      setIsExpanded(true)
    }
  }

  return (
    <section className="relative py-12 md:py-20 lg:py-28 w-full min-h-screen flex flex-col items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background"></div>
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzAgMGMxNi41NjkgMCAzMCAxMy40MzEgMzAgMzAgMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDB6bTAgMTVjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIDguMjg0LTYuNzE2IDE1LTE1IDE1LTguMjg0IDAtMTUtNi43MTYtMTUtMTUgMC04LjI4NCA2LjcxNi0xNSAxNS0xNXptMCAxMWMtMi4yMSAwLTQgMS43OS00IDQgMCAyLjIxIDEuNzkgNCA0IDQgMi4yMSAwIDQtMS43OSA0LTQgMC0yLjIxLTEuNzktNC00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center gap-10 px-4 md:px-8">
        <div 
          ref={titleSection.ref}
          className={`w-full text-center transition-all duration-1000 transform ${
            titleSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Educational Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic path has been a continuous pursuit of knowledge, skill-building, and personal growth
          </p>
        </div>
        
        <div className="w-full max-w-6xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 to-purple-600/80 z-10"></div>
            
            {/* Education Timeline */}
            <div className="relative z-20 space-y-16">
              {educationData.map((edu, index) => {
                const animationDelay = index * 200;
                const itemSection = useIntersectionObserver({ threshold: 0.1 }, animationDelay);
                const isOdd = index % 2 === 0;
                
                return (
                  <div 
                    key={edu.school} 
                    ref={itemSection.ref}
                    className={`relative transition-all duration-1000 transform ${
                      itemSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-background bg-primary shadow-lg z-20"></div>
                    
                    {/* Content Card */}
                    <div 
                      className={`relative mx-auto md:mx-0 ml-12 md:ml-0 ${
                        isOdd ? "md:mr-[50%] md:pr-12" : "md:ml-[50%] md:pl-12"
                      } w-[85%] md:w-[45%] cursor-pointer group`}
                      onClick={() => handleSchoolClick(index)}
                    >
                      <div className={`
                        relative rounded-xl p-6 transition-all duration-500 
                        border-2 border-primary/30 shadow-lg
                        ${selectedSchool === index && isExpanded ? "scale-105 border-primary" : "hover:scale-[1.02]"}
                        overflow-hidden
                      `}>
                        {/* Background Image with Gradient Overlay */}
                        <div className="absolute inset-0 -z-10 opacity-20 transition-opacity duration-300 group-hover:opacity-30">
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
                          <img 
                            src={edu.background} 
                            alt={`${edu.school} background`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* School Content */}
                        <div className="flex flex-col items-center md:items-start gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-md">
                              <img 
                                src={edu.logo} 
                                alt={edu.school} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="text-left">
                              <h3 className="text-lg font-bold">{edu.degree}</h3>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-primary">{edu.school}</span>
                                <span className="text-sm text-muted-foreground">{edu.period}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Expandable Content */}
                          <div className={`
                            overflow-hidden transition-all duration-500 w-full
                            ${selectedSchool === index && isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                          `}>
                            <p className="text-muted-foreground mb-4">{edu.description}</p>
                            <div className="mt-4">
                              <h4 className="font-semibold text-primary mb-2">Achievements:</h4>
                              <ul className="list-disc list-inside space-y-1">
                                {edu.achievements.map((achievement, i) => (
                                  <li key={i} className="text-sm">{achievement}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          {/* "Read More" text */}
                          <div className={`text-sm text-primary font-medium flex items-center gap-1 ${selectedSchool === index && isExpanded ? "opacity-0" : ""}`}>
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                              <path d="m6 9 6 6 6-6"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <blockquote className="italic text-xl text-muted-foreground max-w-2xl mx-auto">
            "Education is not the learning of facts, but the training of the mind to think."
            <footer className="mt-2 font-medium text-primary">— Albert Einstein</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
