import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
  <div className="py-32">
    <div className="container">
      <div className="flex flex-col items-center gap-4">
        <Image src = {memojiImage} className = " size-[100px]" alt="memoji" width={200} height={200} /> 
        <div className="bg-gray-950 border border-gray-850 px-4 py-1.5 inline-flex items-center gap-4">
          <div className="bg-green-500 size-2.5 rounded-full"></div>
          <div className="text-sm font-medium "> Available for new projects </div>
        </div>
      </div>
      <div>
        <h1 className="font-serif text-4xl font-small"> Hi, I'm <span> Akshat Jain </span> </h1>
        <h2> I like learning about tech stuff</h2>
        <p> I'm a software engineer based in Bangalore, India specializing in building (and occasionally designing) exceptional websites, applications, and everything in between. </p>
        <div>
          <button>
            <span>
              Explore my work
              <ArrowDown />
            </span>
          </button>
          <button>
            <span> Emoji </span>
            <span> Get in touch </span>
          </button>
        </div>
      </div>

    </div>
  </div>

);
};
