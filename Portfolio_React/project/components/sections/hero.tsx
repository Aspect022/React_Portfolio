"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import { ScrollLink } from "@/components/ui/scroll-link";

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="container flex min-h-screen items-center justify-center">
        <div className="animate-pulse h-10 w-40 bg-muted rounded"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90" />
      
      <div className="container relative flex min-h-screen flex-col items-center justify-center px-4 py-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="floating text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="gradient-text">Jayesh RL</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 h-16 text-xl sm:text-2xl md:text-3xl text-muted-foreground"
          >
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "AI/ML Engineer",
                2000,
                "Student",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6 mx-auto max-w-2xl text-muted-foreground"
          >
            I build intelligent AI-driven applications, craft backend systems, and explore emerging technologies to create impactful, future-ready software solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ScrollLink href="#projects">
              <Button size="lg" className="font-medium hover:text-[#00BFFF] transition-colors">
                View My Work
              </Button>
            </ScrollLink>
            <ScrollLink href="#contact">
              <Button size="lg" variant="outline" className="font-medium hover:text-[#98FB98] transition-colors">
                Contact Me
              </Button>
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5 
        }}
      >
        <ScrollLink href="#about">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:text-[#00BFFF] transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDownIcon className="h-6 w-6" />
          </Button>
        </ScrollLink>
      </motion.div>
    </div>
  );
}