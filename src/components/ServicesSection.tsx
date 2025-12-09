import { useEffect, useRef, useState } from "react";
import { Globe, Smartphone, HelpCircle, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
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

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom responsive websites with modern design and optimal performance.",
      price: "Starting from $200",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom Animations"],
      color: "primary",
    },
    {
      icon: Smartphone,
      title: "Phone Consulting",
      description: "Expert advice on phone repairs, purchases, and technical issues.",
      price: "Starting from $25/hr",
      features: ["Hardware Diagnosis", "Software Troubleshooting", "Purchase Advice", "Repair Guidance"],
      color: "secondary",
    },
    {
      icon: HelpCircle,
      title: "Tech Support",
      description: "General technology support and consultation for businesses and individuals.",
      price: "Starting from $20/hr",
      features: ["Remote Support", "Setup Assistance", "Training Sessions", "Ongoing Maintenance"],
      color: "accent",
    },
  ];

  const faqs = [
    {
      question: "How do I get started with a project?",
      answer: "Simply reach out through the contact form or any of my social channels. We'll schedule a consultation to discuss your needs, timeline, and budget.",
    },
    {
      question: "What is your typical turnaround time?",
      answer: "Turnaround varies by project complexity. Simple websites take 1-2 weeks, while more complex applications may take 4-8 weeks. I'll provide an accurate estimate during our initial consultation.",
    },
    {
      question: "Do you offer ongoing maintenance?",
      answer: "Yes! I offer monthly maintenance packages to keep your website or application running smoothly with regular updates, security patches, and performance optimization.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "I accept bank transfers, mobile payments (KBZ Pay, Wave Pay), and various international payment methods. A 50% deposit is required to start, with the remainder due upon completion.",
    },
    {
      question: "Can you work with my existing website?",
      answer: "Absolutely! I can help improve, redesign, or add features to your existing website. I'll review your current setup and provide recommendations during our consultation.",
    },
  ];

  const borderColors = {
    primary: "border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]",
    secondary: "border-secondary hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)]",
    accent: "border-accent hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]",
  };

  const iconBgColors = {
    primary: "gradient-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-mono text-sm mb-2">// SERVICES_MATRIX</p>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="gradient-text">Services & Pricing</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-secondary via-primary to-accent rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card p-6 rounded-xl border transition-all duration-700 group hoverable ${
                borderColors[service.color as keyof typeof borderColors]
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${iconBgColors[service.color as keyof typeof iconBgColors]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="font-orbitron font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

              <p className="font-orbitron text-lg font-semibold gradient-text mb-6">{service.price}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <ChevronRight className="w-4 h-4 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full gradient-primary hoverable">
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="text-center mb-8">
            <h3 className="font-orbitron text-2xl font-bold mb-2">Frequently Asked Questions</h3>
            <p className="text-muted-foreground">Common queries answered</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="glass-card rounded-xl border border-border/50 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-rajdhani font-semibold hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
