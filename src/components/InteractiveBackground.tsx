import React, { useEffect, useState } from 'react';

export const InteractiveBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Base dark canvas */}
      <div className="absolute inset-0 bg-[#09090c]" />

      {/* Very subtle architectural grid */}
      <div className="absolute inset-0 bg-fine-grid opacity-60" />

      {/* Very gentle ambient glow that subtly follows pointer on desktop */}
      {isClient && (
        <div
          className="absolute -inset-40 transition-opacity duration-700 hidden lg:block"
          style={{
            background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(210, 255, 58, 0.035), transparent 75%)`,
          }}
        />
      )}

      {/* Fixed soft atmospheric depth at top and bottom */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#D2FF3A]/[0.025] to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[350px] bg-gradient-to-t from-white/[0.015] to-transparent blur-3xl pointer-events-none" />
    </div>
  );
};
