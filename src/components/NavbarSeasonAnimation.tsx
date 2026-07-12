import React, { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  r: number; // radius or size
  d: number; // density or speed
  color: string;
  angle: number;
  rotationSpeed?: number;
  type?: 'flake' | 'leaf' | 'blossom' | 'sunray';
};

const getSeasonValue = (): 'winter' | 'spring' | 'summer' | 'autumn' => {
  const params = new URLSearchParams(window.location.search);
  const queryOverride = params.get('season');
  const localOverride = localStorage.getItem('season_override');

  const override = queryOverride || localOverride;
  if (
    override === 'winter' ||
    override === 'spring' ||
    override === 'summer' ||
    override === 'autumn'
  ) {
    return override;
  }

  const month = new Date().getMonth();
  if (month === 11 || month === 0 || month === 1) {
    return 'winter';
  } else if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else {
    return 'autumn';
  }
};

const NavbarSeasonAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [season, setSeason] = React.useState<'winter' | 'spring' | 'summer' | 'autumn'>(() => {
    return getSeasonValue();
  });

  useEffect(() => {
    const handleSeasonChange = () => {
      setSeason(getSeasonValue());
    };
    window.addEventListener('seasonchange', handleSeasonChange);
    return () => window.removeEventListener('seasonchange', handleSeasonChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const maxParticles = 40;

    // Initialize particles based on season
    const createParticle = (initY = false): Particle => {
      const x = Math.random() * width;
      const y = initY ? Math.random() * height : -10;

      if (season === 'winter') {
        // Winter Snow
        return {
          x,
          y,
          r: Math.random() * 3 + 1.5,
          d: Math.random() * 0.8 + 0.3, // slow falling
          color: `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.4})`,
          angle: Math.random() * 10,
        };
      } else if (season === 'spring') {
        // Spring blossoms / petals + sun vibes
        return {
          x,
          y,
          r: Math.random() * 4 + 2,
          d: Math.random() * 0.6 + 0.4,
          color: `rgba(255, 182, 193, ${Math.random() * 0.7 + 0.3})`, // Pink petals
          angle: Math.random() * 360,
          rotationSpeed: Math.random() * 0.02 - 0.01,
          type: Math.random() > 0.3 ? 'blossom' : 'sunray',
        };
      } else if (season === 'summer') {
        // Summer golden particles / sparkle floating upwards
        return {
          x,
          y: initY ? Math.random() * height : height + 10, // Floating up
          r: Math.random() * 2 + 1,
          d: -(Math.random() * 0.5 + 0.2), // Negative speed to go up
          color: `rgba(255, 223, 100, ${Math.random() * 0.5 + 0.3})`,
          angle: Math.random() * 10,
        };
      } else {
        // Autumn falling brown/red/orange leaves
        const colors = [
          'rgba(211, 84, 0, 0.7)',  // Orange-red
          'rgba(243, 156, 18, 0.7)', // Yellow-gold
          'rgba(160, 64, 0, 0.7)',   // Red-brown
        ];
        return {
          x,
          y,
          r: Math.random() * 5 + 3, // Slightly larger
          d: Math.random() * 0.7 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: Math.random() * 360,
          rotationSpeed: Math.random() * 0.05 - 0.025,
          type: 'leaf',
        };
      }
    };

    // Pre-populate particles across screen height
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    const drawSpringSun = (ctx: CanvasRenderingContext2D, time: number) => {
      // Gentle sun glow in the top-right corner
      const sunX = width - 40;
      const sunY = 15;
      const sunR = 8 + Math.sin(time * 0.005) * 2;

      ctx.save();
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 235, 120, 0.8)';
      ctx.shadowColor = 'rgba(255, 215, 0, 0.8)';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();
    };

    const drawLeaf = (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);
      ctx.fillStyle = p.color;

      // Draw leaf path
      ctx.beginPath();
      ctx.moveTo(0, -p.r);
      ctx.quadraticCurveTo(p.r, 0, 0, p.r);
      ctx.quadraticCurveTo(-p.r, 0, 0, -p.r);
      ctx.fill();
      ctx.restore();
    };

    const drawBlossom = (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);
      ctx.fillStyle = p.color;

      // Draw blossom petal
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r, p.r * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now();

      // Render season-specific global effects
      if (season === 'spring') {
        drawSpringSun(ctx, time);
      }

      // Update and render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Draw particle based on type/season
        if (season === 'winter') {
          // Soft snowflake circles
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else if (season === 'spring') {
          if (p.type === 'blossom') {
            drawBlossom(ctx, p);
          } else {
            // Soft yellow/white sparkles
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 0.7, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 230, 0.6)';
            ctx.fill();
          }
        } else if (season === 'summer') {
          // Floating golden bubbles / sparkles
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else if (season === 'autumn') {
          drawLeaf(ctx, p);
        }

        // Update positions
        p.y += p.d;

        if (season === 'winter') {
          // Sway side to side
          p.x += Math.sin(p.angle) * 0.3;
          p.angle += 0.01;
        } else if (season === 'spring' || season === 'autumn') {
          // Drift and rotate
          p.x += Math.sin(p.angle * 0.02) * 0.4;
          if (p.rotationSpeed) p.angle += p.rotationSpeed * 100;
        } else if (season === 'summer') {
          // Drift slightly side to side
          p.x += Math.sin(p.angle) * 0.2;
          p.angle += 0.02;
        }

        // Reset particle if it leaves boundary
        if (season === 'summer') {
          if (p.y < -10 || p.x < 0 || p.x > width) {
            particles[i] = createParticle();
          }
        } else {
          if (p.y > height + 10 || p.x < 0 || p.x > width) {
            particles[i] = createParticle();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [season]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none rounded-lg z-0"
    />
  );
};

export default NavbarSeasonAnimation;
