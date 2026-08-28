import React, { useEffect, useRef } from 'react';
import './SphereBackground.css';

const SphereBackground = ({
  numPoints = 650,
  baseRadius = 320,
  dotColor = '#00d4ff',
  glowColor = 'rgba(0, 212, 255, 0.4)',
  autoRotateSpeed = 0.003,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    // Generate points on a sphere using the Fibonacci Sphere Algorithm
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // Radius at y
      const theta = phi * i; // Golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({ x, y, z });
    }

    let rotX = 0.2;
    let rotY = 0;
    let targetRotX = 0.2;
    let targetRotY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isHovered = false;

    // Handle mouse movement for interactive 3D rotation
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
      mouseY = (e.clientY - rect.top - height / 2) / (height / 2);
      targetRotY = mouseX * 0.8;
      targetRotX = -mouseY * 0.8;
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      const dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    handleResize();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Auto rotation + interactive rotation lerp
      rotY += autoRotateSpeed;
      if (isHovered) {
        rotX += (targetRotX - rotX) * 0.05;
        rotY += (targetRotY * 0.01);
      }

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Responsive radius calculation
      const dynamicRadius = Math.min(baseRadius, Math.min(width, height) * 0.38);
      const cx = width / 2;
      const cy = height / 2;
      const fov = 450; // Field of view depth

      // Project and sort points by Z depth so front dots render over back dots
      const projectedPoints = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // 3D coordinates scaled by radius
        const px = p.x * dynamicRadius;
        const py = p.y * dynamicRadius;
        const pz = p.z * dynamicRadius;

        // Rotation around Y axis
        const x1 = px * cosY + pz * sinY;
        const z1 = -px * sinY + pz * cosY;

        // Rotation around X axis
        const y2 = py * cosX - z1 * sinX;
        const z2 = py * sinX + z1 * cosX;

        // Perspective projection
        const scale = fov / (fov + z2);
        const x2d = cx + x1 * scale;
        const y2d = cy + y2 * scale;

        // Depth cue (1 in front, 0 in back)
        const depth = (z2 + dynamicRadius) / (2 * dynamicRadius);
        projectedPoints.push({ x: x2d, y: y2d, z: z2, scale, depth });
      }

      // Sort by depth
      projectedPoints.sort((a, b) => a.z - b.z);

      // Draw dots
      for (let i = 0; i < projectedPoints.length; i++) {
        const pt = projectedPoints[i];
        if (pt.x < 0 || pt.x > width || pt.y < 0 || pt.y > height) continue;

        const size = Math.max(0.6, (1.2 + pt.depth * 2.2) * pt.scale);
        const alpha = Math.max(0.08, 0.15 + pt.depth * 0.8);

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, size, 0, Math.PI * 2);

        // Front dots get extra brightness and slight cyan glow
        if (pt.depth > 0.65) {
          ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
          ctx.shadowColor = glowColor;
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = `rgba(0, 180, 230, ${alpha * 0.6})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }

      ctx.shadowBlur = 0; // Reset shadow for next frame
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [numPoints, baseRadius, dotColor, glowColor, autoRotateSpeed]);

  return (
    <div className="sphere-background-container">
      <canvas ref={canvasRef} className="sphere-canvas" />
    </div>
  );
};

export default SphereBackground;
