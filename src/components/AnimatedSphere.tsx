import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedSphereProps {
  size?: number;
  className?: string;
}

const AnimatedSphere = ({ size = 300, className = "" }: AnimatedSphereProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    let angle = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      const cx = size / 2;
      const cy = size / 2;
      const r = size * 0.38;
      const dots: { x: number; y: number; z: number }[] = [];

      const rows = 28;
      const cols = 36;

      for (let i = 0; i <= rows; i++) {
        const phi = (Math.PI * i) / rows;
        const rowR = Math.sin(phi);
        const y3d = Math.cos(phi);
        for (let j = 0; j < cols; j++) {
          const theta = (2 * Math.PI * j) / cols + angle;
          const x3d = rowR * Math.cos(theta);
          const z3d = rowR * Math.sin(theta);
          dots.push({ x: x3d, y: y3d, z: z3d });
        }
      }

      dots.sort((a, b) => a.z - b.z);

      dots.forEach(({ x, y, z }) => {
        const scale = (z + 1.5) / 2.5;
        const px = cx + x * r;
        const py = cy - y * r;
        const dotSize = 1.5 + scale * 3.5;
        const alpha = 0.08 + scale * 0.92;

        ctx.beginPath();
        ctx.arc(px, py, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      angle += 0.004;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [size]);

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="animate-pulse-glow"
      />
    </motion.div>
  );
};

export default AnimatedSphere;
