const skills = [
	{
		category: "Frontend",
		items: [
			{ name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", hoverColor: "hover:bg-blue-500" },
			{ name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", hoverColor: "hover:bg-yellow-500" },
			{ name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", hoverColor: "hover:bg-blue-600" },
			{ name: "TailwindCSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", hoverColor: "hover:bg-cyan-500" },
		],
	},
	{
		category: "Backend",
		items: [
			{ name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", hoverColor: "hover:bg-green-600" },
			{ name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", hoverColor: "hover:bg-indigo-600" },
			{ name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", hoverColor: "hover:bg-red-600" },
		],
	},
	{
		category: "Database",
		items: [
			{ name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", hoverColor: "hover:bg-blue-700" },
			{ name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", hoverColor: "hover:bg-green-700" },
			{ name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", hoverColor: "hover:bg-blue-600" },
			{ name: "Cloud Firestore", img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", hoverColor: "hover:bg-amber-500" },
		],
	},
	{
		category: "Tools",
		items: [
			{ name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", hoverColor: "hover:bg-orange-700" },
			{ name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", hoverColor: "hover:bg-yellow-600" },
			{ name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", hoverColor: "hover:bg-amber-500" },
		],
	},
]

export default function SkillsPage() {
	return (
		<section className="py-8 md:py-16 lg:py-24 bg-muted/50 w-full px-2 sm:px-4 md:px-8">
			<div className="w-full flex flex-col items-center gap-8 text-center">
				<h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
					Skills & Technologies
				</h2>
				<div className="w-full grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{skills.map((group) => (
						<div key={group.category} className="flex flex-col items-center gap-4">
							<h3 className="font-semibold text-lg mb-2">{group.category}</h3>
							<div className="flex flex-col gap-4 w-full">
								{group.items.map((skill) => (
									<div
										key={skill.name}
										className={`rounded-lg border p-4 bg-black text-white flex flex-col items-center justify-center transition-colors duration-300 ${skill.hoverColor} hover:text-white transform hover:scale-105`}
									>
										<img
											src={skill.img}
											alt={skill.name}
											className="mb-2 w-16 h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
											onError={(e) => {
												e.currentTarget.onerror = null;
												e.currentTarget.src = 'https://placehold.co/100?text=' + skill.name;
											}}
										/>
										<span>{skill.name}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
