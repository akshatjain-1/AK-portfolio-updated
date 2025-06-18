// src/sections/About.tsx

import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import profileImage from "@/assets/images/book-cover.png"; // Replace with your actual profile image
import { HeroOrbit } from "@/components/sections/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const AboutSection = () => {
  // List of tech domains you work in
  const techDomains = [
    { name: "Web Development", icon: <StarIcon className="w-6 h-6 text-emerald-300" /> },
    { name: "Full-Stack", icon: <SparkleIcon className="w-6 h-6 text-emerald-300" /> },
    { name: "Machine Learning", icon: <StarIcon className="w-6 h-6 text-emerald-300" /> },
    { name: "UI/UX Design", icon: <SparkleIcon className="w-6 h-6 text-emerald-300" /> },
    // Add more domains as needed...
  ];

  return (
    <section id="about" className="py-32 relative z-0 overflow-x-clip">
      {/* Background Grain & Orbit Elements */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_top,_transparent,_black_50%,_black_100%,_transparent)] pointer-events-none">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
            
          }}
        />
        
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-850">
            <Image
              src={profileImage}
              alt="Profile Image"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          {/* About Info Card */}
          <div className="bg-gray-950 border border-gray-850 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">
              About Me
            </h2>
            <p className="text-white/70 mb-6">
              I'm Akshat Jain, a software engineer passionate about building
              exceptional digital experiences. I specialize in web development,
              full-stack solutions, and exploring emerging technologies in machine learning.
            </p>
            <p className="text-white/60">
              I love turning complex problems into simple, beautiful interfaces.
            </p>
          </div>
        </div>

        {/* Tech Domains Cards */}
        <div className="mt-16">
          <h3 className="text-center font-serif text-2xl md:text-3xl tracking-wide mb-8">
            My Domains
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {techDomains.map((domain) => (
              <div
                key={domain.name}
                className="bg-gray-950 border border-gray-850 p-4 rounded-xl flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="mb-2">{domain.icon}</div>
                <span className="text-white/80 font-medium">{domain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
