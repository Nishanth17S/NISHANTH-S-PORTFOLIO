import { Canvas } from "@react-three/fiber";
import { Stars } from "@/components/canvas/RaveScene";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container z-10 px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm font-display tracking-widest uppercase mb-4 box-glow">
            Available for Hire
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x pb-4 leading-tight max-w-4xl mx-auto">
            NISHANTH S BUILDING RELIABLE SYSTEMS WITH ELEGANT USER EXPERIENCE
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-body mb-8"
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
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white font-display uppercase tracking-wider box-glow border-none">
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 hover:text-white font-display uppercase tracking-wider border-glow">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}
