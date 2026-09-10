"use client";

import { useEffect, useRef } from "react";

type Node = {
  radius: number;
  speedX: number;
  speedY: number;
  x: number;
  y: number;
};

function createNodes(width: number, height: number) {
  const count = Math.max(34, Math.min(72, Math.round((width * height) / 19000)));

  return Array.from({ length: count }, (): Node => ({
    x: Math.random() * width,
    y: Math.random() * height,
    speedX: (Math.random() - 0.5) * 0.34,
    speedY: (Math.random() - 0.5) * 0.34,
    radius: Math.random() * 1.35 + 0.7,
  }));
}

export function NetworkMotion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;
    let height = 0;
    let nodes: Node[] = [];
    let width = 0;

    const draw = () => {
      const linkDistance = Math.max(116, Math.min(210, width * 0.16));
      context.clearRect(0, 0, width, height);

      for (let index = 0; index < nodes.length; index += 1) {
        const source = nodes[index];

        for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
          const target = nodes[nextIndex];
          const distanceX = source.x - target.x;
          const distanceY = source.y - target.y;
          const distance = Math.hypot(distanceX, distanceY);

          if (distance > linkDistance) continue;

          context.beginPath();
          context.moveTo(source.x, source.y);
          context.lineTo(target.x, target.y);
          context.strokeStyle = `rgba(190, 237, 255, ${(1 - distance / linkDistance) * 0.4})`;
          context.lineWidth = 0.8;
          context.stroke();
        }
      }

      nodes.forEach((node) => {
        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(220, 249, 255, .88)";
        context.fill();
      });
    };

    const update = () => {
      nodes.forEach((node) => {
        node.x += node.speedX;
        node.y += node.speedY;

        if (node.x < 0 || node.x > width) node.speedX *= -1;
        if (node.y < 0 || node.y > height) node.speedY *= -1;
      });
    };

    const animate = () => {
      update();
      draw();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * devicePixelRatio);
      canvas.height = Math.round(height * devicePixelRatio);
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      nodes = createNodes(width, height);
      draw();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    if (!reducedMotion) animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="network-motion" aria-hidden="true" />;
}
