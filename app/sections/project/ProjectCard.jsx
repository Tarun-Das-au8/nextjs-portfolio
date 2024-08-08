import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { VscSourceControl } from "react-icons/vsc";

const ProjectCard = ({ project }) => {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
			<div className="w-full h-64 relative">
				<Image
					src={project.projectImage}
					alt={project.projectName}
					className="object-cover"
					layout="fill"
					placeholder="blur"
					quality={90}
				/>
			</div>
			<div className="p-4">
				<h2 className="text-xl font-semibold text-gray-800">{project.projectName}</h2>
				<p className="text-sm text-gray-600 mt-2">{project.description}</p>

				<div className="mt-4 flex flex-row items-center space-x-4">
					{project.livePreview && (
						<Link
							href={project.livePreview}
							className="text-blue-600 hover:underline icon-link-btn"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FiExternalLink />
							<span>Demo</span>
						</Link>
					)}
					{project.githubLink && (
						<Link
							href={project.githubLink}
							className="text-gray-600 hover:underline icon-link-btn"
							target="_blank"
							rel="noopener noreferrer"
						>
							<VscSourceControl />
							<span>Source</span>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
