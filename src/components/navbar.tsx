import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Menu } from "lucide-react"
import { Link, useNavigate, useLocation } from "react-router-dom"

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId: string) => {
    // If not on portfolio page, navigate there first
    if (location.pathname !== '/portfolio' && location.pathname !== '/') {
      navigate('/portfolio')
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(`portfolio-${sectionId}`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(`portfolio-${sectionId}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-20 w-full items-center px-4 md:px-8 relative">
        <div className="hidden md:flex items-center">
          <Link className="mr-6 flex items-center space-x-2 group" to="/portfolio">
            <span className="hidden font-bold text-xl md:text-2xl sm:inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:scale-105">JC Genavia</span>
          </Link>
        </div>
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <nav className="flex items-center space-x-6 text-lg md:text-xl font-medium">
            <button className="transition-colors hover:text-foreground/80" onClick={() => scrollToSection('about')}>About</button>
            <button className="transition-colors hover:text-foreground/80" onClick={() => scrollToSection('education')}>Education</button>
            <button className="transition-colors hover:text-foreground/80" onClick={() => scrollToSection('skills')}>Skills</button>
            <button className="transition-colors hover:text-foreground/80" onClick={() => scrollToSection('projects')}>Projects</button>
            <button className="transition-colors hover:text-foreground/80" onClick={() => scrollToSection('certifications')}>Certifications</button>
            <button className="transition-colors hover:text-foreground/80" onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              <DropdownMenuItem onClick={() => scrollToSection('about')}>
                About
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('education')}>
                Education
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('skills')}>
                Skills
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('projects')}>
                Projects
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('certifications')}>
                Certifications
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('contact')}>
                Contact
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}