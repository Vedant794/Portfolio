import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-medium text-muted-foreground mb-3 animate-fade-in">
              Hello, I'm
            </h3>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 gradient-text animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Vedant Kumbhare
            </h1>
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Backend & Devops Enthusiast
            </h2>
            <p
              className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              I create engaging, accessible, and high-performance web
              experiences with cutting-edge technologies and user-centered
              design principles.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <Button size="lg" asChild>
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 relative animate-fade-in">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl"></div>
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background shadow-xl">
              <img
                src={profileImage}
                alt="Vedant Kumbhare"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary opacity-10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent opacity-10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
