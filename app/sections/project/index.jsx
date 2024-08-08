import { domAnimation, LazyMotion } from "framer-motion";
import { HeadingDivider } from "components";
import { projectData } from "utils/mockProjectData";
import ProjectCard from "./ProjectCard";

export function ProjectsSection() {
	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />

				<div className="container mx-auto px-4 py-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{projectData.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}
