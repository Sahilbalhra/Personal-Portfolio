import About from '@/components/About';
import FloatingNavBar from '@/components/BottomNav/FloatingNavBar';
import Contact from '@/components/Contact';
import ExperienceSection from '@/components/Experience/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Hero from '@/components/hero';
import { Spotlight } from '@/components/ui/Spotlight';
import { menus } from '@/utils/objects/Sections';

export default function Home() {
	return (
		<div className="relative h-screen min-w-full flex flex-col items-center px-1 md:px-20 dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-x-hidden">
			<div className="fixed inset-0 -z-10 h-full w-full dark:hidden bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
			<Hero />
			<Spotlight className="-top-20 left-10 md:left-60 md:-top-20" />
			<About />
			<Skills />
			<ExperienceSection />
			<Projects />
			<Contact />
			<FloatingNavBar menus={menus} />
		</div>
	);
}
