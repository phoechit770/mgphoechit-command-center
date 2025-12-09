import { useEffect, useRef, useState } from "react";
import { ExternalLink, Share2, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll(".project-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const completedProjects = [
    {
      title: "TMHD7",
      type: "Mobile Application",
      description: "A comprehensive mobile app designed for tech enthusiasts and power users.",
      tags: ["Android", "APK", "Mobile"],
      status: "Completed",
      gradient: "from-primary via-secondary to-primary",
    },
    {
      title: "The Master of The Phone",
      type: "E-Book",
      description: "An in-depth guide covering advanced phone repair techniques and troubleshooting.",
      tags: ["E-Book", "Education", "Tech"],
      status: "Published",
      gradient: "from-secondary via-accent to-secondary",
    },
  ];

  const futureProjects = [
    {
      title: "လူငယ်နဲ့ နည်းပညာ",
      type: "E-Book",
      description: "Upcoming e-book focused on technology education for the youth.",
      status: "Coming Soon",
    },
    {
      title: "Music Hub App",
      type: "Mobile Application",
      description: "Revolutionary music streaming and discovery platform.",
      status: "In Development",
    },
  ];

  const handleShare = (title: string) => {
    if (navigator.share) {
      navigator.share({
        title: `Check out ${title} by Mg Phoe Chit`,
        text: `Discover ${title} - an amazing project!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">// DATA_STREAM</p>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="gradient-text">Projects & Portfolio</span>
          </h2>
          <div className="w-24 h-1 mx-auto animate-border-flow rounded-full" />
        </div>

        {/* Completed Projects */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {completedProjects.map((project, index) => (
            <div
              key={project.title}
              data-index={index}
              className={`project-item glass-card rounded-2xl overflow-hidden group transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 md:h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-card/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="font-orbitron text-2xl md:text-3xl font-bold text-foreground">
                    {project.title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent/20 text-accent border border-accent/50">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-primary font-mono text-xs mb-2">{project.type}</p>
                <h3 className="font-orbitron text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-muted rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 neon-border hoverable"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleShare(project.title)}
                    className="hoverable"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Deployments */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-orbitron font-semibold mb-6 flex items-center gap-3">
            <Clock className="w-6 h-6 text-secondary" />
            <span>Future Deployments</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {futureProjects.map((project, index) => (
            <div
              key={project.title}
              data-index={index + 2}
              className={`project-item glass-card p-6 rounded-xl border border-dashed border-secondary/50 group transition-all duration-700 hover:border-secondary ${
                visibleItems.includes(index + 2)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-secondary font-mono text-xs mb-1">{project.type}</p>
                  <h4 className="font-orbitron font-semibold text-lg">{project.title}</h4>
                </div>
                <span className="px-2 py-1 rounded text-xs font-mono bg-secondary/20 text-secondary animate-pulse">
                  {project.status}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex items-center text-secondary text-sm hoverable">
                <span>Stay tuned</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
