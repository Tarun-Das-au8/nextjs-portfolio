import PortfolioImg from "public/assets/img/portfolio.webp";
import NetflixCloneImg from "public/assets/img/netflix-clone.webp";
import WeatherAppImg from "public/assets/img/weather.webp";

export const projectData = [
	{
		id: 1,
		projectName: "Portfolio",
		techStack: "NextJS, TailwindCSS",
		projectImage: PortfolioImg,
		description:
			"A responsive and high-performance portfolio built with Next.js and TailwindCSS. It showcases my expertise in frontend development through interactive project displays and optimized performance",
		livePreview: "#",
		githubLink: "#"
	},
	{
		id: 2,
		projectName: "Netflix Clone",
		techStack: "ReactJS, CSS",
		projectImage: NetflixCloneImg,
		description:
			"A Netflix clone offering a seamless browsing experience with a wide range of movies and TV shows. Showcasing the design and layout, emphasizing the resemblance to Netflix’s interface.",
		livePreview: "https://netflix-movies-site.netlify.app/",
		githubLink: "https://github.com/Tarun-Das-au8/Netflix-Clone"
	},
	{
		id: 3,
		projectName: "Weather App",
		techStack: "HTML, CSS, Javascript",
		projectImage: WeatherAppImg,
		description:
			"A real-time weather app built with HTML, CSS, and JavaScript providing detailed forecasts and location-based weather updates.",
		livePreview: "https://forecastly-wiz.netlify.app/",
		githubLink: "https://github.com/Tarun-Das-au8/js-weather-app"
	}
];
