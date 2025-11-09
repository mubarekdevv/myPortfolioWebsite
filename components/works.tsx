"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, categories } from "@/data/projects";
import Card3D from "@/components/Card3D";
import { useScrollFadeIn } from "./useScrollAnimation";

export default function Works() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [headerRef, headerVisible] = useScrollFadeIn(100);
  const [featuredRef, featuredVisible] = useScrollFadeIn(200);
  const [filterRef, filterVisible] = useScrollFadeIn(300);
  const [projectsRef, projectsVisible] = useScrollFadeIn(400);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="works" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #00f5ff 1px, transparent 1px),
                           linear-gradient(-45deg, #ff00ff 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-fade-in reveal-gap ${
            headerVisible ? "animate" : ""
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My Works
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here's a showcase of my recent projects spanning web development,
            UI/UX design, game development, and mobile applications. Each
            project represents my passion for creating exceptional digital
            experiences.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div
            ref={featuredRef}
            className={`mb-20 scroll-slide-left reveal-gap ${
              featuredVisible ? "animate" : ""
            }`}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Card3D key={project.id} className="group">
                  <div className="overflow-hidden rounded-3xl">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <Link href={project.liveUrl} target="_blank">
                              <Button
                                size="sm"
                                className="bg-accent hover:bg-accent/90 text-slate-900 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,255,0.55)]"
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                Live Demo
                              </Button>
                            </Link>
                          )}
                          {project.githubUrl && (
                            <Link href={project.githubUrl} target="_blank">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-accent text-accent hover:bg-accent hover:text-slate-900 transform hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm hover:shadow-[0_0_20px_rgba(0,245,255,0.55)] hover:font-semibold"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent text-slate-900 font-semibold">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold text-xl mb-2 text-white group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-slate-600 text-gray-300 hover:border-accent hover:text-accent transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs border-slate-600 text-gray-300"
                          >
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div
          ref={filterRef}
          className={`flex flex-wrap justify-center gap-3 mb-12 scroll-fade-in reveal-gap ${
            filterVisible ? "animate" : ""
          }`}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`mb-2 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ${
                activeFilter === category.id
                  ? "bg-accent text-slate-900 hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-[0_0_22px_rgba(0,245,255,0.6)]"
                  : "border-slate-600 text-gray-300 hover:border-accent hover:text-accent hover:bg-accent/10 hover:shadow-[0_0_22px_rgba(0,245,255,0.55)] hover:font-semibold"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div
          ref={projectsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-slide-right reveal-gap ${
            projectsVisible ? "animate" : ""
          }`}
        >
          {filteredProjects.map((project) => (
            <Card3D key={project.id} className="group">
              <div className="overflow-hidden rounded-3xl">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank">
                          <Button
                            size="sm"
                            className="bg-accent hover:bg-accent/90 text-slate-900 transform hover:scale-105 transition-all duration-300"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-accent text-accent hover:bg-accent hover:text-slate-900 transform hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="capitalize bg-slate-700/80 text-gray-200 border border-slate-600 backdrop-blur-sm"
                    >
                      {categories.find((cat) => cat.id === project.category)
                        ?.label || project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2 text-white group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs border-slate-600 text-gray-300 hover:border-accent hover:text-accent transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-slate-600 text-gray-300"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300 text-lg">
              No projects found in this category yet.
            </p>
            <p className="text-gray-400">Check back soon for new updates!</p>
          </div>
        )}
      </div>
    </section>
  );
}
