import { Button } from "@/components/ui/button"

export interface Project {
  title: string
  description: string
  link: string
  thumbnail: string
  screenshots?: string[] // Array of screenshot URLs
  technologies?: string[] // Technologies used in the project
  features?: string[] // Key features of the project
  challenges?: string // Challenges faced during development
  outcome?: string // Outcome or results of the project
  weblink?: string // Optional weblink property
}

export function ProjectCard({
  project,
  onView,
}: {
  project: Project
  onView: (project: Project) => void
}) {
  return (
    <div className="group rounded-xl border-2 border-primary/20 hover:border-primary/40 bg-card shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden">
      {/* Image container with overlay */}
      <div className="relative overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            {project.technologies && (
              <div className="flex flex-wrap gap-1 mb-2">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 bg-primary/80 text-primary-foreground rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-0.5 bg-primary/80 text-primary-foreground rounded-full text-xs font-medium">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{project.description}</p>
        
        <Button 
          onClick={() => onView(project)}
          className="mt-auto w-full transition-all duration-300 relative overflow-hidden group/btn"
        >
          <span className="relative z-10">View Project</span>
          <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
        </Button>
      </div>
    </div>
  )
}
