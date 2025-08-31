"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Instagram,
  Mail,
  Play,
  ExternalLink,
  Sparkles,
  Camera,
  Film,
  Palette,
  Zap,
  Linkedin,
  Github,
  GraduationCap,
  Code,
  Globe,
  Music,
  PaletteIcon,
  Cpu,
} from "lucide-react"

export default function Portfolio() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  // Smooth animation variants
  const smoothFadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // iOS-like easing
      },
    },
  }

  const smoothScale = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  // Memoize floating particles
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 2,
      })),
    [],
  )

  // Educational/Technical Projects
  const educationalProjects = useMemo(
    () => [
      {
        name: "Malicious URL Detector",
        description:
          "Advanced machine learning system using ensemble methods and deep learning to detect and classify malicious URLs with 95% accuracy. Implemented feature extraction, data preprocessing, and model optimization.",
        tools: ["Python", "Machine Learning", "Scikit-learn", "TensorFlow", "Pandas"],
        image: "/machine-learning-cybersecurity.png",
        category: "Machine Learning",
        githubUrl: "https://github.com/cassielxyz/malicious-url-detector",
      },
    ],
    [],
  )

  // Creative/Editing Projects
  const creativeProjects = useMemo(
    () => [
      {
        name: "NeoFade FX",
        description:
          "Cinematic transitions with advanced color grading and motion graphics for professional video content.",
        tools: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
        image: "/video-editing-effects.png",
        category: "Video Editing",
      },
      {
        name: "Stormcut",
        description: "Dynamic weather VFX and atmospheric effects for cinematic storytelling and brand content.",
        tools: ["After Effects", "Photoshop", "Motion Graphics"],
        image: "/weather-effects-vfx.png",
        category: "VFX",
      },
      {
        name: "Pixel Pulse",
        description: "Digital glitch effects and cyberpunk aesthetics for modern content creation and social media.",
        tools: ["After Effects", "Premiere Pro", "Lightroom"],
        image: "/digital-glitch-effects.png",
        category: "Motion Design",
      },
    ],
    [],
  )

  // Technical/Programming Skills
  const technicalSkills = useMemo(
    () => [
      { name: "Python", level: 90, icon: <Code className="w-5 h-5" /> },
      { name: "Java", level: 85, icon: <Cpu className="w-5 h-5" /> },
      { name: "JavaScript", level: 82, icon: <Globe className="w-5 h-5" /> },
      { name: "HTML/CSS", level: 85, icon: <Globe className="w-5 h-5" /> },
    ],
    [],
  )

  // Creative Skills
  const creativeSkills = useMemo(
    () => [
      { name: "Adobe After Effects", level: 90, icon: <Zap className="w-5 h-5" /> },
      { name: "Premiere Pro", level: 88, icon: <Film className="w-5 h-5" /> },
      { name: "DaVinci Resolve", level: 85, icon: <Palette className="w-5 h-5" /> },
      { name: "Photoshop", level: 87, icon: <Camera className="w-5 h-5" /> },
      { name: "Lightroom", level: 82, icon: <Sparkles className="w-5 h-5" /> },
    ],
    [],
  )

  const languages = useMemo(() => ["English", "Tamil"], [])
  const hobbies = useMemo(
    () => [
      { name: "Coding", icon: <Code className="w-5 h-5" /> },
      { name: "Editing", icon: <Film className="w-5 h-5" /> },
      { name: "Listening to Music", icon: <Music className="w-5 h-5" /> },
      { name: "Drawing", icon: <PaletteIcon className="w-5 h-5" /> },
    ],
    [],
  )

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleGithubClick = (url: string) => {
    window.open(url, "_blank")
  }

  const handleVideoClick = () => {
    // Open Google Drive video in new tab for full functionality
    window.open("https://drive.google.com/file/d/1QJXeDFXpDxekEvrIqPygoN5HAG0iymSF/view?usp=sharing", "_blank")
  }

  // Auto-play simulation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true)
      setIsVideoPlaying(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header - iOS-like proportions */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="w-full flex justify-between items-center">
          {/* Profile Image - Left Corner */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center pl-4 sm:pl-6 lg:pl-8"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picsart_25-08-23_14-23-31-920.jpg-geQu7GMixa3a2A7YEacmyHkmDLcBKi.jpeg"
              alt="Jesowin Raja Profile"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-yellow-400/30 object-cover"
            />
          </motion.div>

          {/* Social Links - Right Corner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center gap-3 sm:gap-4 pr-4 sm:pr-6 lg:pr-8"
          >
            <motion.a
              href="https://www.linkedin.com/in/jesowinraja6/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/jesowinxyz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/jesowin_/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="mailto:jesowinraja6@gmail.com"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          </motion.div>
        </div>
      </header>

      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        ))}
      </div>

      {/* Hero Section - iOS proportions */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-yellow-900/10"
          style={{ y: backgroundY }}
        />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            className="border-0 h-auto my-0 mx-0 px-0 gap-0 justify-center flex-row"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ y: textY }}
          >
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent leading-tight lg:text-7xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              Jesowin_
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 font-light max-w-4xl mx-auto leading-relaxed mr-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
            >
              Computer Science Engineer | Developer | Creative Editor
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl rounded-full shadow-lg hover:shadow-yellow-400/25 transition-all duration-500"
                onClick={handleScrollToProjects}
              >
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-center gap-3"
                >
                  View My Work
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
        </motion.div>
      </section>

      {/* Education & About Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={smoothFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10"
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
              variants={smoothFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Education & Background
            </motion.h2>

            {/* Education Section */}
            <motion.div
              variants={smoothFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-yellow-400/20">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                  <div className="p-3 sm:p-4 bg-yellow-400/20 rounded-full">
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 mb-2 sm:mb-3">
                      Bachelor's Degree in Computer Science and Engineering
                    </h3>
                    <p className="text-gray-300 text-lg sm:text-xl">St. Xavier's Catholic College of Engineering</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  Currently building foundational knowledge in programming with focus on Java and Python. Learning core
                  programming concepts, data structures, and problem-solving through academic coursework and personal
                  projects.
                </p>
              </div>
            </motion.div>

            {/* About Me */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-12 sm:mb-16"
              variants={smoothFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Aspiring <span className="text-yellow-400 font-semibold">Computer Science Engineer</span> currently
              learning programming fundamentals and exploring creative content creation. I'm passionate about combining
              technical learning with creative projects to build engaging digital experiences.
            </motion.p>

            {/* Languages & Hobbies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <motion.div variants={smoothFadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-yellow-400">Languages</h3>
                <div className="space-y-4">
                  {languages.map((language, index) => (
                    <motion.div
                      key={language}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="bg-gradient-to-r from-yellow-400/10 to-transparent rounded-lg sm:rounded-xl p-4 sm:p-6 border border-yellow-400/20 transition-all duration-500">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <motion.div
                            className="w-3 h-3 bg-yellow-400 rounded-full"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.5,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                          />
                          <span className="text-white font-medium text-base sm:text-lg">{language}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={smoothFadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-yellow-400">Interests</h3>
                <div className="grid grid-cols-1 gap-4">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="bg-gradient-to-r from-purple-400/10 to-transparent rounded-lg sm:rounded-xl p-4 sm:p-6 border border-purple-400/20 transition-all duration-500">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="text-purple-400">{hobby.icon}</div>
                          <span className="text-white font-medium text-base sm:text-lg">{hobby.name}</span>
                          <motion.div
                            className="ml-auto w-2 h-2 bg-purple-400 rounded-full"
                            animate={{
                              scale: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.3,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 sm:mb-20 text-center bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
            variants={smoothFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          {/* Educational/Technical Projects */}
          <motion.div
            variants={smoothFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 sm:mb-20"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-yellow-400 text-center">
              Technical & Educational Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 justify-center">
              {educationalProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  variants={smoothScale}
                  whileHover="hover"
                  className="group max-w-md mx-auto"
                >
                  <Card className="backdrop-blur-xl bg-white/5 border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-500 h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 text-sm">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-yellow-400/20 backdrop-blur-sm flex items-center justify-center">
                          <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
                      <h4 className="text-lg sm:text-xl font-bold mb-3 text-yellow-400 transition-colors duration-300">
                        {project.name}
                      </h4>
                      <p className="text-gray-300 mb-4 leading-relaxed flex-grow text-sm sm:text-base">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                        {project.tools.map((tool) => (
                          <Badge
                            key={tool}
                            variant="secondary"
                            className="bg-yellow-400/10 text-yellow-400 border-yellow-400/20 text-xs"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                      {project.githubUrl && (
                        <Button
                          onClick={() => handleGithubClick(project.githubUrl)}
                          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold transition-all duration-300"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Creative Projects */}
          <motion.div variants={smoothFadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-yellow-400 text-center">
              Creative & Editing Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {creativeProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  variants={smoothScale}
                  whileHover="hover"
                  className="group"
                >
                  <Card className="backdrop-blur-xl bg-white/5 border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-500 h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-400/20 text-purple-400 border-purple-400/30 text-sm">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-yellow-400/20 backdrop-blur-sm flex items-center justify-center">
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
                      <h4 className="text-lg sm:text-xl font-bold mb-3 text-yellow-400 transition-colors duration-300">
                        {project.name}
                      </h4>
                      <p className="text-gray-300 mb-4 leading-relaxed flex-grow text-sm sm:text-base">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.tools.map((tool) => (
                          <Badge
                            key={tool}
                            variant="secondary"
                            className="bg-purple-400/10 text-purple-400 border-purple-400/20 text-xs"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
            variants={smoothFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Video Showcase
          </motion.h2>

          <motion.div
            variants={smoothFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-white/10 border-0 sm:py-1.5 sm:px-1.5"
          >
            <div className="relative w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/d-PR-qfWsEY?autoplay=1&mute=1&loop=1&playlist=d-PR-qfWsEY&controls=0&showinfo=0&rel=0&modestbranding=1"
                title="Video Showcase"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 sm:mb-20 text-center bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
            variants={smoothFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>

          {/* Technical Skills */}
          <motion.div
            variants={smoothFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 sm:mb-20"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-yellow-400 text-center">
              Programming & Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  variants={smoothScale}
                  whileHover="hover"
                >
                  <Card className="backdrop-blur-xl bg-white/5 border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-yellow-400/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="text-yellow-400">{skill.icon}</div>
                      <h4 className="text-base sm:text-lg font-semibold text-white">{skill.name}</h4>
                    </div>

                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <motion.div
                          className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="text-sm text-yellow-400 font-medium">{skill.level}%</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Creative Skills */}
          <motion.div variants={smoothFadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-yellow-400 text-center">
              Creative & Design Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
              {creativeSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                  variants={smoothScale}
                  whileHover="hover"
                >
                  <Card className="backdrop-blur-xl bg-white/5 border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-purple-400/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="text-purple-400">{skill.icon}</div>
                      <h4 className="text-base sm:text-lg font-semibold text-white">{skill.name}</h4>
                    </div>

                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <motion.div
                          className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="text-sm text-purple-400 font-medium">{skill.level}%</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
            variants={smoothFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <motion.div
              variants={smoothFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-yellow-400">Get In Touch</h3>

              <div className="space-y-6">
                <motion.a
                  href="mailto:jesowinraja6@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300 text-sm sm:text-base break-all">jesowinraja6@gmail.com</p>
                  </div>
                </motion.a>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/jesowinraja6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6 text-yellow-400" />
                    <span className="text-sm text-gray-300">LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href="https://github.com/jesowinxyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <Github className="w-6 h-6 text-yellow-400" />
                    <span className="text-sm text-gray-300">GitHub</span>
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/jesowin_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <Instagram className="w-6 h-6 text-yellow-400" />
                    <span className="text-sm text-gray-300">Instagram</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={smoothFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-yellow-400">Send a Message</h3>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-yellow-400/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-yellow-400/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-yellow-400/50 resize-none transition-all duration-300"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 transition-all duration-500"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base"
            variants={smoothFadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            © Jesowin Raja M. A | All Rights Reserved
          </motion.p>

          <motion.div
            className="flex justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:jesowinraja6@gmail.com"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jesowinraja6/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/jesowinxyz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/jesowin_/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
