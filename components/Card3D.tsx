"use client";

import React, { useRef, useEffect } from "react";

type Card3DProps = {
  className?: string;
  children: React.ReactNode;
  intensity?: number; // tilt intensity
  glare?: boolean; // show moving glow
};

export default function Card3D({
  className = "",
  children,
  intensity = 22,
  glare = true,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetRotate = useRef({ x: 0, y: 0 });
  const currentRotate = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const targetScale = useRef(1);
  const currentScale = useRef(1);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      mousePos.current = { x: relX, y: relY };

      const pivotX = relX / rect.width - 0.5; // -0.5 .. 0.5
      const pivotY = relY / rect.height - 0.5; // -0.5 .. 0.5
      targetRotate.current = {
        x: -(pivotY * intensity),
        y: pivotX * intensity,
      };

      if (glare) {
        const glowX = Math.round((relX / rect.width) * 100);
        const glowY = Math.round((relY / rect.height) * 100);
        el.style.setProperty("--glow-x", `${glowX}%`);
        el.style.setProperty("--glow-y", `${glowY}%`);
      }
    };

    const onMouseEnter = () => {
      targetScale.current = 1.05;
    };

    const onMouseLeave = () => {
      targetRotate.current = { x: 0, y: 0 };
      targetScale.current = 1;
    };

    const animate = () => {
      const ease = 0.65;
      currentRotate.current.x +=
        (targetRotate.current.x - currentRotate.current.x) * ease;
      currentRotate.current.y +=
        (targetRotate.current.y - currentRotate.current.y) * ease;
      currentScale.current +=
        (targetScale.current - currentScale.current) * 0.25;
      el.style.transform = `perspective(900px) rotateX(${currentRotate.current.x}deg) rotateY(${currentRotate.current.y}deg) scale(${currentScale.current})`;
      rafRef.current = requestAnimationFrame(animate);
    };

    el.addEventListener("mousemove", onMouseMove, { passive: true });
    el.addEventListener("mouseenter", onMouseEnter, { passive: true });
    el.addEventListener("mouseleave", onMouseLeave, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [intensity, glare]);

  return (
    <div
      ref={cardRef}
      className={
        `relative rounded-3xl p-[1px] transition-[box-shadow] duration-200 will-change-transform ` +
        `bg-[radial-gradient(circle_at_var(--glow-x,_50%)_var(--glow-y,_50%),_rgba(0,245,255,0.45),_transparent_60%)] ` +
        `before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-cyan-400/60 before:via-fuchsia-500/30 before:to-cyan-400/60 before:opacity-90 ` +
        `after:content-[''] after:absolute after:inset-[1px] after:rounded-[calc(1.5rem-1px)] after:bg-slate-900/85 after:backdrop-blur-sm hover:shadow-[0_20px_60px_rgba(0,245,255,0.20)] ` +
        className
      }
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative z-10 rounded-[calc(1.5rem-1px)]">{children}</div>
    </div>
  );
}
