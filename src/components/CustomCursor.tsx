"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Detectar cuando el cursor está sobre elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Cursor principal - Cruz artística */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.05s ease-out',
        }}
      >
        <div
          className={`transition-all duration-200 ${
            isHovering ? 'scale-150 rotate-45' : 'scale-100'
          }`}
        >
          {/* Cruz vertical */}
          <div className="absolute w-[2px] h-6 bg-stone-50 -translate-x-1/2 -translate-y-1/2" />
          {/* Cruz horizontal */}
          <div className="absolute h-[2px] w-6 bg-stone-50 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Cursor secundario - Círculo de seguimiento */}
      <div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.15s cubic-bezier(0.75, 0, 0.27, 1)',
        }}
      >
        <div
          className={`border-2 border-accent rounded-full transition-all duration-200 ${
            isHovering ? 'w-12 h-12 opacity-50' : 'w-8 h-8 opacity-30'
          }`}
        />
      </div>
    </>
  );
}
