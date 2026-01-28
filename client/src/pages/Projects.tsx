import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Cyberpunk Dashboard",
    description: "A real-time analytics dashboard with a futuristic UI design, featuring live data visualization and customizable widgets.",
    tags: ["React", "D3.js", "Tailwind"],
    image: "bg-gradient-to-br from-purple-900 to-black", // Placeholder class
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 2,
    title: "Neon E-Commerce",
    description: "Full-stack e-commerce platform for digital assets. Includes 3D product previews and crypto payment integration.",
    tags: ["Next.js", "Three.js", "Stripe"],
    image: "bg-gradient-to-br from-blue-900 to-black",
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 3,
    title: "AI Chat Interface",
    description: "An elegant interface for interacting with LLMs. Features streaming responses, code syntax highlighting, and chat history.",
    tags: ["TypeScript", "OpenAI API", "Vite"],
    image: "bg-gradient-to-br from-green-900 to-black",
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 4,
    title: "Audio Visualizer",
    description: "Interactive 3D audio visualizer that reacts to microphone input or uploaded audio files.",
    tags: ["Three.js", "Web Audio API", "React"],
    image: "bg-gradient-to-br from-pink-900 to-black",
    demoLink: "#",
    repoLink: "#"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary">
            FEATURED PROJECTS
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full box-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full bg-muted/10 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 hover:box-glow overflow-hidden group">
                <div className={`h-48 w-full ${project.image} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Code2 className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between mt-auto">
                  <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary hover:text-white" asChild>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-primary text-white hover:bg-primary/80 box-glow border-none" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
