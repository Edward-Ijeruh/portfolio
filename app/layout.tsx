import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Frontend Developer Portfolio',
	description:
		'Professional portfolio showcasing frontend development expertise, projects, and technical skills. Built with modern web technologies focusing on performance and user experience.',
	keywords: ['Frontend Developer', 'Web Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
	authors: [{ name: 'Your Name' }],
	creator: 'Your Name',
	openGraph: {
		title: 'Frontend Developer Portfolio',
		description: 'Professional portfolio showcasing frontend development expertise and projects.',
		url: 'https://your-domain.com',
		siteName: 'Frontend Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Frontend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Frontend Developer Portfolio',
		description: 'Professional portfolio showcasing frontend development expertise and projects.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
