
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  connections: number[];
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mousePositionRef = useRef({ x: -1000, y: -1000 });
  
  // Define helper functions outside the useEffect scope
  const getRandomColor = () => {
    const colors = [
      'rgba(155, 135, 245, ',  // Purple
      'rgba(106, 143, 255, ',  // Blue
      'rgba(255, 255, 255, '   // White
    ];
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const opacity = Math.random() * 0.5 + 0.1;
    
    return `${color}${opacity})`;
  };
  
  const initializeParticles = (canvas: HTMLCanvasElement) => {
    const particleCount = Math.min(Math.floor(window.innerWidth * 0.06), 120); // Increased density
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.4, // Slightly slower for smoother movement
        speedY: (Math.random() - 0.5) * 0.4,
        color: getRandomColor(),
        connections: []
      });
    }
    
    particlesRef.current = particles;
  };
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Resize canvas to full window
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Re-initialize particles when resizing
        initializeParticles(canvas);
      }
    };
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize(); // Initial setup
    
    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges with slight damping for natural effect
        if (p.x < 0 || p.x > canvas.width) {
          p.speedX *= -0.95;
          p.x = p.x < 0 ? 0 : canvas.width;
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.speedY *= -0.95;
          p.y = p.y < 0 ? 0 : canvas.height;
        }
        
        // Interactive behavior: particles slightly attracted to mouse
        const mouseX = mousePositionRef.current.x;
        const mouseY = mousePositionRef.current.y;
        const distToMouse = Math.sqrt(
          Math.pow(mouseX - p.x, 2) + 
          Math.pow(mouseY - p.y, 2)
        );
        
        if (distToMouse < 200 && distToMouse > 50) {
          const angle = Math.atan2(mouseY - p.y, mouseX - p.x);
          const force = 0.02;
          p.speedX += Math.cos(angle) * force;
          p.speedY += Math.sin(angle) * force;
          
          // Limit max speed
          const maxSpeed = 2;
          const currentSpeed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY);
          if (currentSpeed > maxSpeed) {
            p.speedX = (p.speedX / currentSpeed) * maxSpeed;
            p.speedY = (p.speedY / currentSpeed) * maxSpeed;
          }
        }
        
        // Add slight friction to stabilize movement
        p.speedX *= 0.99;
        p.speedY *= 0.99;
        
        // Draw particle with glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow after drawing particle
      }
      
      // Draw connections between nearby particles with improved gradient effect
      const maxDistance = Math.min(canvas.width, canvas.height) * 0.15; // Responsive distance
      
      // Draw mouse connections first (if mouse is on canvas)
      if (mousePositionRef.current.x > 0 && mousePositionRef.current.y > 0) {
        for (let i = 0; i < particlesRef.current.length; i++) {
          const p = particlesRef.current[i];
          const dx = p.x - mousePositionRef.current.x;
          const dy = p.y - mousePositionRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance * 1.5) {
            const opacity = 1 - (distance / (maxDistance * 1.5));
            ctx.strokeStyle = `rgba(155, 135, 245, ${opacity * 0.5})`;
            ctx.lineWidth = opacity * 2;
            
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mousePositionRef.current.x, mousePositionRef.current.y);
            ctx.stroke();
          }
        }
      }
      
      // Draw connections between particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p1 = particlesRef.current[i];
        
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            
            // Create gradient for connection line - FIX: Properly format RGBA values
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            
            // Extract the color and opacity parts correctly
            const color1Parts = p1.color.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9.]+)\s*\)/);
            const color2Parts = p2.color.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9.]+)\s*\)/);
            
            if (color1Parts && color2Parts) {
              const r1 = color1Parts[1];
              const g1 = color1Parts[2];
              const b1 = color1Parts[3];
              const a1 = parseFloat(color1Parts[4]) * opacity;
              
              const r2 = color2Parts[1];
              const g2 = color2Parts[2];
              const b2 = color2Parts[3];
              const a2 = parseFloat(color2Parts[4]) * opacity;
              
              gradient.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, ${a1})`);
              gradient.addColorStop(1, `rgba(${r2}, ${g2}, ${b2}, ${a2})`);
            } else {
              // Fallback if regex doesn't match
              gradient.addColorStop(0, `rgba(155, 135, 245, ${opacity * 0.3})`);
              gradient.addColorStop(1, `rgba(106, 143, 255, ${opacity * 0.3})`);
            }
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = opacity * 1.5;
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

export default ParticleBackground;
