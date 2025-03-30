// src/components/GamifiedLandingPage.tsx

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";

export default function GamifiedLandingPage() {
  const router = useRouter();
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices based on viewport width.
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  // For desktop: Left-click starts game
  const handleLeftClick = (event: React.MouseEvent) => {
    if (!isMobile) {
      event.preventDefault();
      if (!gameStarted) {
        setGameStarted(true);
        // Example: Increase score every second
        setInterval(() => {
          setScore((prev) => prev + 10);
        }, 1000);
      }
    }
  };

  // For desktop: Right-click redirects to portfolio
  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default context menu.
    if (!isMobile) {
      router.push("/portfolio");
    }
  };

  // Mobile button to redirect
  const handleMobileRedirect = () => {
    router.push("/portfolio");
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black text-white cursor-pointer"
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      style={{
        backgroundImage: `url(${grainImage.src})`,
        backgroundSize: "cover",
      }}
    >
      {/* Futuristic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900 opacity-75"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {!gameStarted ? (
          <>
            <h1 className="font-serif text-5xl md:text-7xl tracking-wide mb-4">
              Welcome to My Universe
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Left click to start the game, or right click to enter my portfolio.
            </p>
            <p className="text-sm text-gray-400">
              [Desktop only: Left click starts game | Right click redirects]
            </p>
          </>
        ) : (
          <>
            <h1 className="font-serif text-5xl md:text-7xl tracking-wide mb-4">
              Game On!
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Your Score: <span className="text-emerald-300">{score}</span>
            </p>
            <p className="text-sm text-gray-400">
              Keep clicking to rack up points!
            </p>
          </>
        )}
      </div>

      {/* Mobile Redirect Button */}
      {isMobile && (
        <button
          className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          onClick={handleMobileRedirect}
        >
          Enter Portfolio
        </button>
      )}

      {/* Optional: Futuristic orbit effects */}
      <HeroOrbit size={300} rotation={45}>
        <div className="w-4 h-4 bg-emerald-300 rounded-full"></div>
      </HeroOrbit>
      <HeroOrbit size={400} rotation={-30}>
        <div className="w-3 h-3 bg-emerald-300/50 rounded-full"></div>
      </HeroOrbit>
    </div>
  );
}
