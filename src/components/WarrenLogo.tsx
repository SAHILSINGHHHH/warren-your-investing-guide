import { useEffect, useRef } from "react";

interface WarrenLogoProps {
  size?: number;
  className?: string;
}

const WarrenLogo = ({ size = 280, className = "" }: WarrenLogoProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sphereSize = size * 0.65;
  const canvasSize = size;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvasSize * dpr;
    canvas.height = canvasSize * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, canvasSize, canvasSize);

    const cx = canvasSize / 2;
    const cy = canvasSize / 2;
    const radius = sphereSize / 2;

    // Sphere parameters matching the logo
    const rows = 20;
    const cols = 28;

    // Slight tilt to match the logo's perspective
    const tiltX = -0.15; // slight tilt backward
    const tiltY = 0.3;   // slight rotation right

    const dots: { x: number; y: number; z: number; size: number; alpha: number }[] = [];

    for (let i = 0; i < rows; i++) {
      const phi = (Math.PI * (i + 0.5)) / rows;
      for (let j = 0; j < cols; j++) {
        const theta = (2 * Math.PI * j) / cols;

        // 3D coordinates on unit sphere
        let x = Math.sin(phi) * Math.cos(theta);
        let y = Math.cos(phi);
        let z = Math.sin(phi) * Math.sin(theta);

        // Apply tilt rotation (X-axis)
        const cosX = Math.cos(tiltX);
        const sinX = Math.sin(tiltX);
        const y2 = y * cosX - z * sinX;
        const z2 = y * sinX + z * cosX;
        y = y2;
        z = z2;

        // Apply rotation (Y-axis)
        const cosY = Math.cos(tiltY);
        const sinY = Math.sin(tiltY);
        const x2 = x * cosY + z * sinY;
        const z3 = -x * sinY + z * cosY;
        x = x2;
        z = z3;

        // Only render front-facing dots (z > threshold for slight wrap)
        if (z < -0.15) continue;

        // Depth-based scaling
        const depthScale = 0.5 + 0.5 * z;
        const dotSize = 1.2 + depthScale * 3.2;

        // Lighting: light from upper-right
        const lightX = 0.4;
        const lightY = -0.5;
        const lightZ = 0.7;
        const lightLen = Math.sqrt(lightX * lightX + lightY * lightY + lightZ * lightZ);
        const dotProduct = (x * lightX + y * lightY + z * lightZ) / lightLen;
        const lighting = Math.max(0, dotProduct);

        // Alpha based on depth and lighting
        const alpha = 0.08 + lighting * 0.92;

        const screenX = cx + x * radius;
        const screenY = cy + y * radius;

        dots.push({ x: screenX, y: screenY, z, size: dotSize, alpha });
      }
    }

    // Sort by z for proper depth ordering
    dots.sort((a, b) => a.z - b.z);

    // Draw dots
    dots.forEach((dot) => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${dot.alpha})`;
      ctx.fill();
    });
  }, [canvasSize, sphereSize]);

  // Font size proportional to logo size
  const fontSize = size * 0.075;
  const letterSpacing = size * 0.018;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <canvas
        ref={canvasRef}
        style={{ width: canvasSize, height: canvasSize }}
      />
      <span
        style={{
          fontSize: `${fontSize}px`,
          letterSpacing: `${letterSpacing}px`,
          marginTop: `-${size * 0.12}px`,
        }}
        className="text-primary/70 font-light tracking-[0.2em]"
      >
        Warren
      </span>
    </div>
  );
};

export default WarrenLogo;
