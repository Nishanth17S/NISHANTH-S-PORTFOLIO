import { useRef, useState, useEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Stars(props: any) {
  const ref = useRef<any>(null);
  const { mouse, viewport } = useThree();
  
  const sphere = useMemo(() => {
    const points = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const r = 1.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      points[i * 3 + 2] = r * Math.cos(phi);
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;

      const targetX = mouse.x * (viewport.width / 100);
      const targetY = mouse.y * (viewport.height / 100);
      
      ref.current.position.x += (targetX - ref.current.position.x) * 0.05;
      ref.current.position.y += (targetY - ref.current.position.y) * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ff00ff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function RaveScene() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile('ontouchstart' in window);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isMobile) return <div className="fixed inset-0 z-0 bg-background pointer-events-none" />;

  return (
    <div className="fixed inset-0 z-0 bg-background pointer-events-none overflow-hidden">
      {/* Darker Primary Neon Spotlight */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-15 blur-[120px] pointer-events-none mix-blend-screen transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)`,
          transform: `translate(${mousePos.x - 400}px, ${mousePos.y - 400}px)`,
        }}
      />

      {/* Darker Secondary Cyan Trail Glow */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none mix-blend-overlay transition-transform duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle, hsl(var(--secondary) / 0.4) 0%, transparent 70%)`,
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
        }}
      />

      {/* Dimmer Cyberpunk Grid/Mesh Light Effect */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, hsl(var(--primary)) 0%, transparent 40%)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
    </div>
  );
}

export { Stars };
