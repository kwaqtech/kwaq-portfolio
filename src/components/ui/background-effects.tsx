"use client";

import { useEffect, useState } from "react";

const InteractiveDotGrid = () => {
  useEffect(() => {
    const canvas = document.getElementById("dot-grid-canvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const SPACING = 24; // Distance between dots
    const RADIUS = 180; // Interaction radius

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    const draw = () => {
      time += 0.005; // Extremely slow movement time
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation (easing)
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      // Calculate bounds for drawing dots slightly outside screen for smooth scrolling
      const cols = Math.floor(width / SPACING) + 2;
      const rows = Math.floor(height / SPACING) + 2;

      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          const basePathX = i * SPACING;
          const basePathY = j * SPACING;

          // Subtle organic wave movement
          const waveX = Math.sin(time + basePathY * 0.02) * 1.5;
          const waveY = Math.cos(time + basePathX * 0.02) * 1.5;

          let x = basePathX + waveX;
          let y = basePathY + waveY;

          // Interaction distance
          const dx = mouseX - x;
          const dy = mouseY - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let size = 1;
          let alpha = 0.05; // Very low contrast base opacity
          let r = 255, g = 255, b = 255;

          if (distance < RADIUS) {
            const force = 1 - distance / RADIUS;
            // Easing force for non-linear falloff
            const easeForce = force * force; 
            
            // Subtle attraction towards mouse
            x += dx * easeForce * 0.1;
            y += dy * easeForce * 0.1;
            
            // Increase size and opacity
            size += easeForce * 1.2; // max size ~2.2px
            alpha += easeForce * 0.25; // max alpha ~0.3
            
            // Subtle transition to accent color (5, 150, 105)
            r = Math.floor(255 - (250 * easeForce));
            g = Math.floor(255 - (105 * easeForce));
            b = Math.floor(255 - (150 * easeForce));
          }

          ctx.beginPath();
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas id="dot-grid-canvas" className="fixed inset-0 z-0 pointer-events-none" />;
};

const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById("matrix-canvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) drops[x] = 1;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas id="matrix-canvas" className="fixed inset-0 z-[-1] hidden hacker:block opacity-20 pointer-events-none" />;
};

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);
  const [isHacker, setIsHacker] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Observe theme changes for Matrix rain
    const observer = new MutationObserver(() => {
      setIsHacker(document.documentElement.classList.contains("hacker"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsHacker(document.documentElement.classList.contains("hacker"));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      {mounted && <InteractiveDotGrid />}
      {mounted && isHacker && <MatrixRain />}
    </>
  );
}
