import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MessageCircle, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "mgphoechit770@gmail.com",
      href: "mailto:mgphoechit770@gmail.com",
      gradient: "from-primary to-secondary",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+959670503500",
      href: "https://wa.me/959670503500",
      gradient: "from-accent to-primary",
    },
    {
      icon: Send,
      label: "Telegram",
      value: "@Axcoc7",
      href: "https://t.me/Axcoc7",
      gradient: "from-primary to-accent",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Mg Phoe Chit",
      href: "https://facebook.com",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "09670503500",
      href: "tel:09670503500",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Phone,
      label: "Viber",
      value: "+09667746550",
      href: "viber://chat?number=+09667746550",
      gradient: "from-secondary to-accent",
    },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.service.trim()) {
      newErrors.service = "Please select or describe a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", service: "", message: "" });
      setErrors({});
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Gold-Green Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-gold/20 via-background to-accent/20" />
      
      {/* Cyberpunk Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-2">// GOLD_GREEN_HUB</p>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to start a project or have questions? Reach out through any of these channels
          </p>
          <div className="w-24 h-1 mx-auto mt-4 gradient-gold-green rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="font-orbitron text-xl font-semibold mb-6">Contact Methods</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {contacts.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-xl group hoverable transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${contact.gradient} group-hover:scale-110 transition-transform`}>
                      <contact.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {contact.label}
                      </p>
                      <p className="font-medium text-sm group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="font-orbitron text-xl font-semibold mb-6">Service Request Form</h3>
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-xl space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`bg-muted/50 border-border focus:border-primary ${
                    errors.name ? "border-destructive" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`bg-muted/50 border-border focus:border-primary ${
                    errors.email ? "border-destructive" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Interest *</label>
                <Input
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="e.g., Website Development, Phone Consulting"
                  className={`bg-muted/50 border-border focus:border-primary ${
                    errors.service ? "border-destructive" : ""
                  }`}
                />
                {errors.service && (
                  <p className="text-destructive text-xs mt-1">{errors.service}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project or inquiry..."
                  rows={4}
                  className={`bg-muted/50 border-border focus:border-primary resize-none ${
                    errors.message ? "border-destructive" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-destructive text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full gradient-gold-green text-primary-foreground font-semibold py-6 hoverable"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
