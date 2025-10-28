import { useState, useRef, useEffect } from "react"
import { ProjectCard } from "@/components/ProjectCard"
import type { Project } from "@/components/ProjectCard"
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

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Data-Driven Management System with Geo-Tagging and Cloud Analytics for KM Foundation",
      description: "This capstone project introduces an innovative Data-Driven Management System designed specifically for KM Foundation. The system integrates geo-tagging capabilities with cloud-based analytics to streamline operations and improve decision-making processes.",
      link: "https://github.com/homurakagarI/kkmk-main",
      weblink: "https://kmfi.netlify.app",
      thumbnail: "\KMFI image.jpg",
      screenshots: [
       "\BestCapstone.jpg",
       "\KMFI image.jpg",
       "\kmfi 1.jpg",
       "\KMFI 2.jpg",
       "\KMFI 3.jpg",
       "\KMFI 4.jpg",
       "\kmfi 5.jpg",
       "\KMFI 6.jpg",
       "\KMFI 7.jpg",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API", "AWS"],
      features: [
        "Real-time geo-tagging of resources and activities",
        "Interactive dashboard with advanced analytics",
        "Cloud-based data storage and retrieval",
        "Role-based access control system",
        "Mobile-responsive interface for field workers"
      ],
      challenges: "The main challenge was integrating multiple APIs and ensuring reliable data synchronization between field workers and central administrators. We also had to develop custom visualization tools for the geo-tagged data.",
      outcome: "The system has significantly improved operational efficiency, reducing administrative overhead by 35% and increasing field worker productivity by 28%."
    },
    {
      title: "CL Genavia Air Conditioning & Refrigeration Services Website",
      description: "A modern, responsive website for CL Genavia Air Conditioning & Refrigeration Services. Features include a prominent company logo, animated brand showcase, detailed service listings, gallery, and contact information. The design emphasizes clarity, professionalism, and ease of navigation for both desktop and mobile users.",
      link: "https://github.com/homurakagarI/clservices",
      weblink: "https://clservices.netlify.app/",
      thumbnail: "\\cls1.png",
      screenshots: [
        "\\cls1.png",
        "\\cls2.png",
        "\\cls3.png",
        "\\cls4.png"
      ],
      technologies: ["JavaScript (React)", "JSX", "CSS", "HTML", "Vite"],
      features: [
        "Animated brand showcase and logo",
        "Detailed, visually organized service listings",
        "Responsive gallery of work and services",
        "Contact form and business information",
        "Professional, clean, and mobile-friendly design"
      ],
      challenges: "Ensuring seamless responsiveness across devices, integrating animated and interactive UI elements, and maintaining clarity and professionalism throughout the design.",
      outcome: "The website provides a clear, professional, and user-friendly experience, helping CL Genavia reach more customers and streamline service inquiries."
    },
    {
      title: "RockWell Corporation Employee Management System",
      description: "A modern web-based platform built with PHP, MySQL, HTML5, CSS3, JavaScript, Bootstrap, and jQuery, designed to streamline HR operations by automating employee data management, attendance tracking, leave requests, scheduling, and approvals through a secure, role-based interface.",
      link: "https://github.com/homurakagarI/Employee-Management-Portal",
      weblink: "",
      thumbnail: "\\RC1.png",
      screenshots: [
        "\\RC1.png",
        "\\JCG2.jpg",
        "\\JCG3.jpg",
        "\\JCG4.jpg",
        "\\JCG5.jpg",
        "\\JCG6.jpg",
        "\\JCG7.jpg",
        "\\JCG8.jpg",
        "\\Staff1.jpg",
        "\\Staff2.jpg",
        "\\Staff3.jpg",
        "\\Staff4.jpg"
      ],
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
      features: [
        "Automated employee data management",
        "Attendance tracking and reporting",
        "Leave request and approval workflows",
        "Employee scheduling",
        "Role-based access control",
        "Responsive and user-friendly interface"
      ],
      challenges: "Ensuring secure authentication and authorization for different user roles, integrating real-time attendance tracking, and providing a seamless user experience across devices.",
      outcome: "The platform has streamlined HR operations, reduced manual paperwork, and improved data accuracy and accessibility for RockWell Corporation."
    },
    {
      title: "Raffle Mini-Games System",
      description: "An interactive raffle and mini-games platform featuring multiple game types including spinning wheels, slot machines, lottery draws, and card games. The system provides a comprehensive gaming experience with customizable game modes and participant management.",
      link: "https://github.com/homurakagarI/MiniGames",
      weblink: "https://yaminigames.netlify.app/",
      thumbnail: "\minigames.png",
      screenshots: [
        "\lottery.jpg", 
        "\wheel.jpg", 
        "\Slots.jpg", 
        "\Cards.jpg"
      ],
      technologies: ["React", "TypeScript", "CSS3", "HTML5", "Web Audio API"],
      features: [
        "Multiple game types: Wheel, Slots, Lottery, and Cards",
        "Single Winner and Elimination game modes",
        "Real-time participant management",
        "Sound effects and animations",
        "Responsive design for all devices",
        "Quick guide for easy setup",
        "Customizable game settings"
      ],
      challenges: "The main challenges included implementing smooth animations for different game mechanics, ensuring fair randomization algorithms, and creating an intuitive user interface that works across various game types while maintaining consistent user experience.",
      outcome: "The platform has been successfully deployed and used for multiple events, providing an engaging and fair way to conduct raffles and mini-games with positive user feedback on the interactive experience."
    },
    {
      title: "Lagusan Coffee Sky Deck",
      description: "A modern, responsive coffee shop website built with Next.js, React, and MongoDB. Features interactive menu with filtering, payment integration with MonggoPay, real-time data storage, and mobile-first responsive design optimized for all devices with Tailwind CSS styling.",
      link: "https://github.com/homurakagarI/lagusan-coffee-sky-deck",
      weblink: "https://lagusan.netlify.app/",
      thumbnail: "\L1.jpg",
      screenshots: [
        "\L1.jpg",
        "\L2.jpg",
        "\L3.jpg",
        "\L4.jpg",
        "\L5.jpg",
        "\L6.jpg",
        "\L7.jpg",
        "\LL8.jpg",
        "\L9.jpg",
        "\L10.jpg",
        "\L11.jpg",
        "\L12.jpg",
        "\L13.jpg",
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "MonggoPay", "HTML5", "CSS3"],
      features: [
        "Modern responsive design optimized for mobile and desktop",
        "Interactive menu with filtering by category",
        "Contact form with Firebase Firestore integration",
        "Real-time data storage with Firebase Firestore",
        "Firebase Analytics for user insights",
        "Content management system",
        "Order management system ready for implementation",
        "Smooth scrolling navigation with hamburger menu"
      ],
      challenges: "Integrating Firebase services seamlessly while maintaining fast performance, implementing real-time data synchronization, ensuring optimal mobile responsiveness across all device sizes, and creating an intuitive menu filtering system that works efficiently with Firebase backend.",
      outcome: "Successfully delivered a fully functional coffee shop website with Firebase integration, enabling real-time contact form submissions, newsletter subscriptions, and a foundation for future e-commerce features. The mobile-first approach resulted in excellent user experience across all devices."
    },
    {
      title: "Dataflow",
      description: "A comprehensive data management platform designed to streamline data flow processes, featuring advanced analytics, real-time data processing, and intuitive dashboard interfaces. Built with modern web technologies to provide efficient data handling capabilities.",
      link: "https://github.com/homurakagarI/Dataflow",
      weblink: "https://dataflow-phi.vercel.app/",
      thumbnail: "df thumbnail.png",
      screenshots: [
        "df1.png",
        "df2.png",
        "df3.png",
        "df4.png"
      ],
      technologies: ["React", "TypeScript", "Node.js", "Next.js", "Vercel"],
      features: [
        "Real-time data processing and analytics",
        "Interactive dashboard with data visualization",
        "Efficient data flow management",
        "Modern responsive user interface",
        "Advanced filtering and search capabilities",
        "Cloud-based deployment and scaling"
      ],
      challenges: "The main challenges included implementing efficient data processing algorithms, ensuring real-time updates across multiple data streams, and creating intuitive visualizations that could handle large datasets while maintaining optimal performance.",
      outcome: "Successfully deployed a robust data management platform that provides users with powerful tools for data analysis and visualization, resulting in improved data-driven decision making and streamlined workflows."
    },
    {
      title: "TruckPro Inc.",
      description: "A comprehensive truck and vehicle information system designed to provide detailed vehicle data, specifications, and management capabilities. Features include vehicle registration, detailed information displays, and user-friendly navigation for accessing truck-related data.",
      link: "https://github.com/homurakagarI/TruckInfoSite",
      weblink: "https://truckinfosite.onrender.com/",
      thumbnail: "tf-thumbnail.png",
      screenshots: [
        "tf1.png",
        "tf2.png",
        "tf3.png"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js"],
      features: [
        "Comprehensive vehicle information database",
        "User-friendly vehicle registration system",
        "Detailed vehicle specifications display",
        "Responsive design for all devices",
        "Search and filter functionality",
        "Clean and intuitive user interface"
      ],
      challenges: "The main challenges included designing an efficient database structure for vehicle information, implementing robust search and filtering capabilities, and ensuring the system could handle various types of vehicle data while maintaining fast performance and user-friendly navigation.",
      outcome: "Successfully developed and deployed a functional vehicle information system that provides users with easy access to truck and vehicle data, streamlining the process of vehicle management and information retrieval."
    }
    // Add more projects as needed
  ]

  const shopifyProjects: Project[] = [
    {
      title: "Workshop Emporium",
      description: "A professional Shopify store specializing in industrial workshop equipment including lathe machines, milling machines, and comprehensive tool storage solutions. Built for manufacturers, machinists, and workshop professionals seeking quality precision equipment.",
      link: "https://workshopemporium.com/",
      weblink: "",
      thumbnail: "Shop1.png",
      screenshots: ["Shop1.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Shopify API"],
      features: [
        "Detailed machine specifications and technical data",
        "Tool storage configuration builder",
        "Industrial equipment catalog with filtering",
        "Technical support and consultation",
        "Bulk ordering for workshops",
        "Shipping quotes for heavy machinery",
        "Installation service integration",
        "Warranty and maintenance information"
      ],
      challenges: "Creating detailed technical specification displays for complex machinery, implementing freight shipping calculators for heavy equipment, and building a tool storage configuration system that helps customers design their workshop layout.",
      outcome: "Delivered a comprehensive industrial equipment store that serves professional machinists and workshop owners with detailed product information and specialized purchasing tools for heavy machinery."
    },
    {
      title: "Backyard Supply Direct",
      description: "Backyard Supply Direct began with a simple belief that life's best moments happen outdoors. What started as a passion for creating beautiful, functional spaces has grown into a commitment to helping homeowners transform their backyards into places of comfort, connection, and pride. We're here to make outdoor living effortless and inspiring for everyone.",
      link: "https://backyardsupplydirect.com/",
      weblink: "",
      thumbnail: "Shop2.png",
      screenshots: ["Shop2.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "HTML5"],
      features: [
        "Outdoor furniture and decor collections",
        "Backyard design inspiration gallery",
        "Product visualization tools",
        "Seasonal outdoor living guides",
        "Customer project showcases",
        "Expert outdoor living advice",
        "Weather-resistant product filters",
        "Bundle deals for complete setups"
      ],
      challenges: "Creating an inspiring shopping experience that helps customers envision their outdoor spaces, implementing effective product visualization tools, and curating collections that balance aesthetics with functionality for outdoor environments.",
      outcome: "Successfully launched an outdoor living e-commerce platform that inspires homeowners to create beautiful backyard spaces, with strong customer engagement through project showcases and design inspiration."
    },
    {
      title: "Seraphel Recovery",
      description: "We are more than a store, we are partners in your wellness journey. With a deep commitment to quality, safety, and innovation, we ensure that each solution we provide meets the highest standards. Whether it's red light therapy, hyperbaric chambers, or cold plunge systems, we stand behind products that deliver real, measurable results.",
      link: "https://seraphelrecovery.com/",
      weblink: "",
      thumbnail: "Shop3.png",
      screenshots: ["Shop3.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Shopify Apps"],
      features: [
        "Red light therapy product catalog",
        "Hyperbaric chamber specifications",
        "Cold plunge system configurations",
        "Wellness education and resources",
        "Product comparison tools",
        "Expert consultation booking",
        "Customer success stories",
        "Financing options for equipment",
        "Installation and setup support"
      ],
      challenges: "Presenting complex medical-grade wellness equipment in an accessible way, implementing consultation booking systems, ensuring compliance with health and safety regulations, and educating customers on the science-backed benefits of recovery technologies.",
      outcome: "Created a trusted wellness recovery platform that successfully bridges the gap between advanced recovery technology and everyday wellness seekers, establishing credibility through education and quality assurance."
    },
    {
      title: "Elite Earth Designs",
      description: "Elite Earth Designs was founded with a simple vision: to transform outdoor spaces into sanctuaries of beauty, comfort, and inspiration. We believe that your surroundings shape the way you live, and that every garden, patio, or poolside deserves to be more than functional—it should be extraordinary. Guided by this philosophy, we curate collections that blend timeless design with modern innovation, bringing elegance and ease to your everyday life.",
      link: "https://eliteearthdesigns.com/",
      weblink: "",
      thumbnail: "Shop4.png",
      screenshots: ["Shop4.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Third-party APIs"],
      features: [
        "Curated outdoor furniture collections",
        "Garden and patio design inspiration",
        "Poolside luxury products",
        "Interactive space planning tools",
        "Design consultation services",
        "Seasonal collection showcases",
        "Material and finish customization",
        "Virtual outdoor space visualization",
        "Expert design tips and guides"
      ],
      challenges: "Creating an elevated shopping experience that reflects the luxury positioning of outdoor sanctuary products, implementing sophisticated space visualization tools, and curating collections that balance timeless aesthetics with modern functionality.",
      outcome: "Launched a premium outdoor design e-commerce platform that successfully positions outdoor spaces as extraordinary sanctuaries, attracting discerning customers seeking elegant and innovative outdoor living solutions."
    },
    {
      title: "Green Earth Direct",
      description: "Green Earth Direct exists to help you take control of your energy, food, and future—all from your own backyard. We serve those who value resilience, freedom, and the simple joy of creating something lasting. Together, we're building more than homes; we're nurturing a movement toward conscious, sustainable living for generations to come.",
      link: "https://greenearthdirect.com/",
      weblink: "",
      thumbnail: "Shop 5.png",
      screenshots: ["Shop 5.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "HTML5"],
      features: [
        "Solar energy solutions and equipment",
        "Home gardening and food production systems",
        "Sustainable living product catalog",
        "Off-grid and energy independence tools",
        "Educational resources and guides",
        "Community forum and knowledge sharing",
        "DIY project tutorials",
        "Carbon footprint calculator",
        "Sustainability consultation services"
      ],
      challenges: "Creating an educational platform that empowers customers toward self-sufficiency while maintaining an effective e-commerce experience, building community engagement features, and presenting complex sustainable systems in an accessible way.",
      outcome: "Launched a transformative sustainable living platform that goes beyond commerce to build a community movement, helping customers achieve energy independence and food security while fostering conscious living practices."
    },
    {
      title: "PurexWellness",
      description: "PureXwellness was founded with a simple vision: to bring balance, strength, and renewal into everyday life. We believe that wellness is more than a routine—it's a way of living with intention, purpose, and care. From athletes to hospitality spaces, our journey is built on helping people and businesses thrive through trusted wellness solutions.",
      link: "https://purexwellness.com/",
      weblink: "",
      thumbnail: "Shop 6.png",
      screenshots: ["Shop 6.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Custom Apps"],
      features: [
        "Athletic wellness equipment catalog",
        "Hospitality wellness solutions",
        "Commercial and residential products",
        "Wellness program consultation",
        "Business partnership opportunities",
        "Product customization for facilities",
        "Bulk ordering for commercial clients",
        "Wellness education and resources",
        "Installation and training services"
      ],
      challenges: "Serving both individual athletes and commercial hospitality clients with different needs, creating dual purchasing paths for B2C and B2B customers, and building trust through education while maintaining a seamless shopping experience for diverse customer segments.",
      outcome: "Successfully launched a comprehensive wellness platform that bridges personal and commercial wellness needs, establishing partnerships with hospitality businesses while serving individual wellness enthusiasts with trusted solutions."
    },
    {
      title: "Man Cave Focus",
      description: "Man Cave Focus was born from a simple belief: every man deserves a space that reflects his strength, style, and story. We're not just curators of premium leisure—we're builders of personal sanctuaries. From the first foosball table to the final humidor drawer, every piece we offer is chosen with purpose and pride.",
      link: "https://mancavefocus.com/",
      weblink: "",
      thumbnail: "Shop 7.png",
      screenshots: ["Shop 7.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Shopify API"],
      features: [
        "Premium game room furniture",
        "Foosball and billiards tables",
        "Cigar humidors and accessories",
        "Bar and entertainment systems",
        "Man cave design inspiration",
        "Room layout planning tools",
        "Custom furniture configurations",
        "Style guide and curation",
        "Complete man cave packages"
      ],
      challenges: "Creating a premium shopping experience that helps men visualize and build their ideal personal sanctuary, implementing room planning tools for large furniture pieces, and curating collections that balance functionality with masculine aesthetics and personal expression.",
      outcome: "Launched a premium man cave e-commerce platform that successfully positions leisure products as essential components of personal sanctuaries, helping men create spaces that reflect their unique strength, style, and story."
    },
    {
      title: "Regenex Peak Fitness",
      description: "We are more than a store, we are a destination for performance, recovery, and wellness. Our mission is to provide athletes, fitness enthusiasts, and health seekers with expertly curated tools that help them train harder, recover smarter, and live stronger. Every product in our collection is carefully selected to meet the highest standards of quality, innovation, and effectiveness.",
      link: "https://regenexpeakfitness.com/",
      weblink: "",
      thumbnail: "Shop 8.png",
      screenshots: ["Shop 8.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "HTML5"],
      features: [
        "Performance training equipment",
        "Recovery and wellness tools",
        "Athlete-grade fitness gear",
        "Expert product curation",
        "Training guides and resources",
        "Recovery protocol recommendations",
        "Product effectiveness ratings",
        "Athlete testimonials and reviews",
        "Personalized fitness consultations"
      ],
      challenges: "Curating a diverse product catalog that serves both elite athletes and fitness beginners, establishing credibility through expert selection and validation, and creating educational content that empowers customers to make informed decisions about their training and recovery.",
      outcome: "Established a trusted fitness and wellness destination that bridges the gap between professional-grade equipment and everyday fitness enthusiasts, building a community of customers who train harder, recover smarter, and live stronger."
    },
    {
      title: "Performance Recovery Supply",
      description: "Born and raised in the rugged landscapes of Northern British Columbia, Ruth Saunders has always been driven by strength, discipline, and the pursuit of excellence. As a professional IFBB Physique athlete, martial artist, and lifelong fitness enthusiast, she has spent decades mastering both performance and recovery—understanding that true strength comes not just from how hard you train, but how well you restore. This collection was created from experience—the same methods, tools, and technologies she has relied on to perform at an elite level and maintain balance in a demanding lifestyle. Each product is carefully selected for its proven effectiveness, design integrity, and ability to enhance physical, mental, and emotional recovery. Ruth believes recovery is the foundation of longevity—the difference between burning out and becoming unstoppable. This brand exists to bring you world-class recovery and wellness solutions that merge science, performance, and luxury—so you can perform better, recover deeper, and live stronger every day.",
      link: "https://performancerecoverysupply.com/",
      weblink: "",
      thumbnail: "Shop 9.png",
      screenshots: ["Shop 9.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Shopify Plus"],
      features: [
        "Elite recovery equipment collection",
        "Performance restoration tools",
        "Science-backed wellness products",
        "Professional athlete-tested gear",
        "Recovery protocol guidance",
        "Mental and emotional wellness support",
        "Luxury recovery experiences",
        "Personalized recovery consultations",
        "Longevity and sustainability focus"
      ],
      challenges: "Translating elite athlete expertise into accessible recovery solutions for all levels, maintaining the balance between scientific credibility and luxury positioning, and creating a brand story that authentically connects Ruth's personal journey with customer needs.",
      outcome: "Successfully launched a premium recovery brand built on authentic athletic excellence, merging science, performance, and luxury to help customers perform better, recover deeper, and live stronger—establishing recovery as the foundation of longevity."
    },
    {
      title: "Fireside Luxe",
      description: "Fire Side Luxe was born from a simple idea that warmth should be both felt and seen. We set out to create more than just outdoor pieces; we wanted to design experiences that bring people closer. Every flame, every evening, every gathering begins with craftsmanship, care, and a passion for refined living.",
      link: "https://firesideluxe.com/",
      weblink: "",
      thumbnail: "Shop 10.png",
      screenshots: ["Shop 10.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Google Maps API"],
      features: [
        "Luxury fire pits and outdoor fireplaces",
        "Premium outdoor heating solutions",
        "Gathering space design inspiration",
        "Custom fire feature configurations",
        "Outdoor furniture collections",
        "Evening ambiance lighting",
        "Installation and setup services",
        "Safety and maintenance guides",
        "Complete outdoor living packages"
      ],
      challenges: "Creating an emotional connection between products and the experiences they enable, showcasing warmth and ambiance through digital commerce, implementing custom fire feature configuration tools, and balancing luxury aesthetics with safety and practical considerations.",
      outcome: "Successfully launched a premium outdoor living brand that transforms functional heating products into experiential gathering solutions, helping customers create warm, inviting spaces that bring people closer together through craftsmanship and refined living."
    },
    {
      title: "Amore Culinary Excellence",
      description: "At Amore Culinary Excellence, we believe cooking is more than a daily task; it is a celebration of passion, artistry, and togetherness. Inspired by Italy's rich culinary heritage, we bring the beauty of craftsmanship and the confidence of professional kitchens into every space we serve. Our journey begins with love for food and ends with the joy it creates around the table.",
      link: "https://amoreculinaryexcellence.com/",
      weblink: "",
      thumbnail: "Shop 11.png",
      screenshots: ["Shop 11.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Subscription APIs"],
      features: [
        "Italian-inspired culinary tools",
        "Professional-grade kitchen equipment",
        "Chef-curated product collections",
        "Cooking techniques and tutorials",
        "Recipe collections and inspiration",
        "Kitchen design consultation",
        "Artisan cookware and cutlery",
        "Culinary gift sets",
        "Cooking class partnerships"
      ],
      challenges: "Translating the passion and artistry of Italian culinary heritage into a digital shopping experience, balancing professional-grade quality with home kitchen accessibility, and creating content that inspires both novice cooks and culinary experts to celebrate cooking as an art form.",
      outcome: "Successfully launched a culinary excellence platform that transforms cooking from a daily task into a celebration of passion and artistry, bringing the beauty of Italian craftsmanship and professional kitchen confidence to every customer's table."
    },
    {
      title: "BBQ Nest",
      description: "BBQNEST began with a simple idea to bring people together through the beauty of outdoor living. What started as a passion for great food and warm gatherings has grown into a curated destination for those who believe their backyard should feel like a retreat. Every piece we offer is chosen with care, designed to turn your outdoor space into a haven of comfort, style, and connection.",
      link: "https://bbqnest.com/",
      weblink: "",
      thumbnail: "Shop 12.png",
      screenshots: ["Shop 12.png"],
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Custom APIs"],
      features: [
        "Premium BBQ grills and smokers",
        "Outdoor kitchen equipment",
        "Patio furniture and seating",
        "Outdoor entertaining essentials",
        "Backyard retreat design ideas",
        "Grilling guides and recipes",
        "Complete outdoor living packages",
        "Seasonal outdoor collections",
        "Space planning and consultation"
      ],
      challenges: "Creating a shopping experience that inspires outdoor living transformations, balancing functional BBQ equipment with lifestyle aesthetics, implementing outdoor space planning tools, and curating products that create backyard retreats focused on comfort, style, and connection.",
      outcome: "Successfully launched an outdoor living destination that transforms backyards into retreat-worthy spaces, bringing together BBQ enthusiasts and outdoor living lovers through carefully curated products that facilitate great food, warm gatherings, and meaningful connections."
    }
    // Add more Shopify projects as needed
  ]

  const titleSection = useIntersectionObserver({ threshold: 0.1 })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showingProjectPopup, setShowingProjectPopup] = useState(false)
  const [currentTab, setCurrentTab] = useState<"overview" | "details" | "gallery">("overview")

  function handleViewProject(project: Project) {
    setSelectedProject(project)
    setShowingProjectPopup(true)
    setCurrentTab("overview")
    document.body.style.overflow = "hidden" // Prevent scrolling behind modal
  }
  
  function handleCloseProject() {
    setShowingProjectPopup(false)
    document.body.style.overflow = "" // Re-enable scrolling
    setTimeout(() => setSelectedProject(null), 300)
  }

  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showingProjectPopup) {
        handleCloseProject()
      }
    }

    window.addEventListener('keydown', handleEscKey)
    return () => window.removeEventListener('keydown', handleEscKey)
  }, [showingProjectPopup])

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
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and creative Projects 
          </p>
        </div>
        
        <div className="w-full max-w-6xl">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => {
              const animationDelay = idx * 150;
              const itemSection = useIntersectionObserver({ threshold: 0.1 }, animationDelay);
              
              return (
                <div 
                  key={idx} 
                  ref={itemSection.ref}
                  className={`transition-all duration-1000 transform ${
                    itemSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  }`}
                >
                  <ProjectCard project={project} onView={handleViewProject} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Shopify Projects Section */}
        <div className="w-full max-w-6xl mt-16">
          <div 
            className="w-full text-center mb-10 transition-all duration-1000 transform"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">
              Shopify Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              E-commerce solutions built with Shopify platform
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {shopifyProjects.map((project, idx) => {
              const itemSection = useIntersectionObserver({ threshold: 0.1 }, 0);
              
              return (
                <div 
                  key={idx} 
                  ref={itemSection.ref}
                  className={`transition-all duration-1000 transform ${
                    itemSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  }`}
                >
                  <ProjectCard project={project} onView={handleViewProject} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            showingProjectPopup ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleCloseProject}
        >
          <div 
            className={`relative w-full max-w-4xl mx-auto max-h-[90vh] transition-all duration-500 transform ${
              showingProjectPopup ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-card border border-primary/30 rounded-xl shadow-xl overflow-hidden">
              {/* Header with image */}
              <div className="relative h-56 md:h-72">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h2 className="text-xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                </div>
                <button 
                  onClick={handleCloseProject}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>
              
              {/* Tabs */}
              <div className="border-b border-border">
                <div className="flex">
                  <button
                    className={`px-4 py-3 font-medium text-sm flex-1 md:flex-none md:min-w-[120px] text-center transition-colors
                      ${currentTab === "overview" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
                    onClick={() => setCurrentTab("overview")}
                  >
                    Overview
                  </button>
                  <button
                    className={`px-4 py-3 font-medium text-sm flex-1 md:flex-none md:min-w-[120px] text-center transition-colors
                      ${currentTab === "details" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
                    onClick={() => setCurrentTab("details")}
                  >
                    Details
                  </button>
                  <button
                    className={`px-4 py-3 font-medium text-sm flex-1 md:flex-none md:min-w-[120px] text-center transition-colors
                      ${currentTab === "gallery" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
                    onClick={() => setCurrentTab("gallery")}
                  >
                    Gallery
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 max-h-[50vh] md:max-h-[60vh] overflow-y-auto">
                {/* Overview Tab */}
                {currentTab === "overview" && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Description</h3>
                      <p className="text-muted-foreground">{selectedProject.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Technologies USED</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies?.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 space-y-2">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <span>{selectedProject.technologies?.includes("Shopify") ? "View Website" : "View on GitHub"}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 7h10v10"/>
                          <path d="M7 17 17 7"/>
                        </svg>
                      </a>
                      {selectedProject.weblink && (
                        <a
                          href={selectedProject.weblink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        >
                          <span>View Website</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 7h10v10"/>
                            <path d="M7 17 17 7"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Details Tab */}
                {currentTab === "details" && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {selectedProject.features?.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                      <p className="text-muted-foreground">{selectedProject.challenges}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Outcome</h3>
                      <p className="text-muted-foreground">{selectedProject.outcome}</p>
                    </div>
                  </div>
                )}
                
                {/* Gallery Tab */}
                {currentTab === "gallery" && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    {selectedProject.screenshots?.length ? (
                      selectedProject.screenshots.map((src, i) => (
                        <div key={i} className="border rounded-lg overflow-hidden">
                          <img
                            src={src}
                            alt={`${selectedProject.title} screenshot ${i + 1}`}
                            className="w-full h-auto"
                          />
                        </div>
                      ))
                    ) : (
                      <p className="text-center py-8 text-muted-foreground">No screenshots available</p>
                    )}
                  </div>
                )}
              </div>
              
              {/* Footer */}
              <div className="p-4 border-t border-border flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  <span>Click outside to close</span>
                </div>
                <Button size="sm" onClick={handleCloseProject}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

