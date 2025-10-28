import { useState, useRef, useEffect } from "react"
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

// Contact methods data
const contactMethods = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    title: "Email",
    value: "Junecarlgenavia@gmail.com",
    link: "mailto:your.email@example.com",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 0 1 7 7M15 15a3 3 0 0 1 3 3M6 17a1 1 0 0 1 0-2 1 1 0 0 1 0 2Z"/>
      </svg>
    ),
    title: "Blog",
    value: "junecarlgenavia.dev/blog",
    link: "https://junecarlgenavia.dev/blog",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    title: "LinkedIn",
    value: "linkedin.com/in/junecarlgenavia",
    link: "https://linkedin.com/in/junecarlgenavia",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
    title: "GitHub",
    value: "https://github.com/homurakagarI",
    link: "https://github.com/homurakagarI",
  },
]

export default function ContactPage() {
  const titleSection = useIntersectionObserver({ threshold: 0.1 })
  const formSection = useIntersectionObserver({ threshold: 0.1 }, 200)
  const contactSection = useIntersectionObserver({ threshold: 0.1 }, 400)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormStatus("success")
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
        setFormStatus(null)
      }, 3000)
    }, 1500)
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
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat
          </p>
        </div>
        
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div 
            ref={formSection.ref}
            className={`transition-all duration-1000 transform ${
              formSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="relative p-6 md:p-8 rounded-xl border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-primary/20 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-purple-600/20 blur-xl"></div>
              
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Hello! I'd like to discuss a potential project..."
                    required
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full relative overflow-hidden group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : formStatus === "success" ? (
                      <div className="flex items-center">
                        <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </div>
                    ) : (
                      <>
                        <span className="relative z-10">Send Message</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Methods */}
          <div 
            ref={contactSection.ref}
            className={`transition-all duration-1000 transform ${
              contactSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="h-full flex flex-col">
              <div className="p-6 md:p-8 rounded-xl border-2 border-primary/30 bg-card/50 backdrop-blur-sm mb-6">
                <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
                
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <a 
                      key={method.title}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-input hover:bg-primary/5 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{method.title}</h3>
                        <p className="text-sm text-muted-foreground">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="p-6 md:p-8 rounded-xl border-2 border-primary/30 bg-card/50 backdrop-blur-sm flex-grow">
                <div className="mt-8 pt-8 border-t">
                  <blockquote className="italic text-muted-foreground">
                    "Let's create something amazing together!"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
            <path d="M8.5 8.5v.01"/>
            <path d="M16 15.5v.01"/>
            <path d="M12 12v.01"/>
            <path d="M11 17v.01"/>
            <path d="M7 14v.01"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
