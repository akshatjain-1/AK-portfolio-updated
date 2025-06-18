import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/sections/HeroOrbit";
import ReactIcon from "@/assets/icons/structure.png";
import NextjsIcon from "@/assets/icons/node-js.png";
import TailwindIcon from "@/assets/icons/css-3.png";

export interface Project {
  title: string;
  description: string;
  githubLink: string;
  techStack: { name: string; icon: JSX.Element }[];
}


const PROJECTS: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my projects and skills, built with Next.js and Tailwind CSS.",
    githubLink: "https://github.com/yourusername/portfolio",
    techStack: [
      { name: "React", icon: <Image src={ReactIcon} alt="React" width={24} height={24} /> },
      { name: "Next.js", icon: <Image src={NextjsIcon} alt="Next.js" width={24} height={24} /> },
      { name: "Tailwind CSS", icon: <Image src={TailwindIcon} alt="Tailwind CSS" width={24} height={24} /> },
    ],
  },
  {
    title: "E-commerce App",
    description:
      "A modern e-commerce application with a custom checkout flow, built using React and Node.js.",
    githubLink: "https://github.com/yourusername/ecommerce-app",
    techStack: [
      { name: "React", icon: <Image src={ReactIcon} alt="React" width={24} height={24} /> },
      { name: "Next.js", icon: <Image src={NextjsIcon} alt="Next.js" width={24} height={24} /> },
      { name: "Tailwind CSS", icon: <Image src={TailwindIcon} alt="Tailwind CSS" width={24} height={24} /> },
    ],
  },
  {
    title: "Open Source CLI Tool",
    description:
      "A command-line interface tool that streamlines developer workflows for building and deploying apps.",
    githubLink: "https://github.com/yourusername/cli-tool",
    techStack: [
      { name: "Node.js", icon: <span className="text-xl">🟢</span> },
      { name: "TypeScript", icon: <span className="text-xl">🔷</span> },
    ],
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative z-0 overflow-x-clip">
      {/* Background + Grain & Orbit Elements */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,_transparent,_black_50%,_black_100%,_transparent)] pointer-events-none">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
            
          }}
        />
        
        
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">
            My Projects
          </h2>
          <p className="mt-4 text-white/60 md:text-lg">
            Explore some of the work I’ve done recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="relative bg-gray-950 border border-gray-850 p-6 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white/70 mb-4">{project.description}</p>

              {/* Tech Stack Icons */}
              <div className="flex gap-3 mb-4">
                {project.techStack.map((tech) => (
                  <div key={tech.name} className="tooltip" title={tech.name}>
                    {tech.icon}
                  </div>
                ))}
              </div>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 rounded-md hover:bg-white/10 transition-colors duration-300"
              >
                View on GitHub
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0C4.477 0 0 4.477 0 10a10 10 0 006.838 9.49c.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.157-1.109-1.465-1.109-1.465-.906-.62.07-.607.07-.607 1.003.07 1.532 1.03 1.532 1.03.89 1.526 2.336 1.085 2.904.83.09-.646.348-1.085.634-1.335-2.22-.252-4.555-1.11-4.555-4.944 0-1.092.39-1.986 1.03-2.685-.104-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.563 9.563 0 0110 4.843c.85.004 1.705.115 2.506.338 1.91-1.295 2.75-1.026 2.75-1.026.544 1.376.202 2.393.1 2.646.64.699 1.03 1.593 1.03 2.685 0 3.84-2.338 4.687-4.567 4.934.357.31.678.927.678 1.868 0 1.35-.012 2.438-.012 2.77 0 .268.18.58.688.48A10.004 10.004 0 0020 10c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};