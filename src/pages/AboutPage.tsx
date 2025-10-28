import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

// Animation hook
function useIntersectionObserver(options = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
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
  }, [options])

  return { ref, isVisible }
}

export default function AboutPage() {
  const textSection1 = useIntersectionObserver({ threshold: 0.1 })
  const textSection2 = useIntersectionObserver({ threshold: 0.1 })
  const textSection3 = useIntersectionObserver({ threshold: 0.1 })
  const imageSection1 = useIntersectionObserver({ threshold: 0.1 })
  const imageSection2 = useIntersectionObserver({ threshold: 0.1 })
  const btnSection = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="py-12 md:py-24 lg:py-32 w-full px-4 md:px-8">
      <div className="w-full flex flex-col items-start gap-8 md:items-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl self-center">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div 
            ref={imageSection1.ref}
            className={`relative overflow-hidden rounded-lg border-4 border-primary transform transition-all duration-1000 
              ${imageSection1.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
    
          </div>
          
          <div
            ref={textSection1.ref} 
            className={`flex flex-col gap-4 transition-all duration-1000 delay-300
              ${textSection1.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              I am a passionate and dedicated developer with a strong focus on building modern, high-quality web applications that are both functional and user-friendly.I specialize in using technologies like React, TypeScript, and Node.js to bring interactive and responsive web solutions to life.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
          <div
            ref={textSection2.ref} 
            className={`flex flex-col gap-4 order-2 md:order-1 transition-all duration-1000 delay-300
              ${textSection2.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              What excites me most about development is the opportunity to solve real-world problems through clean, maintainable code and thoughtful user experience. Whether I'm building from scratch or improving existing systems, I approach each project with creativity, precision, and a strong sense of ownership.
            </p>
          </div>
          
          <div 
            ref={imageSection2.ref}
            className={`relative overflow-hidden rounded-lg border-4 border-primary transform transition-all duration-1000 order-1 md:order-2
              ${imageSection2.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}`}
          >
          
          </div>
        </div>
      
        <div
          ref={textSection3.ref} 
          className={`max-w-3xl mx-auto mt-8 transition-all duration-1000 delay-300
            ${textSection3.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <p className="text-lg leading-relaxed text-foreground/90 text-center">
            I believe that great web development goes beyond code—it's about creating seamless digital experiences that serve real users. I'm always eager to learn, grow, and take on new challenges that push my skills to the next level. Whether it's crafting a sleek front-end interface or designing robust back-end logic, I bring energy, focus, and a problem-solving mindset to every line of code I write.
          </p>
        </div>
        
        <div
          ref={btnSection.ref} 
          className={`self-center mt-6 transition-all duration-1000 delay-500
            ${btnSection.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <Button asChild className="mt-2 px-8 py-6 text-lg animate-pulse">
            <a href="\Genavia-CVResume.pdf" download>
              Download CV-RESUME
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
