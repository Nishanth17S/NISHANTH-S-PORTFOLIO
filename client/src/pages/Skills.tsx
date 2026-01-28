import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Three.js / WebGL", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Express", level: 85 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Docker", level: 70 },
      { name: "Blender", level: 60 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
            TECHNICAL SKILLS
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full box-glow" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.2, duration: 0.5 }}
              className="bg-muted/10 backdrop-blur-md rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-colors hover:box-glow"
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-white border-b border-primary/20 pb-2">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-muted-foreground font-body font-semibold">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
