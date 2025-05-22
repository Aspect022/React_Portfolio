"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon, GithubIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type FilterOption = "all" | "frontend" | "backend" | "fullstack" | "AI";

export function Projects() {
  const [filter, setFilter] = useState<FilterOption>("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Filter projects based on selected filter
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "frontend") 
      return project.tags.some(tag => 
        ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "CSS", "HTML"].includes(tag)
      );
    if (filter === "backend") 
      return project.tags.some(tag => 
        ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "API","Java","FastaAPI"].includes(tag)
      );
      if (filter === "AI") 
        return project.tags.some(tag => 
          ["Python", "Joblib", "TensorFlow", "Scikit-learn", "OpenCV", "PyTorch"].includes(tag)
        );
    if (filter === "fullstack") 
      return project.tags.some(tag => 
        ["React", "Next.js", "Vue.js", "Angular",].includes(tag)
      ) && project.tags.some(tag => 
        ["Node.js", "Express", "MongoDB", "Java","FastaAPI","Python",].includes(tag)
      );
    return true;
  });

  return (
    <div className="container px-4 md:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <p className="mt-4 text-muted-foreground">
            A selection of my latest work. Each project represents a unique challenge
            and solution.
          </p>
          
          {/* Filter Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {(["all", "frontend", "backend","AI", "fullstack"] as const).map((option) => (
              <Button
                key={option}
                variant={filter === option ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(option)}
                className="capitalize"
              >
                {option}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            </motion.div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">No projects match the selected filter.</p>
          </div>
        )}
        
        {/* Project Detail Modal */}
        <Dialog 
          open={!!selectedProject} 
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </DialogDescription>
              </DialogHeader>
              
              <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <p className="text-muted-foreground">{selectedProject.description}</p>
              
              <div className="flex justify-end gap-4">
                <Button variant="outline" asChild>
                  <Link href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </motion.div>
    </div>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {project.featured && (
          <Badge className="absolute right-2 top-2">Featured</Badge>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-muted-foreground text-sm">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          variant="ghost" 
          className="w-full" 
          onClick={onClick}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}