"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and inventory management.",
    image: "/modern-ecommerce-interface.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/task-management-dashboard.png",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps using multiple APIs.",
    image: "/preview/project4.png",
    tags: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "An analytics platform for social media managers to track engagement, growth metrics, and content performance across platforms.",
    image: "/social-media-analytics-dashboard.png",
    tags: ["React", "D3.js", "Express", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
  },
]

export default function Portfolio() {
  const [filter, setFilter] = useState("all")

  const allTags = ["all", ...Array.from(new Set(projects.flatMap((project) => project.tags)))]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.tags.includes(filter))

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Portfolio
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Explore my latest projects and creative work. Each project represents a unique challenge and showcases
          different aspects of my development skills.
        </motion.p>
      </div>

      {/* Filter Tags */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={filter === tag ? "default" : "outline"}
            onClick={() => setFilter(tag)}
            className="capitalize transition-all duration-300 hover:scale-105"
          >
            {tag}
          </Button>
        ))}
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden rounded-2xl h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="h-8 w-8"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="h-8 w-8"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
