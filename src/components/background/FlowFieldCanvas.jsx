import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 36;

function buildNodes(width, height) {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 1 + Math.random() * 2.4,
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2,
  }));
}

export function FlowFieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let width = 0;
    let height = 0;
    let particles = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      particles = buildNodes(width, height);
    };

    const paint = () => {
      const darkMode = document.documentElement.dataset.theme === "dark";
      const dotColor = darkMode ? "rgba(158, 223, 214, 0.4)" : "rgba(63, 117, 124, 0.32)";
      const lineColor = darkMode ? "rgba(158, 223, 214, 0.08)" : "rgba(63, 117, 124, 0.1)";
      const glowColor = darkMode ? "rgba(109, 185, 176, 0.08)" : "rgba(99, 169, 178, 0.1)";

      ctx.clearRect(0, 0, width, height);

      const radial = ctx.createRadialGradient(
        width * 0.7,
        height * 0.2,
        width * 0.08,
        width * 0.7,
        height * 0.2,
        width * 0.85,
      );
      radial.addColorStop(0, glowColor);
      radial.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < -10 || node.x > width + 10) {
          node.vx *= -1;
        }

        if (node.y < -10 || node.y > height + 10) {
          node.vy *= -1;
        }

        ctx.beginPath();
        ctx.fillStyle = dotColor;
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let index = 0; index < particles.length - 1; index += 1) {
        const current = particles[index];
        const next = particles[index + 1];
        const distance = Math.hypot(current.x - next.x, current.y - next.y);

        if (distance > 135) {
          continue;
        }

        ctx.beginPath();
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
        ctx.moveTo(current.x, current.y);
        ctx.lineTo(next.x, next.y);
        ctx.stroke();
      }
    };

    const renderLoop = () => {
      paint();
      frame = window.requestAnimationFrame(renderLoop);
    };

    const stopLoop = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };

    const startLoop = () => {
      if (reducedMotionQuery.matches) {
        paint();
        return;
      }
      frame = window.requestAnimationFrame(renderLoop);
    };

    const onMotionChange = () => {
      stopLoop();
      startLoop();
    };

    resize();
    startLoop();

    window.addEventListener("resize", resize);
    reducedMotionQuery.addEventListener("change", onMotionChange);

    return () => {
      stopLoop();
      window.removeEventListener("resize", resize);
      reducedMotionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="flow-canvas" aria-hidden="true" />;
}
