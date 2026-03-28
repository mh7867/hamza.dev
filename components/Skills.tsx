"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Skill = { name: string; level: number };

const skillGroups: { category: string; color: string; skills: Skill[] }[] = [
  {
    category: "Database",
    color: "#47A248",
    skills: [
      { name: "MongoDB",        level: 95 },
      { name: "Mongoose ODM",   level: 92 },
      { name: "Redis",          level: 72 },
      { name: "PostgreSQL",     level: 68 },
    ],
  },
  {
    category: "Backend",
    color: "#8b5cf6",
    skills: [
      { name: "Node.js",        level: 95 },
      { name: "Express.js",     level: 93 },
      { name: "REST APIs",      level: 96 },
      { name: "GraphQL",        level: 75 },
      { name: "Socket.io",      level: 82 },
      { name: "JWT / OAuth",    level: 88 },
    ],
  },
  {
    category: "Frontend",
    color: "#61DAFB",
    skills: [
      { name: "React.js",       level: 95 },
      { name: "Next.js",        level: 90 },
      { name: "TypeScript",     level: 87 },
      { name: "Redux / Zustand", level: 83 },
      { name: "Tailwind CSS",   level: 92 },
      { name: "Framer Motion",  level: 78 },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "#f59e0b",
    skills: [
      { name: "Git & GitHub",   level: 95 },
      { name: "Docker",         level: 74 },
      { name: "CI/CD",          level: 70 },
      { name: "Vercel / Render", level: 88 },
      { name: "Postman",        level: 90 },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

function SkillBar({ name, level, color, i }: { name: string; level: number; color: string; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium" style={{ color: "var(--text-base)" }}>{name}</span>
        <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{level}%</span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "var(--glass-3)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ delay: 0.1 + i * 0.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="section-wrap">
      {/* Subtle radial */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(139,112,240,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            Tech Stack
          </span>
          <h2
            className="font-display font-bold italic text-5xl md:text-6xl mt-4 leading-tight"
            style={{ color: "var(--text-bright)" }}
          >
            Skills &amp; <span className="text-shimmer">Expertise</span>
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            The full-stack toolkit I use to architect and ship production applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map(({ category, color, skills }, gi) => (
            <motion.div
              key={category}
              custom={gi + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass-card rounded-2xl p-6 flex flex-col gap-5"
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: color, boxShadow: `0 0 8px ${color}80` }}
                />
                <span
                  className="text-xs font-mono font-medium tracking-widest uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  {category}
                </span>
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-4">
                {skills.map((sk, i) => (
                  <SkillBar key={sk.name} {...sk} color={color} i={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating skill tags ticker */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          <div
            className="flex gap-3 w-max"
            style={{ animation: "ticker 30s linear infinite" }}
          >
            {[
              "MongoDB", "Express.js", "React.js", "Node.js",
              "TypeScript", "Next.js", "Redux", "Tailwind CSS",
              "GraphQL", "Socket.io", "Docker", "Jest",
              "Git", "Vercel", "REST APIs", "JWT",
              "MongoDB", "Express.js", "React.js", "Node.js",
              "TypeScript", "Next.js", "Redux", "Tailwind CSS",
              "GraphQL", "Socket.io", "Docker", "Jest",
              "Git", "Vercel", "REST APIs", "JWT",
            ].map((tag, i) => (
              <span key={i} className="skill-tag whitespace-nowrap">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
