import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

/**
 * CustomCursor Component
 * - Immediate 8px white difference dot
 * - Smooth trailing squircle SVG follower (lerp follow speed: 0.16)
 * - Click down/up scaling physics (dot scale: 4.5, follower scale: 0.4)
 * - Interactive element hover expansions
 * - Touch device detection and viewport leave/enter handling
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const followerRef = useRef(null);

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch support
    if (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      setIsTouchDevice(true);
      return;
    }

    let pageX = -100;
    let pageY = -100;
    let cursorX = -100;
    let cursorY = -100;
    const followSpeed = 0.16;
    let isVisible = false;
    let isClicked = false;
    let isHovered = false;
    let animationFrameId;

    const lerp = (start, end, amount) => (1 - amount) * start + amount * end;

    const handleMouseMove = (e) => {
      pageX = e.clientX;
      pageY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursorX = pageX;
        cursorY = pageY;
        if (dotRef.current) dotRef.current.classList.add('visible');
        if (followerRef.current) followerRef.current.classList.add('visible');
      }

      // Check if hovering over interactive elements
      const target = e.target;
      const interactive = target && target.closest('a, button, input, textarea, select, [role="button"], .btn, .tag, .clickable');
      const nowHovered = !!interactive;

      if (nowHovered !== isHovered) {
        isHovered = nowHovered;
        if (dotRef.current) {
          dotRef.current.classList.toggle('hovered', isHovered);
        }
        if (followerRef.current) {
          followerRef.current.classList.toggle('hovered', isHovered);
        }
      }

      // Immediate positioning for the inner dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pageX}px, ${pageY}px, 0)`;
      }
    };

    const handleMouseDown = () => {
      isClicked = true;
      if (dotRef.current) dotRef.current.classList.add('clicked');
      if (followerRef.current) followerRef.current.classList.add('clicked');
    };

    const handleMouseUp = () => {
      isClicked = false;
      if (dotRef.current) dotRef.current.classList.remove('clicked');
      if (followerRef.current) followerRef.current.classList.remove('clicked');
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.classList.remove('visible');
      if (followerRef.current) followerRef.current.classList.remove('visible');
    };

    const handleMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.classList.add('visible');
      if (followerRef.current) followerRef.current.classList.add('visible');
    };

    // Smooth physics loop for follower
    const renderLoop = () => {
      if (isVisible) {
        cursorX = lerp(cursorX, pageX, followSpeed);
        cursorY = lerp(cursorY, pageY, followSpeed);

        if (followerRef.current) {
          followerRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    renderLoop();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true">
        <div className="custom-cursor-dot-inner" />
      </div>
      <div ref={followerRef} className="custom-cursor-follower" aria-hidden="true">
        <div className="custom-cursor-follower-inner" />
      </div>
    </>
  );
};

export default CustomCursor;
