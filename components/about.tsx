"use client";

import { Card, CardContent } from "@/components/ui/card";
import Card3D from "@/components/Card3D";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Gamepad2,
  Figma,
} from "lucide-react";
import { useScrollFadeIn } from "./useScrollAnimation";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiSharp,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { Sparkles, Layout } from "lucide-react";

export default function About() {
  const [headerRef, headerVisible] = useScrollFadeIn(100);
  const [leftColumnRef, leftColumnVisible] = useScrollFadeIn(200);
  const [rightColumnRef, rightColumnVisible] = useScrollFadeIn(300);

  const skills = [
    {
      name: "React",
      icon: (
        <SiReact
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#61DAFB" }}
        />
      ),
    },
    {
      name: "Next.js",
      icon: (
        <SiNextdotjs
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#000000" }}
        />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <SiTypescript
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#3178C6" }}
        />
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <SiJavascript
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#F7DF1E" }}
        />
      ),
    },
    {
      name: "HTML5",
      icon: (
        <SiHtml5
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#E34F26" }}
        />
      ),
    },
    {
      name: "CSS3",
      icon: (
        <SiCss3
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#1572B6" }}
        />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <SiTailwindcss
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#06B6D4" }}
        />
      ),
    },
    {
      name: "Sass",
      icon: (
        <SiSass
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#CC6699" }}
        />
      ),
    },
    {
      name: "React Native",
      icon: (
        <SiReact
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#61DAFB" }}
        />
      ),
    },
    {
      name: "Figma",
      icon: (
        <SiFigma
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#F24E1E" }}
        />
      ),
    },
    {
      name: "Adobe XD",
      icon: (
        <SiAdobexd
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#FF61F6" }}
        />
      ),
    },
    {
      name: "Photoshop",
      icon: (
        <SiAdobephotoshop
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#31A8FF" }}
        />
      ),
    },
    {
      name: "Illustrator",
      icon: (
        <SiAdobeillustrator
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#FF9A00" }}
        />
      ),
    },
    {
      name: "Node.js",
      icon: (
        <SiNodedotjs
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#339933" }}
        />
      ),
    },
    {
      name: "Express",
      icon: (
        <SiExpress
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#000000" }}
        />
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <SiMongodb
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#47A248" }}
        />
      ),
    },
    {
      name: "Git",
      icon: (
        <SiGit
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#F05032" }}
        />
      ),
    },
    {
      name: "GitHub",
      icon: (
        <SiGithub
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#181717" }}
        />
      ),
    },
    {
      name: "Vercel",
      icon: (
        <SiVercel
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#000000" }}
        />
      ),
    },
    {
      name: "Netlify",
      icon: (
        <SiNetlify
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#00C7B7" }}
        />
      ),
    },
    {
      name: "C#",
      icon: (
        <SiSharp
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#239120" }}
        />
      ),
    },
    {
      name: "UI/UX Design",
      icon: (
        <Sparkles
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#FFD700" }}
        />
      ),
    },
    {
      name: "Responsive Design",
      icon: (
        <Layout
          className="w-5 h-5 group-hover:w-6 group-hover:h-6 group-hover:animate-bounce transition-all duration-300"
          style={{ color: "#8B5CF6" }}
        />
      ),
    },
  ];

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Building responsive, fast, and modern websites using the latest technologies and best practices.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces with focus on user experience and accessibility.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description:
        "Designing and developing mobile-first responsive applications that work seamlessly across all devices.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description:
        "Crafting pixel-perfect frontends with modern frameworks like React, Next.js, and Vue.js.",
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Game Development",
      description:
        "Creating engaging games and interactive experiences using Unity, HTML5 Canvas, and JavaScript.",
    },
    {
      icon: <Figma className="h-8 w-8" />,
      title: "Design Systems",
      description:
        "Building comprehensive design systems and component libraries for consistent user experiences.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #00f5ff 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #ff00ff 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-fade-in ${
            headerVisible ? "animate" : ""
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a passionate frontend developer and designer with expertise in
            creating digital solutions that make a difference. I love turning
            complex problems into simple, beautiful, and intuitive designs. With
            a strong background in both development and design, I bring a unique
            perspective to every project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div
            ref={leftColumnRef}
            className={`scroll-slide-left reveal-gap ${
              leftColumnVisible ? "animate" : ""
            }`}
          >
            <h3 className="text-2xl font-semibold mb-8 text-white">
              What I Do
            </h3>
            <div className="grid gap-6">
              {services.map((service, index) => (
                <Card3D
                  key={index}
                  className="group max-w-xl md:max-w-lg mx-auto md:mx-0"
                >
                  <div className="p-5 md:p-6 rounded-3xl">
                    <div className="flex gap-4">
                      <div className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-lg text-white group-hover:text-accent transition-colors duration-300">
                          {service.title}
                        </h4>
                        <p className="text-gray-300">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>

          <div
            ref={rightColumnRef}
            className={`scroll-slide-right reveal-gap ${
              rightColumnVisible ? "animate" : ""
            }`}
          >
            <h3 className="text-2xl font-semibold mb-8 text-white">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="group relative">
                  <Badge
                    variant="secondary"
                    className="text-sm py-3 px-4 bg-slate-700/50 text-gray-200 border border-slate-600 hover:bg-accent hover:text-slate-900 hover:border-accent transition-all duration-300 cursor-default transform hover:scale-110 hover:shadow-lg hover:shadow-accent/25 flex items-center gap-2 backdrop-blur-sm"
                  >
                    <span className="transition-all duration-300">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </Badge>
                </div>
              ))}
            </div>

            <Card className="bg-slate-700/50 backdrop-blur-sm border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-6 text-lg text-white">
                  Experience & Education
                </h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-accent pl-4 hover:border-l-4 transition-all duration-300">
                    <h5 className="font-semibold text-white">
                      Frontend Developer & Designer
                    </h5>
                    <p className="text-sm text-accent mb-2">
                      Freelance • 2022 - Present
                    </p>
                    <p className="text-sm text-gray-300">
                      Developing modern web applications and creating
                      user-centered designs for various clients.
                    </p>
                  </div>
                  <div className="border-l-2 border-gray-500 pl-4 hover:border-l-4 hover:border-accent transition-all duration-300">
                    <h5 className="font-semibold text-white">Web Developer</h5>
                    <p className="text-sm text-gray-400 mb-2">
                      Tech Startup • 2021 - 2022
                    </p>
                    <p className="text-sm text-gray-300">
                      Built responsive web applications and collaborated with
                      design teams to implement user interfaces.
                    </p>
                  </div>
                  <div className="border-l-2 border-gray-500 pl-4 hover:border-l-4 hover:border-accent transition-all duration-300">
                    <h5 className="font-semibold text-white">
                      Computer Science Student
                    </h5>
                    <p className="text-sm text-gray-400 mb-2">
                      University • 2019 - 2023
                    </p>
                    <p className="text-sm text-gray-300">
                      Focused on software development, algorithms, and user
                      interface design.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
