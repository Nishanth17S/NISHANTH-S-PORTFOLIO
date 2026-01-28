import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-primary/20 bg-background/50 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-muted-foreground font-body text-sm">
          © {new Date().getFullYear()} NeonDev. Built with <span className="text-primary animate-pulse">❤</span> and React.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary hover:text-glow transition-all transform hover:scale-110">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-secondary hover:text-glow-cyan transition-all transform hover:scale-110">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-accent hover:text-glow transition-all transform hover:scale-110">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary hover:text-glow transition-all transform hover:scale-110">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
