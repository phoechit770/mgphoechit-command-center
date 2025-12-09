import { useEffect, useRef, useState } from "react";
import { Wrench, Code, Smartphone, Palette, Award, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

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

  const skills = [
    {
      icon: Wrench,
      title: "Hardware/Software Phone Repair",
      description: "EPI Certified professional phone technician with expertise in both hardware diagnostics and software troubleshooting.",
      level: 95,
      color: "primary",
    },
    {
      icon: Code,
      title: "HTML/CSS/JS Development",
      description: "Full-stack web development capabilities with modern frameworks and responsive design principles.",
      level: 85,
      color: "secondary",
    },
    {
      icon: Smartphone,
      title: "APK Creation",
      description: "Custom Android application development from concept to deployment on the Play Store.",
      level: 80,
      color: "accent",
    },
    {
      icon: Palette,
      title: "Logo/Photo/Video Editing",
      description: "Creative design and multimedia editing for branding, marketing, and content creation.",
      level: 88,
      color: "primary",
    },
  ];

  const colorClasses = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
  };

  const progressColors = {
    primary: "from-primary to-primary/50",
    secondary: "from-secondary to-secondary/50",
    accent: "from-accent to-accent/50",
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-2">// EXPERTISE_MATRIX</p>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`glass-card p-6 rounded-xl transition-all duration-700 hoverable ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${colorClasses[skill.color as keyof typeof colorClasses]}`}>
                  <skill.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-orbitron font-semibold text-lg mb-1">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="flex justify-between text-xs text-muted-foreground mb-2">
                  <span>Proficiency</span>
                  <span className="font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${progressColors[skill.color as keyof typeof progressColors]} transition-all duration-1000`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100 + 300}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Section */}
        <div
          className={`glass-card p-6 md:p-8 rounded-xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="certificate" className="border-none">
              <AccordionTrigger className="hover:no-underline py-0">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg gradient-primary">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-orbitron font-semibold text-lg">EPI Certification</h3>
                    <p className="text-muted-foreground text-sm">Professional Phone Repair Certificate - May 2025</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-6">
                  <div className="relative rounded-xl overflow-hidden border border-border">
                    {/* Certificate placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-card via-muted to-card flex items-center justify-center">
                      <div className="text-center p-8">
                        <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
                        <h4 className="font-orbitron text-xl font-bold mb-2">EPI Certificate</h4>
                        <p className="text-muted-foreground">Phone Repair Professional</p>
                        <p className="text-sm text-muted-foreground mt-2">Certified: May 2025</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => setShowCertificate(true)}
                      className="absolute bottom-4 right-4 gradient-primary hoverable"
                    >
                      View Full Size
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
          <div className="glass-card max-w-4xl w-full rounded-2xl overflow-hidden neon-border">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-orbitron font-bold">EPI Certificate</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowCertificate(false)}
                className="hoverable"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="p-4">
              <div className="aspect-[4/3] bg-gradient-to-br from-card via-muted to-card rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <Award className="w-24 h-24 mx-auto mb-6 text-primary" />
                  <h4 className="font-orbitron text-2xl font-bold mb-4">Certificate of Completion</h4>
                  <p className="text-xl mb-2">Mg Phoe Chit</p>
                  <p className="text-muted-foreground">Professional Phone Repair Technician</p>
                  <p className="text-sm text-muted-foreground mt-4">Issued by EPI - May 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
