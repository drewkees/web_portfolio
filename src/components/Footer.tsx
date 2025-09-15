import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/andrewbaldonado",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/andrew-baldonado",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:andrew@example.com",
    },
  ];

  const handleQuickLinkClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div
              onClick={scrollToTop}
              className="font-bold text-2xl bg-accent-gradient bg-clip-text text-transparent cursor-pointer"
            >
              Andrew C. Baldonado
            </div>
            <p className="text-secondary-foreground/80">
              Computer Engineering graduate specializing in Software Development, 
              Web Solutions, and AI Automation. Building the future, one line of code at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/70 hover:text-white smooth-transition p-2 rounded-lg hover:bg-white/10"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleQuickLinkClick(link.href)}
                    className="text-secondary-foreground/80 hover:text-white smooth-transition"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-2 text-secondary-foreground/80">
              <p>San Francisco, CA</p>
              <p>andrew@example.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <p className="text-sm text-secondary-foreground/70">
              Available for freelance projects and full-time opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-secondary-foreground/70">
              <span>© {currentYear} Andrew C. Baldonado. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-secondary-foreground/70">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;