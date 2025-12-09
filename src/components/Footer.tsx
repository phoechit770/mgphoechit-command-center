import { Terminal, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-border/50 relative">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-orbitron text-sm">
              © 2025 <span className="gradient-text font-semibold">Mg Phoe Chit</span>
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            Crafted with passion for technology and innovation
          </p>

          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="neon-border rounded-full hoverable"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
