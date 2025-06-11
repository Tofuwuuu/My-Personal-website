"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  rotation: number;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const colors = ['#3b82f6', '#6366f1', '#8b5cf6', '#d946ef', '#3b82f6'];
  
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      // Increase particle count for more coverage
      const count = Math.floor(window.innerWidth / 20); 
      
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 3 + Math.random() * 30, // Varied sizes for depth
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: 15 + Math.random() * 30, // Slower movements
          delay: Math.random() * 15, // More varied delays
          rotation: Math.random() * 360 // Random rotation
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="animated-background">
      {/* Animated Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            transform: `rotate(${particle.rotation}deg)`
          }}
        />
      ))}
      
      {/* Animated Wave Effect */}
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      
      {/* Additional Subtle Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-blue-100 to-transparent dark:from-transparent dark:via-blue-900 dark:to-transparent"
        style={{ mixBlendMode: 'overlay' }}
      ></div>
    </div>
  );
};

export default AnimatedBackground; 