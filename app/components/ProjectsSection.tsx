"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
	{
		title: "TasteHaven",
		description:
			"A fast food website.",
		image: "/tastehaven .jpg", 
		tags: ["React", "Tailwind CSS", "TypeScript", "Netlify"],
		url: "https://tastehavenn.netlify.app",
	},
	{
		title: "FilmHorizon",
		description: "A platform to explore movies and film reviews and information.",
		image: "/filmhorizon.jpg", 
		tags: ["React", "JavaScript", "Tailwind CSS", "Netlify"],
		url: "https://filmhorizonn.netlify.app",
	},
	{
		title: "Get Fullstacked",
		description: "A mentorship recruitement page for full-stack web development.",
		image: "/gfs.jpg", 
		tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
		url: "https://getfullstacked.dev",
	},
	{
		title: "MinInk",
		description: "A user-authenticated blogging platform where users can create, edit, and manage posts with image uploads and a modern UI.",
		image: "/mindink.jpg", 
		tags: ["Next.js", "React", "Tailwind CSS"],
		url: "https://mind-ink.netlify.app/",
	},
];

export default function ProjectsSection() {
	return (
		<section id="projects" className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.a
							key={index}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 block"
						>
							<div className="aspect-video relative overflow-hidden">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, i) => (
										<span
											key={i}
											className="text-sm px-3 py-1 bg-gray-800 rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
}
