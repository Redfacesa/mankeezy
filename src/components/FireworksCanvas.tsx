import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

const COLORS = ['#ffd700', '#ff4b4b', '#ffffff', '#ff9f43', '#f5e6c8', '#c9a227'];

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function FireworksCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    let lastBurst = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const burst = (x: number, y: number) => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const count = 48 + Math.floor(Math.random() * 32);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + rand(-0.2, 0.2);
        const speed = rand(1.5, 5.5);
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: rand(50, 90),
          color,
          size: rand(1.2, 2.8),
        });
      }
    };

    const loop = (t: number) => {
      if (t - lastBurst > rand(600, 1400)) {
        burst(rand(canvas.width * 0.15, canvas.width * 0.85), rand(canvas.height * 0.1, canvas.height * 0.45));
        lastBurst = t;
      }

      ctx.fillStyle = 'rgba(5, 5, 5, 0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter((p) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.045;
        p.vx *= 0.985;
        const alpha = 1 - p.life / p.maxLife;
        if (alpha <= 0) return false;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        return true;
      });

      raf = requestAnimationFrame(loop);
    };

    burst(canvas.width * 0.5, canvas.height * 0.25);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="fireworks-canvas" aria-hidden />;
}
