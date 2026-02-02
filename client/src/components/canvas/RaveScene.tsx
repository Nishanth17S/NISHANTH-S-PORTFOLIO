import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Stars(props: any) {
  const ref = useRef<any>(null);
  const { mouse, viewport } = useThree();
  
  // Use a stable random seed or just manual generation
  const sphere = useRef(new Float32Array(5000 * 3)).current;
  useEffect(() => {
    for (let i = 0; i < 5000; i++) {
      const r = 1.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      sphere[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      sphere[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      sphere[i * 3 + 2] = r * Math.cos(phi);
    }
  }, [sphere]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Base rotation
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;

      // Mouse influence - smooth lag effect
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-background pointer-events-none">
      {/* Dynamic Cursor Glow */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none transition-transform duration-300 ease-out z-0"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
    </div>
  );
}

export { Stars };
