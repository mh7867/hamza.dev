"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    role: "Senior MERN Stack Developer",
    company: "TechNova Solutions",
    period: "2023 — Present",
    description:
      "Lead development of a multi-tenant SaaS platform serving 50k+ users. Architected microservices with Node.js, designed MongoDB schemas for complex hierarchical data, and built a React dashboard with real-time analytics.",
    highlights: ["50k+ active users", "40% performance improvement", "0-downtime deployments"],
    tech: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
  },
  {
    type: "work",
    role: "Full Stack Developer",
    company: "Pixel Craft Agency",
    period: "2022 — 2023",
    description:
      "Delivered 12+ client projects across fintech, e-commerce, and healthcare. Specialized in building custom CMS solutions, payment integrations, and scalable REST APIs with Express.js.",
    highlights: ["12 client projects", "Payment integrations", "Custom CMS systems"],
    tech: ["React", "Express", "MongoDB", "Stripe", "JWT"],
  },
  {
    type: "work",
    role: "Junior Web Developer",
    company: "StartupBase Labs",
    period: "2021 — 2022",
    description:
      "Built and maintained the company's core product — a social networking platform. Implemented real-time features using Socket.io, RESTful APIs, and responsive React interfaces.",
    highlights: ["Real-time features", "REST API design", "15k users onboarded"],
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
  },
  {
    type: "education",
    role: "BSc Computer Science",
    company: "National University of Sciences & Technology",
    period: "2017 — 2021",
    description:
      "Graduated with honours. Specialized in Software Engineering and Distributed Systems. Final year project: a real-time collaborative code editor using WebSockets and operational transforms.",
    highlights: ["First Class Honours", "Final year project award", "Software Engineering major"],
    tech: [],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="section-wrap">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 20% 50%, rgba(139,112,240,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            Journey
          </span>
          <h2
            className="font-display font-bold italic text-5xl md:text-6xl mt-4 leading-tight"
            style={{ color: "var(--text-bright)" }}
          >
            Experience &amp; <span className="text-shimmer">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line ml-5 md:ml-8" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex gap-6 md:gap-10 pl-14 md:pl-20 relative"
              >
                {/* Dot */}
                <div
                  className="timeline-dot"
                  style={{ left: "12px" }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: exp.type === "work" ? "var(--accent-muted)" : "rgba(139,112,240,0.15)",
                      border: `1px solid ${exp.type === "work" ? "rgba(91,138,245,0.40)" : "rgba(139,112,240,0.40)"}`,
                      position: "absolute",
                      top: "-2.5px",
                      left: "-7.5px",
                      width: "20px",
                      height: "20px",
                    }}
                  >
                    {exp.type === "work" ? (
                      <Briefcase size={10} style={{ color: "var(--accent)" }} />
                    ) : (
                      <GraduationCap size={10} style={{ color: "#8b70f0" }} />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 flex-1 mb-0">
                  {/* Period */}
                  <div
                    className="text-xs font-mono tracking-wider mb-3"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {exp.period}
                  </div>

                  {/* Role & company */}
                  <h3
                    className="font-display font-bold italic text-2xl leading-tight mb-1"
                    style={{ color: "var(--text-bright)" }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium mb-4" style={{ color: "var(--accent)" }}>
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{
                          background: "var(--glass-2)",
                          border: "1px solid var(--border-base)",
                          color: "var(--text-muted)",
                        }}
                      >
                        ✦ {h}
                      </span>
                    ))}
                  </div>

                  {/* Tech */}
                  {exp.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded"
                          style={{
                            background: "var(--accent-muted)",
                            border: "1px solid rgba(91,138,245,0.20)",
                            color: "var(--accent)",
                            fontFamily: "var(--font-jetbrains, monospace)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
