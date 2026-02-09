import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 36;

// Create random particles for the background animation
function createParticles(width, height) {
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
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check if user prefers reduced motion
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    let animationFrame = 0;
    let canvasWidth = 0;
    let canvasHeight = 0;
    let particles = [];

    // Setup canvas size and particles
    function setupCanvas() {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;

      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(canvasWidth * pixelRatio);
      canvas.height = Math.floor(canvasHeight * pixelRatio);
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      particles = createParticles(canvasWidth, canvasHeight);
    }

    // Draw the animation frame
    function drawFrame() {
      const isDarkMode = document.documentElement.dataset.theme === "dark";
      
      // Set colors based on theme
      const dotColor = isDarkMode ? "rgba(158, 223, 214, 0.4)" : "rgba(63, 117, 124, 0.32)";
      const lineColor = isDarkMode ? "rgba(158, 223, 214, 0.08)" : "rgba(63, 117, 124, 0.1)";
      const glowColor = isDarkMode ? "rgba(109, 185, 176, 0.08)" : "rgba(99, 169, 178, 0.1)";

      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Draw background glow
      const gradient = ctx.createRadialGradient(
        canvasWidth * 0.7,
        canvasHeight * 0.2,
        canvasWidth * 0.08,
        canvasWidth * 0.7,
        canvasHeight * 0.2,
        canvasWidth * 0.85
      );
      gradient.addColorStop(0, glowColor);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < -10 || particle.x > canvasWidth + 10) {
          particle.vx *= -1;
        }
        if (particle.y < -10 || particle.y > canvasHeight + 10) {
          particle.vy *= -1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = dotColor;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw lines between nearby particles
      for (let i = 0; i < particles.length - 1; i++) {
        const current = particles[i];
        const next = particles[i + 1];
        const distance = Math.hypot(current.x - next.x, current.y - next.y);

        if (distance > 135) continue;

        ctx.beginPath();
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
        ctx.moveTo(current.x, current.y);
        ctx.lineTo(next.x, next.y);
        ctx.stroke();
      }
    }

    // Animation loop
    function animate() {
      drawFrame();
      animationFrame = window.requestAnimationFrame(animate);
    }

    // Stop animation
    function stopAnimation() {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    }

    // Start animation (or draw single frame if reduced motion)
    function startAnimation() {
      if (reducedMotionQuery.matches) {
        drawFrame();
        return;
      }
      animationFrame = window.requestAnimationFrame(animate);
    }

    // Handle motion preference changes
    function handleMotionChange() {
      stopAnimation();
      startAnimation();
    }

    // Initialize
    setupCanvas();
    startAnimation();

    // Event listeners
    window.addEventListener("resize", setupCanvas);
    reducedMotionQuery.addEventListener("change", handleMotionChange);

    // Cleanup
    return () => {
      stopAnimation();
      window.removeEventListener("resize", setupCanvas);
      reducedMotionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="flow-canvas" aria-hidden="true" />;
}
