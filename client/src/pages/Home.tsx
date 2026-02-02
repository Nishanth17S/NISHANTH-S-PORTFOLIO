import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@/components/canvas/RaveScene";
import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(mouseY, [-500, 500], [5, -5]);
  const rotateY = useTransform(mouseX, [-500, 500], [-5, 5]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-start overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container z-10 px-4 md:px-12 flex flex-col items-start text-left">
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 max-w-4xl"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-primary/50 bg-primary/10 text-primary text-xs font-display tracking-widest uppercase mb-4 box-glow">
            Available for Hire
          </span>
          <h1 className="font-display font-black leading-tight flex flex-col items-start">
            <motion.span 
              className="text-3xl md:text-5xl lg:text-7xl text-white pb-2"
              whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
            >
              NISHANTH S
            </motion.span>
            <motion.span 
              className="text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x"
              whileHover={{ scale: 1.02 }}
            >
              BUILDING RELIABLE SYSTEMS WITH ELEGANT USER EXPERIENCE
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl font-body mb-8"
        >
          Creative Technologist focused on immersive and functional web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/projects">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white font-display uppercase tracking-wider box-glow border-none group">
              View Projects <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 hover:text-white font-display uppercase tracking-wider border-glow transition-all active:scale-95">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-10 text-muted-foreground"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
