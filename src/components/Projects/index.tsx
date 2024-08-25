'use client';

import React from 'react';

import { projects } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import SectionHeading from '../sectionHeading';
import Project from './Project';

export default function Projects() {
	const { ref } = useSectionInView('Projects', 0.5);

	return (
		<section ref={ref} id="projects" className="scroll-mt-28 mb-10">
			<SectionHeading>My projects</SectionHeading>
			<>
				{projects.map((project, index) => (
					<React.Fragment key={index}>
						<Project
							name={project.name}
							description={project.description}
							features={project.features}
							technologies={project.technologies}
							links={project.links}
							image={project.image}
						/>
					</React.Fragment>
				))}
			</>
		</section>
	);
}
