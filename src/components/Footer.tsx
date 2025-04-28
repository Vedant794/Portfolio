import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Vedant794",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/vedant-kumbhare-bb70b4264/",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/Ved_tech794",
    },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:vedant@example.com" },
  ];

  return (
    <footer className="bg-card py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a
              href="#home"
              className="font-heading text-xl font-bold gradient-text"
            >
              VK<span className="text-foreground">.</span>
            </a>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© {currentYear} Vedant Kumbhare. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
