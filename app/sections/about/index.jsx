"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Tarun Kumar Das, a passionate Frontend Developer with over 3 years of
							experience in frontend-development, specializing in ReactJS, NextJS and Redux.
						</p>
						<p className="my-3.5">
							Throughout my career, I have been passionate about creating high-quality, responsive
							web applications that are both visually appealing and functionality robust. My
							expertise lies in implementing complex business logic and designing intuitive user
							interfaces that meet the needs of modern web applications. I have a deep understanding
							of web technologies like HTML, CSS, JavaScript and TypeScript, and I'm proficients in
							tools such as Git, VS-Code and Figma. My ability to collaborate effectively with
							cross-functional teams has allowed me to deliver successful projects that exceed
							client expectations.
						</p>
						<p className="my-6">
							At <span className="font-bold">Solute Technolabs</span> (August 2021 - Present), I
							have been responsibe for designing and maintaining responsive web applications,
							focusing on implementing complex business logic with ReactJS, Redux and NextJS. I
							collaborated with cross functional teams and contributed to high-quality intuitive
							user interfaces.
						</p>
						<p>
							At <span className="font-bold">Prismetic</span> (May 2021 - August 2021), I
							specialized in creating user-friendly interfaces and optimizing website performance
							using NextJS. I also integrated RESTful APIs to ensure dynamic and efficient web
							applications.
						</p>
					</div>
				</div>

				{/* <TimeLine /> */}
			</section>
		</LazyMotion>
	);
}
