'use client';

import { experiencesData } from '@/lib/data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SectionHeading from '../sectionHeading';

const ExperienceSection = () => {
	return (
		<div id="experience" className="w-full bg-white/60 dark:bg-transparent md:py-20 py-6 ">
			<div className="flex flex-col items-center gap-4  w-full z-50 pb-10 ">
				<SectionHeading> My Experience</SectionHeading>
				<VerticalTimeline className="" lineColor="#22c55e">
					<div className="flex flex-col md:w-4/5 justify-center lg:w-full w-full  gap-4 items-center">
						{experiencesData.map((data, index) => {
							return (
								<VerticalTimelineElement
									key={index}
									className="vertical-timeline-element--work"
									contentArrowStyle={{
										borderRight: '2px solid #22c55e',
									}}
									// Remove the lineColor prop
									date={data.date}
									visible
									contentStyle={{
										background: 'rgba(255,255,255,0.4)',
										border: '2px solid hsl(var(--border))',
										boxShadow: 'none',
										outlineColor: '#22c55e',
										backdropFilter: 'blur(30px)',
									}}
									iconStyle={{
										background: `#22c55e`,
										color: '#fff',
									}}
									icon={data.icon}
								>
									<div
										key={index}
										className={`flex  gap-4 items-start flex-row-reverse lg:items-center  text-black dark:text-white  w-full ${
											index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse '
										} `}
									>
										<div className="flex flex-col gap-2 h-full  ">
											<div className="text-xl font-bold tracking-wider capitalize">{data.title}</div>
											<div className="text-lg font-semibold tracking-wider">{data.location}</div>
											<div className="text-sm font-light tracking-wider">{data.description}</div>
										</div>
									</div>
								</VerticalTimelineElement>
							);
						})}
					</div>
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default ExperienceSection;
