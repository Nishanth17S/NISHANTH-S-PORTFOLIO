import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t border-primary/10 relative z-10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="font-display font-bold text-xl tracking-widest text-white">
              NISHANTH <span className="text-primary">S</span>
            </span>
            <p className="text-muted-foreground mt-2 font-body text-sm">
              Crafting digital experiences with precision and passion.
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/Nishanth17S" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/20 border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary hover:box-glow transition-all duration-300"
              data-testid="link-github"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nishanths288" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/20 border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary hover:box-glow transition-all duration-300"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/nishanths288?igsh=MWI0OHZ3djB3MmdjbA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/20 border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary hover:box-glow transition-all duration-300"
              data-testid="link-instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="mailto:nishanth67923@gmail.com" 
              className="p-3 rounded-full bg-muted/20 border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary hover:box-glow transition-all duration-300"
              data-testid="link-mail"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/5 text-center text-muted-foreground text-xs font-mono tracking-tighter">
          © {currentYear} NISHANTH S. ALL RIGHTS RESERVED. // SYSTEM_STATUS: OPERATIONAL
        </div>
      </div>
    </footer>
  );
}
