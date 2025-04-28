import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "MERN",
    "TypeScript",
    "C++",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Generative AI",
    "AWS",
    "Postman",
    "Grafana & Prometheus",
    "RESTful APIs",
    "Git & GitHub",
  ];

  return (
    <section id="about" className="section bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              My Journey
            </h3>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                I'm a passionate backend developer and DevOps enthusiast
                committed to building robust, scalable, and efficient systems
                that power modern web applications.
              </p>
              <p>
                I specialize in technologies like Node.js, Express, MongoDB, and
                Docker, and have experience working with CI/CD pipelines, cloud
                platforms like AWS, and real-time systems using WebSockets.
              </p>
              <p>
                I prioritize writing clean, modular code and designing
                architectures that ensure performance, security, and
                maintainability—whether it’s building APIs, managing
                infrastructure, or automating deployments.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 gradient-text">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <Card key={skill} className="card-hover">
                  <CardContent className="p-4 text-center">
                    <span className="font-medium">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
