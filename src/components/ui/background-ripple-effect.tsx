"use client";
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BackgroundRippleEffectProps {
  children?: React.ReactNode;
  className?: string;
  rippleColor?: string;
  squareSize?: number;
  gridGap?: number;
  duration?: number;
}

export const BackgroundRippleEffect: React.FC<BackgroundRippleEffectProps> = ({
  children,
  className,
  rippleColor = "#ffffff",
  squareSize = 4,
  gridGap = 20,
  duration = 15,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let ripples: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      maxRadius: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const addRipple = (x: number, y: number) => {
      ripples.push({
        x,
        y,
        radius: 0,
        opacity: 1,
        maxRadius: Math.random() * 100 + 50,
      });
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid dots
      for (let x = 0; x < canvas.width; x += gridGap) {
        for (let y = 0; y < canvas.height; y += gridGap) {
          ctx.fillStyle = `${rippleColor}20`;
          ctx.fillRect(x, y, squareSize, squareSize);
        }
      }
    };

    const drawRipples = () => {
      ripples.forEach((ripple, index) => {
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = `${rippleColor}${Math.floor(ripple.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ripple.radius += 2;
        ripple.opacity -= 0.02;

        if (ripple.opacity <= 0 || ripple.radius > ripple.maxRadius) {
          ripples.splice(index, 1);
        }
      });
    };

    const animate = () => {
      drawGrid();
      drawRipples();
      animationId = requestAnimationFrame(animate);
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      addRipple(x, y);
    };

    const handleRandomRipples = () => {
      if (Math.random() < 0.02) {
        addRipple(Math.random() * canvas.width, Math.random() * canvas.height);
      }
    };

    resizeCanvas();
    animate();

    // Add random ripples
    const randomInterval = setInterval(handleRandomRipples, 100);

    canvas.addEventListener("click", handleClick);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(randomInterval);
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [rippleColor, squareSize, gridGap, duration]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-auto"
        style={{ zIndex: 1 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
