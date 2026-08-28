import React, { useEffect, useRef } from 'react';
import './SphereBackground.css';

const SphereBackground = ({
  numPoints = 950,
  dotColor = '#00d4ff',
  glowColor = 'rgba(0, 212, 255, 0.3)',
  autoRotateSpeed = 0.002,
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
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

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

    const parent = canvas.parentElement;

    // Interactive mouse movement tracking
    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
      const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);
      targetRotY = mouseX * 0.8;
      targetRotX = -mouseY * 0.7;
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

    parent.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Auto rotation + interactive rotation lerp
      rotY += autoRotateSpeed;
      rotX += (targetRotX - rotX) * 0.05;
      rotY += targetRotY * 0.008;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Large sphere radius
      const dynamicRadius = Math.min(620, Math.min(width, height) * 0.68);
      const cx = width / 2;
      const cy = height / 2;
      const fov = 580; // Perspective depth

      // Project and sort points by Z depth
      const projectedPoints = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        const px = p.x * dynamicRadius;
        const py = p.y * dynamicRadius;
        const pz = p.z * dynamicRadius;

        // Rotation around Y axis
        const x1 = px * cosY + pz * sinY;
        const z1 = -px * sinY + pz * cosY;

        // Rotation around X axis
        const y2 = py * cosX - z1 * sinX;
        const z2 = py * sinX + z1 * cosX;

        // 3D to 2D Perspective projection
        const scale = fov / (fov + z2);
        const x2d = cx + x1 * scale;
        const y2d = cy + y2 * scale;

        const depth = (z2 + dynamicRadius) / (2 * dynamicRadius);
        projectedPoints.push({ x: x2d, y: y2d, z: z2, scale, depth });
      }

      // Depth sorting
      projectedPoints.sort((a, b) => a.z - b.z);

      // Draw 3D points with subtle transparency
      for (let i = 0; i < projectedPoints.length; i++) {
        const pt = projectedPoints[i];
        if (pt.x < 0 || pt.x > width || pt.y < 0 || pt.y > height) continue;

        const size = Math.max(0.6, (1.2 + pt.depth * 2.0) * pt.scale);
        const alpha = Math.max(0.08, 0.12 + pt.depth * 0.7);

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, size, 0, Math.PI * 2);

        if (pt.depth > 0.55) {
          ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
          ctx.shadowColor = glowColor;
          ctx.shadowBlur = 5;
        } else {
          ctx.fillStyle = `rgba(0, 180, 230, ${alpha * 0.5})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      parent.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [numPoints, dotColor, glowColor, autoRotateSpeed]);

  return (
    <div className="sphere-background-container">
      <canvas ref={canvasRef} className="sphere-canvas" />
    </div>
  );
};

export default SphereBackground;
