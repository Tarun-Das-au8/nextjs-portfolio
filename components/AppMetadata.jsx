const author = "Tarun Kumar Das";
const description =
	"Frontend developer from Sambalpur, Odisha, India, who loves to develop beautiful websites, single page applications, or code from scratch using React and Next.js";
const url = "https://my-portfolio-in-next.netlify.app/";
export const AppMetadata = {
	metadataBase: new URL("https://my-portfolio-in-next.netlify.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.jpeg"
	},
	keywords: [
		"Tarun Kumar Das",
		"Tarun Kumar Das - frontend developer",
		"Frontend developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://my-portfolio-in-next.netlify.app/screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://my-portfolio-in-next.netlify.app/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
