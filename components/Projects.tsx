"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
    </svg>
  );
}

const projects = [
  {
    title: "ShopSphere",
    subtitle: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with cart management, Stripe payments, real-time inventory tracking, and admin analytics dashboard. Built with MERN stack and Redis caching.",
    stack: ["React", "Node.js", "MongoDB", "Express", "Redis", "Stripe"],
    gradient: "linear-gradient(135deg, rgba(91,138,245,0.30) 0%, rgba(139,112,240,0.20) 100%)",
    accent: "#5b8af5",
    tag: "Full Stack",
    featured: true,
  },
  {
    title: "NexChat",
    subtitle: "Real-Time Chat App",
    description:
      "WebSocket-powered messaging platform featuring rooms, direct messages, file sharing, typing indicators, and end-to-end encryption.",
    stack: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    gradient: "linear-gradient(135deg, rgba(139,112,240,0.30) 0%, rgba(91,138,245,0.15) 100%)",
    accent: "#8b70f0",
    tag: "Real-time",
    featured: false,
  },
  {
    title: "TaskFlow",
    subtitle: "Project Management Dashboard",
    description:
      "Drag-and-drop Kanban board with team collaboration, priority queues, deadline tracking, and GitHub integration for development teams.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Express", "Redux"],
    gradient: "linear-gradient(135deg, rgba(71,162,72,0.25) 0%, rgba(91,138,245,0.15) 100%)",
    accent: "#47A248",
    tag: "Dashboard",
    featured: false,
  },
  {
    title: "APIForge",
    subtitle: "REST API Builder Tool",
    description:
      "Visual API design and testing tool that auto-generates Express.js routes, Mongoose schemas, and Postman collections from a drag-drop interface.",
    stack: ["React", "Node.js", "MongoDB", "TypeScript", "GraphQL"],
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.25) 0%, rgba(91,138,245,0.12) 100%)",
    accent: "#f59e0b",
    tag: "Dev Tool",
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

function ProjectCard({ project, index, featured }: { project: (typeof projects)[0]; index: number; featured?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${
        featured ? "lg:col-span-2 lg:flex-row" : ""
      }`}
      style={{
        boxShadow: hovered
          ? `0 0 0 1px var(--border-dim), 0 12px 48px rgba(0,0,0,0.55), 0 0 80px ${project.accent}18`
          : undefined,
        transform: hovered ? "translateY(-4px)" : undefined,
      }}
    >
      {/* Visual placeholder */}
      <div
        className={`relative overflow-hidden flex-shrink-0 ${featured ? "lg:w-1/2 h-60 lg:h-auto" : "h-48"}`}
        style={{ background: project.gradient }}
      >
        {/* Grid lines decoration */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200,215,240,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,215,240,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span
            className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              background: `${project.accent}22`,
              border: `1px solid ${project.accent}44`,
              color: project.accent,
            }}
          >
            {project.tag}
          </span>
        </div>

        {/* Mock UI dots */}
        <div className="absolute top-4 right-4 flex gap-1.5 opacity-50">
          {[0,1,2].map(i => (
            <div key={i} className="w-2 h-2 rounded-full" style={{ background: "rgba(200,215,240,0.4)" }} />
          ))}
        </div>

        {/* Decorative lines mimicking a UI */}
        <div className="absolute bottom-6 left-6 right-6 space-y-2">
          {[70, 50, 85, 40].map((w, i) => (
            <div
              key={i}
              className="h-1.5 rounded-full"
              style={{ width: `${w}%`, background: `rgba(200,215,240,${0.08 + i * 0.04})` }}
            />
          ))}
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4"
          style={{ background: "rgba(9,12,26,0.7)", backdropFilter: "blur(4px)" }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href="#"
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all"
            style={{ background: "var(--glass-4)", border: "1px solid var(--border-bright)", color: "var(--text-bright)" }}
            aria-label="View on GitHub"
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="#"
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all"
            style={{ background: "var(--accent)", color: "#fff" }}
            aria-label="Live Demo"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className={`flex flex-col p-6 gap-4 ${featured ? "lg:flex-1 lg:justify-center lg:p-8" : ""}`}>
        <div>
          <p className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>
            {project.subtitle}
          </p>
          <h3
            className="font-display font-bold italic text-2xl md:text-3xl leading-tight"
            style={{ color: "var(--text-bright)" }}
          >
            {project.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-lg font-medium"
              style={{
                background: "var(--glass-2)",
                border: "1px solid var(--border-dim)",
                color: "var(--text-muted)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-sm font-medium" style={{ color: project.accent }}>
          View Project <ArrowRight size={14} />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="section-wrap">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 40%, rgba(91,138,245,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="section-label mb-4 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              Portfolio
            </span>
            <h2
              className="font-display font-bold italic text-5xl md:text-6xl mt-4 leading-tight"
              style={{ color: "var(--text-bright)" }}
            >
              Selected <span className="text-shimmer">Work</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs" style={{ color: "var(--text-muted)" }}>
            End-to-end applications showcasing the full MERN stack in production.
          </p>
        </motion.div>

        {/* Modern asymmetric grid */}
        {inView && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                featured={i === 0}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
