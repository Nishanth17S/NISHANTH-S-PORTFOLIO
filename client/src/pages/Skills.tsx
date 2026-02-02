import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Terminal, 
  Video, 
  Brain, 
  Users,
  Zap,
  Globe
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: [
      { name: "HTML / CSS", level: 95 },
      { name: "C / C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "Git", level: 90 }
    ]
  },
  {
    title: "AI & Modern Tools",
    icon: <Brain className="w-6 h-6 text-secondary" />,
    skills: [
      { name: "ChatGPT / Gemini", level: 98 },
      { name: "Cursor AI", level: 95 },
      { name: "Antigravity AI", level: 90 },
      { name: "Prompt Engineering", level: 95 }
    ]
  },
  {
    title: "Digital Editing",
    icon: <Video className="w-6 h-6 text-accent" />,
    skills: [
      { name: "Cap Cut / VN", level: 98 },
      { name: "Canva", level: 95 },
      { name: "Final Cut Pro", level: 90 },
      { name: "Microsoft Clipchamp", level: 85 },
      { name: "Lightroom", level: 92 }
    ]
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-6 h-6 text-primary" />,
    skills: [
      { name: "Communication", level: 95 },
      { name: "Leadership", level: 90 },
      { name: "Problem Solving", level: 92 },
      { name: "Coordination", level: 95 },
      { name: "Work Ethics", level: 100 }
    ]
  },
  {
    title: "Languages",
    icon: <Globe className="w-6 h-6 text-secondary" />,
    skills: [
      { name: "English (Fluent)", level: 95 },
      { name: "Kannada (Native)", level: 100 },
      { name: "Hindi (Fluent)", level: 90 }
    ]
  }
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 container mx-auto relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent">
            SKILLS & EXPERTISE
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full box-glow" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
            >
              <Card className="h-full bg-muted/5 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all duration-500 hover:box-glow-cyan group overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-6">
                  <div className="p-3 rounded-xl bg-background/50 border border-primary/20 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-display text-white group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between text-sm font-mono tracking-tighter">
                        <span className="text-muted-foreground group-hover:text-white transition-colors">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted/20 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + skillIndex * 0.05, duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative"
                        >
                           <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
