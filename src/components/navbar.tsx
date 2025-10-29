import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"

export function Navbar() {
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
            <Link className="transition-colors hover:text-foreground/80" to="/about">About</Link>
            <Link className="transition-colors hover:text-foreground/80" to="/education">Education</Link>
            <Link className="transition-colors hover:text-foreground/80" to="/projects">Projects</Link>
            <Link className="transition-colors hover:text-foreground/80" to="/skills">Skills</Link>
            <Link className="transition-colors hover:text-foreground/80" to="/certifications">Certifications</Link>
            <Link className="transition-colors hover:text-foreground/80" to="/contact">Contact</Link>
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
              <DropdownMenuItem>
                <Link to="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/education">Education</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/projects">Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/skills">Skills</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/certifications">Certifications</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/contact">Contact</Link>
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