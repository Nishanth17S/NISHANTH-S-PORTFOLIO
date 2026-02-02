import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    id: 1,
    degree: "Under Graduate",
    institution: "Maharaja Institute of Technology Mysore",
    period: "2023 - Present",
    description: "Currently pursuing Bachelor of Engineering.",
    achievement: "CGPA: 7.60"
  },
  {
    id: 2,
    degree: "Pre-University (2nd PU)",
    institution: "Manasarowar Pushkarini Vidyashram, Mysore",
    period: "2021 - 2023",
    description: "Completed 2nd PU under State Board.",
    achievement: "Grades: 80%"
  },
  {
    id: 3,
    degree: "Schooling (ICSE)",
    institution: "Notre Dame School, Mysore",
    period: "2008 - 2021",
    description: "Completed SSLC under ICSE Board.",
    achievement: "Grades: 86%"
  }
];

export default function Education() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            EDUCATION
          </h1>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full box-glow" />
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-10 h-10 -ml-5 md:-ml-5 rounded-full border-4 border-background bg-primary/20 backdrop-blur-sm box-glow flex items-center justify-center z-10 group-hover:bg-primary transition-colors">
                <GraduationCap className="w-4 h-4 text-primary group-hover:text-white" />
              </div>

              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-muted/10 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 hover:box-glow hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-display text-white group-hover:text-primary transition-colors">
                      {edu.degree}
                    </CardTitle>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1 bg-background/50 px-2 py-1 rounded">
                      <Calendar className="w-3 h-3" /> {edu.period}
                    </span>
                  </div>
                  <div className="text-secondary font-bold text-sm">{edu.institution}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">{edu.description}</p>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-display text-primary">{edu.achievement}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
