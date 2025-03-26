import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg"; 
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
  <div className="py-32 md:py-42 lg:py-62 relative z-0 overflow-x-clip">
    <div className="absolute inset-0 -z-30 opacity-5" style = {{
      backgroundImage: `url(${grainImage.src})`
      
    }}></div>
    <div className="size-[620px] hero-ring"></div>
    <div className="size-[820px] hero-ring"></div>
    <div className="size-[1020px] hero-ring"></div>
    <div className="size-[1220px] hero-ring"></div>
    <HeroOrbit size = {800} rotation = {-72}>
          <StarIcon className = " size-28 text-emerald-300" />
    </HeroOrbit>

    <HeroOrbit size = {550} rotation = {20}>
          <StarIcon className = " size-12  text-emerald-300" />
    </HeroOrbit>

    <div className="container">
      <div className="flex flex-col items-center gap-4">
        <Image src = {memojiImage} className = " size-[100px]" alt="memoji" width={200} height={200} /> 
        <div className="bg-gray-950 border border-gray-850 px-4 py-1.5 inline-flex items-center gap-4">
          <div className="bg-green-500 size-2.5 rounded-full"></div>
          <div className="text-sm font-medium "> Available for new projects </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto ">
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide "> Hi, I'm <span> Akshat Jain </span> </h1>
        <h2 className="font-serif text-xl text-center mt-4 tracking-wide "> I like learning about tech stuff</h2>
        <p className="mt-4 text-center text-white/60 md:text-lg"> I'm a software engineer based in Bangalore, India specializing in building (and occasionally designing) exceptional websites, applications, and everything in between. </p>
      </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold"> Explore my work</span>
             
              <ArrowDown className = "size-4"/>
          
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold "> Get in touch </span>
          </button>
        </div>
      

    </div>
  </div>

);
};
