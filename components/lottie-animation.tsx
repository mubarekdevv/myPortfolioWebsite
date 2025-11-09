"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

declare global {
  interface Window {
    lottie: any;
  }
}

type LottieAnimationProps = {
  src?: string;
  loop?: boolean;
  autoplay?: boolean;
};

export default function LottieAnimation({
  src,
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    const loadLottie = async () => {
      try {
        if (!containerRef.current || !isMounted) return;

        // Check if animation file exists by trying to fetch it
        const animationPath =
          src || "https://assets9.lottiefiles.com/packages/lf20_kyu7xb1v.json";

        if (window.lottie) {
          try {
            animationRef.current = window.lottie.loadAnimation({
              container: containerRef.current,
              renderer: "svg",
              loop,
              autoplay,
              path: animationPath,
            });

            animationRef.current.addEventListener("DOMLoaded", () => {
              if (isMounted) {
                setIsLoaded(true);
                setHasError(false);
              }
            });

            animationRef.current.addEventListener("error", () => {
              if (isMounted) {
                setHasError(true);
                setIsLoaded(false);
              }
            });
          } catch (error) {
            console.warn(
              "Lottie animation failed to load, using fallback image"
            );
            if (isMounted) {
              setHasError(true);
              setIsLoaded(false);
            }
          }
        }
      } catch (error) {
        console.warn("Lottie script failed to load, using fallback image");
        if (isMounted) {
          setHasError(true);
          setIsLoaded(false);
        }
      }
    };

    // Load Lottie script if not already loaded
    if (!window.lottie) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.10.2/lottie.min.js";
      script.async = true;
      script.onload = () => {
        if (isMounted) {
          loadLottie();
        }
      };
      script.onerror = () => {
        console.warn("Failed to load Lottie script, using fallback image");
        if (isMounted) {
          setHasError(true);
          setIsLoaded(false);
        }
      };
      document.head.appendChild(script);

      return () => {
        isMounted = false;
        if (animationRef.current) {
          animationRef.current.destroy();
        }
        // Clean up script if component unmounts quickly
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    } else {
      loadLottie();
    }

    return () => {
      isMounted = false;
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, []);

  // Fallback to profile image if Lottie fails or animation file doesn't exist
  if (hasError || (!isLoaded && !window.lottie)) {
    return (
      <div className="w-full h-full max-w-[500px] mx-auto relative z-10 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=400&width=400&text=Mubarek+Dev"
          alt="Mubarek Dev"
          width={400}
          height={400}
          className="w-full h-full object-cover rounded-full border-4 border-accent/20 shadow-2xl animate-pulse"
        />
      </div>
    );
  }

  return (
    <>
      {/* Loading state */}
      {!isLoaded && (
        <div className="w-full h-full max-w-[500px] mx-auto relative z-10 flex items-center justify-center">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-accent/20 bg-slate-800/50 animate-pulse flex items-center justify-center">
            <div className="text-accent text-lg font-medium">Loading...</div>
          </div>
        </div>
      )}

      {/* Lottie animation container */}
      <div
        ref={containerRef}
        className={`w-full h-full max-w-[500px] mx-auto relative z-10 transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
}
