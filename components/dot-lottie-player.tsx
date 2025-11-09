"use client";

import { useEffect } from "react";

type DotLottiePlayerProps = {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function DotLottiePlayer({
  src,
  loop = true,
  autoplay = true,
  className,
  style,
}: DotLottiePlayerProps) {
  useEffect(() => {
    const existing = document.querySelector(
      "script[data-dotlottie-player]"
    ) as HTMLScriptElement | null;
    if (existing) return;

    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js";
    script.async = true;
    script.setAttribute("data-dotlottie-player", "true");
    document.head.appendChild(script);

    return () => {
      // Keep the script cached for subsequent mounts; don't remove to avoid flicker
    };
  }, []);

  return (
    <dotlottie-player
      src={src}
      loop={loop}
      autoplay={autoplay}
      class={className}
      style={style}
    ></dotlottie-player>
  );
}
