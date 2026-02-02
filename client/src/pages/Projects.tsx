import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Plane, Brain, Sparkles } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "SKYAI",
    description: "SkySmart is an AI-powered flight booking platform that helps users find the best and most affordable flights. It provides smart recommendations and price drop alerts.",
    tags: ["TypeScript", "AI", "React", "Next.js"],
    icon: <Plane className="w-12 h-12 text-primary" />,
    image: "/skyai.png",
    demoLink: "https://github.com/Nishanth17S/SKYAI",
    repoLink: "https://github.com/Nishanth17S/SKYAI"
  },
  {
    id: 2,
    title: "Skysmart",
    description: "AI-powered flight booking platform that makes travel easier and more affordable. It tracks real-time fares and notifies users when prices drop.",
    tags: ["TypeScript", "Tailwind", "API Integration"],
    icon: <Code2 className="w-12 h-12 text-secondary" />,
    image: "/skysmart.png",
    demoLink: "https://github.com/Nishanth17S/Skysmart",
    repoLink: "https://github.com/Nishanth17S/Skysmart"
  },
  {
    id: 3,
    title: "Mental Health Intervention",
    description: "A digital system designed to provide mental health support and intervention strategies through an intuitive and accessible platform.",
    tags: ["JavaScript", "HealthTech", "UI/UX"],
    icon: <Brain className="w-12 h-12 text-accent" />,
    image: "/mental-health.png",
    demoLink: "https://github.com/Nishanth17S/mental-health-intervention-system",
    repoLink: "https://github.com/Nishanth17S/mental-health-intervention-system"
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description: "A high-energy, rave-themed personal portfolio showcasing projects and skills with interactive 3D elements and custom neon design.",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind"],
    icon: <Sparkles className="w-12 h-12 text-primary" />,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    demoLink: "/",
    repoLink: "https://github.com/Nishanth17S"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full bg-muted/10 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 hover:box-glow overflow-hidden group">
                <div className="h-48 w-full relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
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
                
                <CardFooter className="flex justify-between mt-auto gap-4">
                  <Button variant="outline" size="sm" className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-white" asChild>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary text-white hover:bg-primary/80 box-glow border-none" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Details
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
