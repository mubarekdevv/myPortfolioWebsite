"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import AnimatedBackground from "./animated-background";
import DotLottiePlayer from "./dot-lottie-player";
import { useScrollFadeIn } from "./useScrollAnimation";

function TypingAnimation() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Frontend Developer",
    "UI/UX Designer",
    "Web Developer",
    "Game Developer",
  ];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex];

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setCurrentText(current.substring(0, currentText.length + 1));
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}

export default function Hero() {
  const [leftContentRef, leftContentVisible] = useScrollFadeIn(200);
  const [rightContentRef, rightContentVisible] = useScrollFadeIn(400);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-16"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 z-10"></div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div
            ref={leftContentRef}
            className={`flex-1 text-center lg:text-left space-y-8 scroll-slide-left reveal-gap ${
              leftContentVisible ? "animate" : ""
            }`}
          >
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl lg:text-4xl text-accent font-semibold animate-fade-in flex items-center gap-2">
                <span
                  role="img"
                  aria-label="waving hand"
                  className="inline-block wave-hand pop-in"
                >
                  👋
                </span>{" "}
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                <span className="relative inline-block">
                  Mubarek
                  <div
                    className="absolute bottom-0 left-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(255,0,255,0.45)]"
                    style={{ transform: "translateY(25%)" }}
                  ></div>
                  <div className="absolute -bottom-2 left-2 w-5/6 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-80 blur-sm"></div>
                </span>{" "}
                <span className="text-accent">Jemal</span>
              </h1>
              <div className="text-xl md:text-2xl font-extrabold text-accent/90 drop-shadow-[0_0_14px_rgba(0,245,255,0.7)] h-8">
                <TypingAnimation />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("works")}
                size="lg"
                className="text-lg px-8 bg-accent hover:bg-accent/90 text-slate-900 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_24px_rgba(0,245,255,0.55)] backdrop-blur-sm"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg px-8 border-accent text-accent hover:bg-accent hover:text-slate-900 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_24px_rgba(0,245,255,0.55)] hover:font-semibold"
              >
                Get In Touch
              </Button>
             <a
  href="/Mubarek_Jemal_CV.pdf"
  rel="noopener noreferrer"
  className="inline-flex w-full sm:w-auto"
>
  <Button
    variant="outline"
    size="lg"
    className="text-lg px-8 border-accent text-accent hover:bg-accent hover:text-slate-900 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_24px_rgba(0,245,255,0.55)] hover:font-semibold w-full sm:w-auto"
  >
    View CV
  </Button>
</a>


            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Link
                href="https://github.com/mubarekdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 bg-transparent border-gray-600 text-gray-400 hover:border-accent hover:text-accent hover:bg-accent/10 transform hover:scale-110 transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_18px_rgba(0,245,255,0.55)]"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/mubarekdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 bg-transparent border-gray-600 text-gray-400 hover:border-accent hover:text-accent hover:bg-accent/10 transform hover:scale-110 transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_18px_rgba(0,245,255,0.55)]"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:mubarek@example.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 bg-transparent border-gray-600 text-gray-400 hover:border-accent hover:text-accent hover:bg-accent/10 transform hover:scale-110 transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_18px_rgba(0,245,255,0.55)]"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://mubarekdev.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 bg-transparent border-gray-600 text-gray-400 hover:border-accent hover:text-accent hover:bg-accent/10 transform hover:scale-110 transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_18px_rgba(0,245,255,0.55)]"
                >
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Lottie Animation */}
          <div
            ref={rightContentRef}
            className={`flex-1 flex justify-center lg:justify-end scroll-slide-right reveal-gap ${
              rightContentVisible ? "animate" : ""
            }`}
          >
            <div className="relative">
              <div className="w-96 h-96 sm:w-[26rem] sm:h-[26rem] md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] xl:w-[40rem] xl:h-[40rem] min-w-96 min-h-96 sm:min-w-[26rem] sm:min-h-[26rem] md:min-w-[32rem] md:min-h-[32rem] lg:min-w-[36rem] lg:min-h-[36rem] xl:min-w-[40rem] xl:min-h-[40rem] shrink-0 flex-none relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <DotLottiePlayer
                  src="/Developer%20team%20isometric%20Animation.lottie"
                  className="w-96 h-96 sm:w-[26rem] sm:h-[26rem] md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] xl:w-[40rem] xl:h-[40rem] min-w-96 min-h-96 sm:min-w-[26rem] sm:min-h-[26rem] md:min-w-[32rem] md:min-h-[32rem] lg:min-w-[36rem] lg:min-h-[36rem] xl:min-w-[40rem] xl:min-h-[40rem] shrink-0 flex-none rounded-full relative z-10"
                  autoplay
                  loop
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-accent hover:text-accent/80 hover:bg-accent/10 backdrop-blur-sm"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
