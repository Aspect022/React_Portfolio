"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrophyIcon, BrainIcon, CodeIcon, RocketIcon, StarIcon, AwardIcon } from "lucide-react"

const achievements = [
  {
    id: "achievement-1",
    title: "Backend Development Internship",
    organization: "WhyDigit Pvt. Ltd",
    description:
      "Completed a focused internship in Java Spring Boot and SQL-based backend development, contributing to real-time business modules.",
    date: "Jan 2025 - Feb 2025",
    type: "internship",
    icon: CodeIcon,
    highlights: ["Java Spring Boot", "SQL Database Design", "API Development", "Real-time Systems"],
  },
  {
    id: "achievement-2",
    title: "Python & ML Internship",
    organization: "Humans Care Foundation",
    description:
      "Led 35+ Python projects in Machine Learning and Data Analysis, while mentoring new interns in technical skills.",
    date: "Feb 2025 - Mar 2025",
    type: "internship",
    icon: BrainIcon,
    highlights: ["35+ ML Projects", "Team Leadership", "Data Analysis", "Mentorship"],
  },
  {
    id: "achievement-3",
    title: "HealthPredict AI Platform",
    organization: "Personal Project",
    description:
      "Developed a comprehensive AI-powered disease prediction platform capable of predicting multiple diseases with high accuracy.",
    date: "2024",
    type: "project",
    icon: RocketIcon,
    highlights: ["Multi-Disease Prediction", "FastAPI Backend", "React Frontend", "MySQL Integration"],
  },
  {
    id: "achievement-4",
    title: "Full-Stack Development Portfolio",
    organization: "Self-Directed Learning",
    description:
      "Built multiple full-stack applications demonstrating proficiency in modern web technologies and best practices.",
    date: "2023 - Present",
    type: "skill",
    icon: StarIcon,
    highlights: ["React/Next.js", "Node.js/FastAPI", "Database Design", "Cloud Deployment"],
  },
  {
    id: "achievement-5",
    title: "Open Source Contributions",
    organization: "GitHub Community",
    description: "Active contributor to open source projects with focus on web development and machine learning tools.",
    date: "2023 - Present",
    type: "contribution",
    icon: AwardIcon,
    highlights: ["GitHub Projects", "Community Engagement", "Code Reviews", "Documentation"],
  },
  {
    id: "achievement-6",
    title: "Technical Mentorship",
    organization: "Peer Learning",
    description:
      "Guided fellow students and junior developers in web development, Python programming, and project implementation.",
    date: "2024 - Present",
    type: "leadership",
    icon: TrophyIcon,
    highlights: ["Student Mentoring", "Technical Guidance", "Project Reviews", "Career Advice"],
  },
]

const typeColors = {
  internship: "bg-blue-600 hover:bg-blue-700",
  project: "bg-purple-600 hover:bg-purple-700",
  skill: "bg-green-600 hover:bg-green-700",
  contribution: "bg-orange-600 hover:bg-orange-700",
  leadership: "bg-amber-600 hover:bg-amber-700",
}

const typeLabels = {
  internship: "Internship",
  project: "Project",
  skill: "Skills",
  contribution: "Open Source",
  leadership: "Leadership",
}

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <div className="container px-4 md:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Professional Header */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Achievements & Highlights
            </h2>
            {/* Subtle background accent */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-orange-600/5 blur-xl opacity-50 -z-10" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Key milestones, internships, and notable accomplishments that define my journey as a developer.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -4 }}
                className="group h-full"
              >
                <Card className="h-full border border-border/60 bg-card shadow-sm hover:shadow-lg hover:border-border transition-all duration-300 group-hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-muted/50 group-hover:bg-muted/70 transition-colors duration-200">
                        <IconComponent className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-200" />
                      </div>
                      <Badge
                        className={`${typeColors[achievement.type as keyof typeof typeColors]} text-white border-0 shadow-sm font-medium`}
                      >
                        {typeLabels[achievement.type as keyof typeof typeLabels]}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200 leading-tight">
                      {achievement.title}
                    </CardTitle>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground font-medium">{achievement.organization}</p>
                      <p className="text-xs text-muted-foreground/80 font-normal">{achievement.date}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground">Key Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {achievement.highlights.map((highlight, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs bg-muted/40 hover:bg-muted/60 transition-colors font-normal"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
