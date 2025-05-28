import { Suspense } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Timeline } from '@/components/sections/timeline';
import { Contact } from '@/components/sections/contact';
import { ScrollProgress } from '@/components/layout/scroll-progress';

// Loading component
function PageLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary"></div>
    </div>
  );
}

// Main content component
function HomeContent() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <ScrollProgress />
      <Header />
      <section id="hero" className="relative">
        <Hero />
      </section>
      <section id="about" className="py-20">
        <About />
      </section>
      <section id="projects" className="bg-muted/50 py-20">
        <Projects />
      </section>
      <section id="experience" className="py-20">
        <Timeline />
      </section>
      <section id="contact" className="bg-muted/50 py-20">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<PageLoading />}>
      <HomeContent />
    </Suspense>
  );
}
