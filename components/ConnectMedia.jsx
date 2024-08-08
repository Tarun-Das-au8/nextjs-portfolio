"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "utils/motions";
import { SOCIAL_MEDIA } from "../constants";
import { FiDownload } from "react-icons/fi";

const RESUME_URL =
	"https://drive.google.com/file/d/1Ty7fKyxOYjjMbb-nMGvnZyb3RyEl54yc/view?usp=sharing";

export function ConnectMedia() {
	return (
		<LazyMotion features={domAnimation}>
			<m.nav role="menu" initial={initial} animate={animate} exit={exit} transition={transition}>
				<ul className="flex items-center gap-5">
					{SOCIAL_MEDIA.map((item) => (
						<li key={item.id}>
							<a
								href={item.url}
								target="_blank"
								aria-label={item.title}
								title={item.title}
								className="text-2xl"
							>
								{item.icon}
							</a>
						</li>
					))}
					<li>
						<a
							href={RESUME_URL}
							target="_blank"
							aria-label="Download Resume"
							title="Download Resume"
							className="text-2xl"
						>
							<FiDownload />
						</a>
					</li>
				</ul>
			</m.nav>
		</LazyMotion>
	);
}
