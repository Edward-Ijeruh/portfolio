import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Edward Ijeruh - Frontend Developer",
	description:
		"Welcome to my portfolio! I am a passionate frontend developer specializing in creating beautiful, responsive, and user-centric web applications. With expertise in modern JavaScript frameworks and UI/UX principles, I transform designs into seamless interactive experiences.",
	keywords: [
		"Frontend Developer",
		"Web Developer",
		"React Developer",
		"Next.js",
		"TypeScript",
		"JavaScript",
		"UI/UX",
		"Responsive Design",
		"Web Animation",
		"Modern Web Development",
		"CSS Expert",
		"Performance Optimization",
		"Web Accessibility",
		"Component Design",
		"[Your Name]",
	],
	authors: [{ name: "Edward Ijeruh" }],
	creator: "Edward Ijeruh",
	openGraph: {
		title: "Edward Ijeruh - Frontend Developer Portfolio",
		description:
			"Passionate frontend developer crafting beautiful and interactive web experiences. Explore my projects and frontend development expertise.",
		url: "https://edwardijeruh.netlify.app/",
		siteName: "Edward Ijeuh - Portfolio",
		images: [
			{
				url: "/eddie.jpg",
				width: 1200,
				height: 630,
				alt: "Edward Ijeruh - Frontend Developer Portfolio",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Edward Ijeruh - Frontend Developer",
		description:
			"Passionate frontend developer crafting beautiful and interactive web experiences. Explore my projects and frontend development expertise.",
		creator: "@edwardijeruh",
		images: ["/eddie.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
