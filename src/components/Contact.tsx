import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "andrew@example.com",
      link: "mailto:andrew@example.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com/?q=San+Francisco,+CA"
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/andrewbaldonado",
      color: "hover:text-primary"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/andrew-baldonado",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/andrewbaldonado",
      color: "hover:text-blue-400"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-accent-gradient mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help 
              bring your ideas to life with cutting-edge technology solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card-gradient shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how I can help..."
                      rows={6}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-hover smooth-transition"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="bg-card-gradient shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-primary mt-1">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary smooth-transition"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card-gradient shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Connect With Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-muted-foreground ${social.color} smooth-transition p-3 rounded-lg hover:bg-muted/50`}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-6">
                    Follow me on social media for updates on my latest projects, 
                    tech insights, and industry news. I'm always excited to connect 
                    with fellow developers and tech enthusiasts!
                  </p>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-hero-gradient text-white shadow-card border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">
                    Ready to Start Your Project?
                  </h3>
                  <p className="mb-4 text-white/90">
                    Let's discuss how I can help bring your vision to life.
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                    onClick={() => {
                      const form = document.querySelector('#contact form') as HTMLFormElement;
                      form?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Start Conversation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;