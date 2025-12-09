import { useEffect, useState } from "react";
import { ChevronDown, Rocket, Award } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Holographic Profile */}
          <div
            className={`relative mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-40 h-40 md:w-56 md:h-56 relative floating">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full animate-spin-slow">
                <div className="w-full h-full rounded-full border-2 border-dashed border-primary/50" />
              </div>
              
              {/* Holographic container */}
              <div className="absolute inset-4 rounded-full holographic p-1 pulse-glow">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden border-2 border-primary/30">
                  {/* Placeholder avatar */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="font-orbitron text-4xl md:text-5xl font-bold gradient-text">
                      MP
                    </span>
                  </div>
                </div>
              </div>

              {/* Orbiting particles */}
              <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "15s" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
              </div>
              <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "20s", animationDirection: "reverse" }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full" />
              </div>
            </div>
          </div>

          {/* Glitch Name */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-orbitron font-black mb-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="glitch text-foreground" data-text="MG PHOE CHIT">
              MG PHOE CHIT
            </span>
          </h1>

          {/* Gradient Subtitle */}
          <p
            className={`text-xl md:text-2xl lg:text-3xl font-rajdhani font-medium mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="gradient-text">Developer</span>
            <span className="text-muted-foreground mx-3">|</span>
            <span className="gradient-text">Phone Master</span>
            <span className="text-muted-foreground mx-3">|</span>
            <span className="gradient-text">Tech Advocate</span>
          </p>

          {/* Status Widgets */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Current Project Widget */}
            <div className="glass-card px-6 py-4 rounded-xl neon-border flex items-center gap-4 hoverable group">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Rocket className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Current Project</p>
                <p className="font-orbitron font-semibold text-primary">Music Hub</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse ml-2" />
            </div>

            {/* Certification Widget */}
            <div className="glass-card px-6 py-4 rounded-xl neon-border-purple flex items-center gap-4 hoverable group">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Certified Since</p>
                <p className="font-orbitron font-semibold text-secondary">May 2025 - EPI</p>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-2 hoverable">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
              <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
