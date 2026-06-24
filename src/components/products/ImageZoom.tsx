"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
  zoomFactor?: number;
  lensSize?: number;
  resultSize?: number;
}

export default function ImageZoom({
  src,
  alt,
  className = "",
  zoomFactor = 3,
  lensSize = 120,
  resultSize = 420,
}: ImageZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [bgPos, setBgPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      let lx = x - lensSize / 2;
      let ly = y - lensSize / 2;
      lx = Math.max(0, Math.min(lx, rect.width - lensSize));
      ly = Math.max(0, Math.min(ly, rect.height - lensSize));

      setLensPos({ x: lx, y: ly });
      setBgPos({ x: lx * zoomFactor, y: ly * zoomFactor });
    },
    [zoomFactor, lensSize]
  );

  return (
    <div className="flex gap-5 items-start w-full">
      {/* Main Image */}
      <div
        ref={containerRef}
        className={`relative overflow-hidden cursor-crosshair flex-1 ${className}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <Image src={src} alt={alt} fill className="object-cover" />

        {/* Lens */}
        {isHovering && (
          <div
            className="absolute border-2 border-[#c9a96e] bg-[#c9a96e]/10 pointer-events-none z-10 rounded-sm"
            style={{
              left: lensPos.x,
              top: lensPos.y,
              width: lensSize,
              height: lensSize,
            }}
          />
        )}
      </div>

      {/* Zoomed Result Panel — only on xl screens */}
      {isHovering && (
        <div
          className="hidden xl:block shrink-0 rounded-2xl border border-gray-200 shadow-md overflow-hidden"
          style={{
            width: resultSize,
            height: resultSize,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${resultSize * zoomFactor}px ${resultSize * zoomFactor}px`,
            backgroundPosition: `-${bgPos.x}px -${bgPos.y}px`,
          }}
        />
      )}
    </div>
  );
}