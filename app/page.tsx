'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FrontendPortfolio() {
	return (
		<main className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
			{/* Hero Section with Gradient Background and Animated Text */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10" />
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
				</div>

				<div className="relative z-10 text-center px-4">
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
						<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Sarah Parker</h1>
						<p className="text-xl md:text-2xl text-gray-300 mb-8">Frontend Developer & UI/UX Enthusiast</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm">
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">React</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Next.js</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">TypeScript</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Tailwind CSS</span>
						</div>
					</motion.div>
				</div>

				<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
					<motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-gray-400">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
					</motion.div>
				</div>
			</section>

			{/* Projects Section with Card Hover Effects */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
						Featured Projects
					</motion.h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{[
							{
								title: 'E-commerce Dashboard',
								description: 'A modern dashboard with dark mode, real-time charts, and responsive design',
								image: '/laptop.jpg',
								tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
							},
							{
								title: 'Social Media App',
								description: 'Full-featured social platform with real-time messaging and notifications',
								image: '/code.jpg',
								tags: ['Next.js', 'Socket.io', 'Prisma', 'TailwindCSS'],
							},
						].map((project, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
							>
								<div className="aspect-video relative overflow-hidden">
									<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
									<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">{project.title}</h3>
									<p className="text-gray-400 mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag, i) => (
											<span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
												{tag}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Skills Section with Animated Progress Bars */}
			<section className="py-20 px-4 bg-gray-900/50">
				<div className="max-w-4xl mx-auto">
					<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
						Technical Skills
					</motion.h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{[
							{ skill: 'React/Next.js', level: 95 },
							{ skill: 'TypeScript', level: 90 },
							{ skill: 'UI/UX Design', level: 85 },
							{ skill: 'CSS/Sass/Tailwind', level: 95 },
							{ skill: 'JavaScript', level: 90 },
							{ skill: 'Responsive Design', level: 95 },
						].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="space-y-2"
							>
								<div className="flex justify-between text-sm">
									<span>{item.skill}</span>
									<span>{item.level}%</span>
								</div>
								<div className="h-2 bg-gray-800 rounded-full overflow-hidden">
									<motion.div
										initial={{ width: 0 }}
										whileInView={{ width: `${item.level}%` }}
										viewport={{ once: true }}
										transition={{ duration: 1, ease: 'easeOut' }}
										className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
									/>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section with Enhanced Glassmorphism Effect */}
			<section className="py-20 px-4">
				<div className="max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="relative p-12 rounded-3xl overflow-hidden backdrop-blur-xl border border-gray-800 bg-gradient-to-br from-gray-900/90 to-gray-900/50"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
						<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
						<div className="relative z-10">
							<motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
								<h2 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
									Let&apos;s Connect
								</h2>
								<p className="text-gray-400 text-center mb-8">Ready to collaborate or have a project in mind? Let&apos;s make something amazing together.</p>
							</motion.div>
							<div className="flex flex-wrap justify-center gap-6">
								<motion.a
									href="#"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-blue-500/20 rounded-2xl hover:from-blue-500/20 hover:to-blue-500/30 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
								>
									<svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
									<span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors">GitHub</span>
								</motion.a>
								<motion.a
									href="#"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500/10 to-purple-500/20 rounded-2xl hover:from-purple-500/20 hover:to-purple-500/30 border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
								>
									<svg className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
									<span className="font-medium text-purple-400 group-hover:text-purple-300 transition-colors">LinkedIn</span>
								</motion.a>
								<motion.a
									href="#"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500/10 to-pink-500/20 rounded-2xl hover:from-pink-500/20 hover:to-pink-500/30 border border-pink-500/20 hover:border-pink-500/30 transition-all duration-300"
								>
									<svg className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
										<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
									</svg>
									<span className="font-medium text-pink-400 group-hover:text-pink-300 transition-colors">Twitter</span>
								</motion.a>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
