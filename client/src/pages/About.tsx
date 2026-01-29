import { motion } from "framer-motion";
import { Heart, Coffee, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@assets/photo_1769678054761.jpeg";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            ABOUT ME
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full box-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary/50 box-glow relative z-10 bg-muted/50 backdrop-blur-sm">
              <img 
                src={profilePhoto} 
                alt="Nishanth S" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative elements behind */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary rounded-2xl -z-0 opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent rounded-2xl -z-0 opacity-50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-2xl font-display font-bold mb-4 text-white">
              Full Stack Developer & <br />
              <span className="text-primary">Digital Artist</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 text-lg">
              I'm a passionate developer who bridges the gap between code and creativity. 
              With a background in computer science and a love for electronic music, 
              I build immersive web experiences that look as good as they perform.
            </p>
            
            <p className="text-muted-foreground mb-8">
              My approach to development is akin to producing a track: layering clean code, 
              responsive design, and interactive elements to create a harmonious user experience.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-muted/20 border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-secondary" />
                  <span className="font-display">Clean Code</span>
                </CardContent>
              </Card>
              <Card className="bg-muted/20 border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="font-display">Passion</span>
                </CardContent>
              </Card>
              <Card className="bg-muted/20 border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-accent" />
                  <span className="font-display">Energy</span>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
