import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NoesisAI",
      description:
        "Noesis AI is a no-code tool designed to help developers quickly generate backend and frontend codebases based on simple prompts. With an easy-to-use interface, Noesis AI helps developers avoid wasting time on boilerplate code and focuses on accelerating the development process.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      tags: ["React", "TypeScript", "Docker", "Generative AI"],
      liveUrl: "https://noesisai.vercel.app/",
      githubUrl: "https://github.com/Vedant794/NoesisAI",
    },
    {
      id: 2,
      title: "DevBeacons",
      description:
        "DevBeacons project (a real-time CI/CD pipeline status monitor with WebSockets, Slack/Discord notifications, and dashboards), you want to highlight both the technical depth and the problem-solving aspect of your role.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      tags: ["NodeJs", "ReactJs", "Azure", "CI/CD"],
      liveUrl: "https://devbeacon.vercel.app/",
      githubUrl: "https://github.com/jayeshakhare33/CI-CD-Pipeline-Monitor",
    },
    {
      id: 3,
      title: "Corporate Pipeline using Jenkins",
      description:
        "Create a Corporate CI/CD pipeline using Jenkins for continuous integration and development. The project cover all the major tools and services like SonarQube, npm audit, docker, Promethues, Grafana, etc..",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      tags: [
        "Docker",
        "Kubernetes",
        "Argo CD",
        "Prometheus & Grafana",
        "SonarQube",
      ],
      liveUrl: "https://github.com/shrey209/corporate-pipeline",
      githubUrl: "https://github.com/shrey209/corporate-pipeline",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Vedant794?tab=repositories"
              className="flex items-center"
            >
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
