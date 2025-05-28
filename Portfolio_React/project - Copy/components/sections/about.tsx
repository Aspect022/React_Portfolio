'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GithubIcon, LinkedinIcon, TwitterIcon, DownloadIcon, FileIcon } from 'lucide-react';

const skills = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'Spring Boot', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: 'Flask', category: 'backend' },

  // Programming Languages
  { name: 'JavaScript', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'C', category: 'language' },
  { name: 'C++', category: 'language' },

  // AI / ML
  { name: 'TensorFlow', category: 'ai' },
  { name: 'PyTorch', category: 'ai' },
  { name: 'Scikit-learn', category: 'ai' },
  { name: 'Pandas', category: 'ai' },
  { name: 'NumPy', category: 'ai' },
  { name: 'Matplotlib', category: 'ai' },
  { name: 'OpenCV', category: 'ai' },
  { name: 'LangChain', category: 'ai' },

  // Databases
  { name: 'MongoDB', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'SQLite', category: 'database' },

  // DevOps / Cloud / Tools
  { name: 'Docker', category: 'devops' },
  { name: 'Git', category: 'tool' },
  { name: 'GitHub Actions', category: 'devops' },
  { name: 'Vercel', category: 'cloud' },

];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="container px-4 md:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-4 text-muted-foreground">
            Get to know more about my background, skills, and what drives me as a developer.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-5">
          {/* Profile Image and Social Links */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full sm:w-64 md:w-full md:max-w-xs"
            >
              <Image
                src="/blackbag.png"
                alt="Jayesh RL"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 192px, 256px"
                priority
              />
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex justify-center gap-4"
            >
              <Link href="https://github.com/Aspect022" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" aria-label="GitHub">
                  <GithubIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jayesh-rl-748059291/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" aria-label="LinkedIn">
                  <LinkedinIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://x.com/Jayesh25279350" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" aria-label="Twitter">
                  <TwitterIcon className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 flex justify-center"
            >
              <Link href="/jayesh_resume.pdf" download>
                <Button variant="outline" className="w-full max-w-xs">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Bio and Skills */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold">My Background</h3>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  I’m an AI and Full-Stack Developer passionate about building smart, impactful
                  software solutions. My tech journey kicked off with a curiosity for how digital
                  systems think, work, and connect people.
                </p>
                <p>
                  Right now, I focus on creating AI-powered applications and robust backend systems
                  using Python, FastAPI, and modern JavaScript frameworks like React and Next.js.
                  Clean code, performance, and meaningful user experiences are at the core of
                  everything I build.
                </p>
                <p>
                  When I'm not coding, you’ll find me exploring new AI trends, brainstorming startup
                  ideas, or guiding peers through tech challenges and college projects.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-8">
                <h3 className="text-xl font-bold">Skills & Technologies</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    >
                      <Badge variant="secondary" className="px-3 py-1 text-sm">
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
