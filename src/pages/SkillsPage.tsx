const techStack = [
	{ name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
	{ name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
	{ name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
	{ name: "TailwindCSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
	{ name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
	{ name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
	{ name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
	{ name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
	{ name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
	{ name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
	{ name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
	{ name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
	{ name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
]

export default function SkillsPage() {
	return (
		<section className="py-8 md:py-16 lg:py-24 bg-muted/50 w-full px-2 sm:px-4 md:px-8 overflow-hidden">
			<div className="w-full flex flex-col items-center gap-8 text-center">
				<h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
					Skills & Technologies
				</h2>
				
				{/* Carousel Container */}
				<div className="relative w-full max-w-7xl">
					{/* Gradient overlays */}
					<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/50 to-transparent z-10 pointer-events-none" />
					<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/50 to-transparent z-10 pointer-events-none" />
					
					{/* Scrolling Container */}
					<div className="flex overflow-hidden">
						<div className="flex animate-scroll gap-12 items-center py-8">
							{/* First set of logos */}
							{techStack.map((tech, index) => (
								<div
									key={`first-${index}`}
									className="flex flex-col items-center justify-center gap-3 min-w-[120px] group"
								>
									<div className="w-20 h-20 flex items-center justify-center rounded-lg bg-background/80 border border-border p-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
										<img
											src={tech.img}
											alt={tech.name}
											className="w-full h-full object-contain transition-all duration-300"
											onError={(e) => {
												e.currentTarget.onerror = null;
												e.currentTarget.src = 'https://placehold.co/100?text=' + tech.name;
											}}
										/>
									</div>
									<span className="text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">
										{tech.name}
									</span>
								</div>
							))}
							{/* Duplicate set for seamless loop */}
							{techStack.map((tech, index) => (
								<div
									key={`second-${index}`}
									className="flex flex-col items-center justify-center gap-3 min-w-[120px] group"
								>
									<div className="w-20 h-20 flex items-center justify-center rounded-lg bg-background/80 border border-border p-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
										<img
											src={tech.img}
											alt={tech.name}
											className="w-full h-full object-contain transition-all duration-300"
											onError={(e) => {
												e.currentTarget.onerror = null;
												e.currentTarget.src = 'https://placehold.co/100?text=' + tech.name;
											}}
										/>
									</div>
									<span className="text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">
										{tech.name}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
