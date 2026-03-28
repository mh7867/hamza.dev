"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Layers, Zap, Globe } from "lucide-react";

const stats = [
  { value: "3+",  label: "Years of Experience",    icon: Code2  },
  { value: "30+", label: "Projects Completed",      icon: Layers },
  { value: "15+", label: "Happy Clients",           icon: Globe  },
  { value: "99%", label: "Client Satisfaction",     icon: Zap    },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-wrap">
      <div className="container">
        {/* Section header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            About Me
          </span>
          <h2
            className="font-display font-bold italic text-5xl md:text-6xl mt-4 leading-tight"
            style={{ color: "var(--text-bright)" }}
          >
            Crafting Digital<br />
            <span className="text-shimmer">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio text */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-5"
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I&apos;m a full-stack developer specializing in the{" "}
              <span style={{ color: "var(--text-base)", fontWeight: 500 }}>MERN stack</span> — building
              everything from robust RESTful APIs and real-time systems to polished,
              performant front-end interfaces.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              My approach blends engineering discipline with product thinking. I care
              deeply about code architecture, user experience, and the small details
              that separate good software from{" "}
              <span style={{ color: "var(--text-base)", fontWeight: 500 }}>great software</span>.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              When I&apos;m not building, I&apos;m exploring new patterns in distributed systems,
              contributing to open-source, or sharpening my knowledge of modern web
              performance and accessibility best practices.
            </p>

            {/* What I do */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              {[
                "API Design & Architecture",
                "React & Next.js Interfaces",
                "Database Modelling (MongoDB)",
                "Real-time Systems (Socket.io)",
                "Authentication & Security",
                "CI/CD & Deployment",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-2 flex gap-3">
              <button
                className="btn-primary text-sm"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Work With Me
              </button>
              <a
                href="#"
                className="btn-glass text-sm"
                download
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="glass-card rounded-2xl p-6"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--accent-muted)", border: "1px solid rgba(91,138,245,0.22)" }}
                >
                  <Icon size={18} style={{ color: "var(--accent)" }} />
                </div>
                <div
                  className="font-display font-bold italic text-4xl leading-none mb-2"
                  style={{ color: "var(--text-bright)" }}
                >
                  {value}
                </div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
