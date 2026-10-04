import React, { useEffect, useRef } from 'react';
import './ConstellationBackground.css';

/**
 * ConstellationBackground
 * A clean, ultra-lightweight floating constellation particle animation.
 * Features:
 * - Dynamic particle count based on viewport size for guaranteed 60fps
 * - Subtle cyan, violet, and stardust white glowing nodes
 * - Delicate distance-based linking lines (constellation network)
 * - Gentle, unobtrusive cursor repulsion & connection lines
 * - Battery-friendly: pauses when tab is hidden or reduced motion is preferred
 */
const ConstellationBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let isTabVisible = true;

    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const speedMultiplier = prefersReducedMotion ? 0.15 : 1;

    // Palette: Cyan, Sky Blue, Violet, Soft White
    const COLOR_PALETTE = [
      { r: 0, g: 212, b: 255 },    // Cyan
      { r: 56, g: 189, b: 248 },   // Sky Blue
      { r: 168, g: 85, b: 247 },   // Violet
      { r: 255, g: 255, b: 255 }   // Stardust White
    ];

    let particles = [];
    const mouse = { x: null, y: null, radius: 140 };

    // Calculate optimal particle count for screen resolution
    const calculateParticleCount = (w, h) => {
      const area = w * h;
      // Scales gracefully: ~30 on mobile, ~60 on standard desktop
      return Math.min(65, Math.max(26, Math.floor(area / 24000)));
    };

    // Initialize or re-initialize particles
    const initParticles = () => {
      const count = calculateParticleCount(width, height);
      particles = [];

      for (let i = 0; i < count; i++) {
        const color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45 * speedMultiplier,
          vy: (Math.random() - 0.5) * 0.45 * speedMultiplier,
          radius: Math.random() * 1.2 + 1.2, // 1.2px to 2.4px
          baseAlpha: Math.random() * 0.35 + 0.35, // 0.35 to 0.70
          pulseSpeed: Math.random() * 0.025 + 0.015,
          pulseAngle: Math.random() * Math.PI * 2,
          color: color
        });
      }
    };

    // Resize handler with Device Pixel Ratio capped at 2 for performance
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);

      // Re-seed or keep within bounds
      if (particles.length === 0) {
        initParticles();
      } else {
        const desiredCount = calculateParticleCount(width, height);
        while (particles.length < desiredCount) {
          const color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.45 * speedMultiplier,
            vy: (Math.random() - 0.5) * 0.45 * speedMultiplier,
            radius: Math.random() * 1.2 + 1.2,
            baseAlpha: Math.random() * 0.35 + 0.35,
            pulseSpeed: Math.random() * 0.025 + 0.015,
            pulseAngle: Math.random() * Math.PI * 2,
            color: color
          });
        }
        if (particles.length > desiredCount) {
          particles.splice(desiredCount);
        }
        // Reposition any outside
        particles.forEach((p) => {
          if (p.x > width) p.x = Math.random() * width;
          if (p.y > height) p.y = Math.random() * height;
        });
      }
    };

    // Mouse movement listeners (using window for smooth global tracking)
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Page Visibility API: pause loop when user switches tabs
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !animationFrameId) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget && !e.toElement) {
        handleMouseLeave();
      }
    });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    handleResize();

    let lastTime = performance.now();
    const maxLinkDistance = 115;
    const maxLinkDistSq = maxLinkDistance * maxLinkDistance;
    const mouseRadiusSq = mouse.radius * mouse.radius;

    // Main animation loop
    const animate = (time) => {
      if (!isTabVisible) {
        animationFrameId = null;
        return;
      }

      const dt = Math.min((time - lastTime) / 16.667, 2.0); // Normalize to 60fps delta
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const pCount = particles.length;

      // 1. Update and draw particles
      for (let i = 0; i < pCount; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Wrap around boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;

        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        // Pulsing opacity
        p.pulseAngle += p.pulseSpeed * dt;
        const currentAlpha = Math.max(0.15, Math.min(0.9, p.baseAlpha + Math.sin(p.pulseAngle) * 0.18));

        // Subtle interactive mouse repulsion & link
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouseRadiusSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            // Gentle soft repulsion
            const force = ((mouse.radius - dist) / mouse.radius) * 0.6;
            p.x += (dx / dist) * force * dt;
            p.y += (dy / dist) * force * dt;

            // Draw delicate line to mouse cursor
            const mouseLineAlpha = (1 - dist / mouse.radius) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${mouseLineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha})`;
        ctx.fill();
      }

      // 2. Draw constellation connection lines
      for (let i = 0; i < pCount; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < pCount; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxLinkDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxLinkDistance) * 0.14;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Elegant gradient-like stroke or subtle cyan/purple blend
            ctx.strokeStyle = `rgba(0, 212, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Teardown
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="constellation-bg-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="constellation-bg-canvas" />
    </div>
  );
};

export default ConstellationBackground;
