import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function Stars(props: any) {
  const ref = useRef<any>(null);
  
  const sphere = useMemo(() => {
    const points = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      // Random point in sphere
      const r = 1.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      points[i * 3] = x;
      points[i * 3 + 1] = y;
      points[i * 3 + 2] = z;
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
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
          blending={2} // Additive blending
        />
      </Points>
    </group>
  );
}

function Grid() {
  return (
    <gridHelper 
      args={[100, 100, 0xff00ff, 0x220022]} 
      position={[0, -1, 0]} 
      rotation={[0, 0, 0]}
    />
  );
}

export default function RaveScene() {
  return (
    <div className="fixed inset-0 z-0 bg-background pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
    </div>
  );
}

export { Stars, Grid };
