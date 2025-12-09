import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BookOpen, Code2, Globe, Terminal } from "lucide-react";

const ResourcesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const resources = [
    {
      name: "MDN Web Docs",
      description: "Comprehensive documentation for web technologies",
      url: "https://developer.mozilla.org",
      icon: BookOpen,
      category: "Documentation",
    },
    {
      name: "GitHub",
      description: "World's largest code hosting platform",
      url: "https://github.com",
      icon: Code2,
      category: "Development",
    },
    {
      name: "Stack Overflow",
      description: "Q&A community for developers",
      url: "https://stackoverflow.com",
      icon: Terminal,
      category: "Community",
    },
    {
      name: "freeCodeCamp",
      description: "Free coding bootcamp and certifications",
      url: "https://freecodecamp.org",
      icon: Code2,
      category: "Learning",
    },
    {
      name: "Codecademy",
      description: "Interactive coding courses",
      url: "https://codecademy.com",
      icon: BookOpen,
      category: "Learning",
    },
    {
      name: "CSS-Tricks",
      description: "Daily articles about CSS and web design",
      url: "https://css-tricks.com",
      icon: Globe,
      category: "Design",
    },
    {
      name: "W3Schools",
      description: "Web development tutorials and references",
      url: "https://w3schools.com",
      icon: BookOpen,
      category: "Learning",
    },
    {
      name: "Dev.to",
      description: "Community of software developers",
      url: "https://dev.to",
      icon: Terminal,
      category: "Community",
    },
    {
      name: "Smashing Magazine",
      description: "Web design and development articles",
      url: "https://smashingmagazine.com",
      icon: Globe,
      category: "Design",
    },
    {
      name: "Frontend Mentor",
      description: "Real-world frontend challenges",
      url: "https://frontendmentor.io",
      icon: Code2,
      category: "Practice",
    },
  ];

  const categoryColors: Record<string, string> = {
    Documentation: "text-primary border-primary",
    Development: "text-accent border-accent",
    Community: "text-secondary border-secondary",
    Learning: "text-primary border-primary",
    Design: "text-cyber-gold border-cyber-gold",
    Practice: "text-accent border-accent",
  };

  return (
    <section id="resources" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// TECH_ESSENTIALS</p>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="gradient-text">Recommended Resources</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Curated collection of essential websites for developers and tech enthusiasts
          </p>
          <div className="w-24 h-1 mx-auto mt-4 animate-border-flow rounded-full" />
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card p-5 rounded-xl group transition-all duration-700 hoverable hover:border-primary/50 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded-lg bg-muted">
                  <resource.icon className="w-5 h-5 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <h3 className="font-orbitron font-semibold mb-1 group-hover:text-primary transition-colors">
                {resource.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {resource.description}
              </p>

              <span className={`inline-block px-2 py-1 text-xs font-mono rounded border ${categoryColors[resource.category]}`}>
                {resource.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
