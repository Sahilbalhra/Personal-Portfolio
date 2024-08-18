import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import ThemeSwitch from '@/components/ThemeSwitch';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Sahil',
	description:
		'Explore the innovative and dynamic world of Sahil, a passionate software developer specializing in front-end technologies and UI/UX design. Discover projects that blend functionality with aesthetics, powered by the latest tech stacks.',
	keywords:
		'Sahil, Software Developer, Front-end Developer, UI/UX Design, React Developer, Next.js, Portfolio,Back-end Developer,Computer Science',
	authors: [{ name: 'Sahil' }],
	robots: 'index, follow',
	icons: { icon: '/sahil_logo.svg' },
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						{/* <Header /> */}
						{children}
						{/* <BottomNavigation /> */}
						<Toaster position="top-right" />
						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
