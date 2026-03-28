"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const TYPING_PHRASES = [
  "Building scalable APIs",
  "Crafting React interfaces",
  "Engineering with Node.js",
  "Designing MongoDB schemas",
];

function TypeWriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % TYPING_PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <span
      className="font-mono text-base font-medium"
      style={{ color: "var(--accent)" }}
    >
      {displayed}
      <span className="inline-block w-0.5 h-4 ml-0.5 align-middle" style={{ background: "var(--accent)", animation: "blink 1s step-end infinite" }} />
    </span>
  );
}

const floatVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: "5rem" }}
    >
      {/* Radial spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(91,138,245,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left — Text */}
          <div className="flex-1 max-w-xl">
            {/* Label */}
            <motion.div
              custom={0}
              variants={floatVariants}
              initial="initial"
              animate="animate"
            >
              <span className="section-label mb-6 inline-flex">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--accent)", boxShadow: "0 0 6px var(--accent-glow)" }}
                />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1}
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="font-display text-7xl md:text-8xl lg:text-[5.5rem] font-bold italic leading-none tracking-tight mb-4"
              style={{ color: "var(--text-void)" }}
            >
              Ham
              <span className="text-shimmer">za</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              custom={2}
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="text-xl font-medium mb-3"
              style={{ color: "var(--text-base)" }}
            >
              MERN Stack Developer
            </motion.p>

            {/* Typewriter */}
            <motion.div
              custom={3}
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="mb-6 h-7"
            >
              <TypeWriter />
            </motion.div>

            {/* Bio */}
            <motion.p
              custom={4}
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-muted)", maxWidth: "440px" }}
            >
              I architect end-to-end web solutions — from MongoDB schemas and
              Express APIs to React interfaces and Node.js services — with a
              focus on performance and scalability.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={5}
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                className="btn-primary"
                onClick={() => handleScroll("#projects")}
              >
                Explore Work
                <ArrowDown size={16} />
              </button>
              <button
                className="btn-glass"
                onClick={() => handleScroll("#contact")}
              >
                Let&apos;s Talk
                <Mail size={16} />
              </button>
            </motion.div>

            {/* Social */}
            <motion.div
              custom={6}
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="flex items-center gap-4"
            >
              <span
                className="text-xs font-mono tracking-widest uppercase"
                style={{ color: "var(--text-dim)" }}
              >
                Find me on
              </span>
              <div className="h-px w-8" style={{ background: "var(--border-base)" }} />
              {[
                { Icon: GithubIcon,   label: "GitHub",   href: "#" },
                { Icon: LinkedinIcon, label: "LinkedIn", href: "#" },
                { Icon: Mail,     label: "Email",    href: "#contact" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={href.startsWith("#") ? (e) => { e.preventDefault(); handleScroll(href); } : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: "var(--glass-2)",
                    border: "1px solid var(--border-base)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-bright)";
                    e.currentTarget.style.color = "var(--text-bright)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(91,138,245,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-base)";
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Liquid Glass Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative flex-shrink-0"
          >
            <div className="orb-wrap animate-float-slow">
              {/* Glow halo */}
              <div className="orb-glow" />

              {/* Main orb with CSS morph via framer */}
              <motion.div
                className="orb"
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 60% 70% 40% / 50% 60% 30% 60%",
                    "50% 50% 40% 60% / 40% 50% 60% 50%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                  ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="orb-bg" />
                <div className="orb-plasma" />
                <div className="orb-plasma-2" />
                <div className="orb-highlight" />
                <div className="orb-inner-ring" />

                {/* MERN stack labels inside orb */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ zIndex: 2 }}
                >
                  <div
                    className="text-center"
                    style={{
                      fontFamily: "var(--font-jetbrains, monospace)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "rgba(200,215,255,0.35)",
                      userSelect: "none",
                    }}
                  >
                    <div style={{ fontSize: "2.5rem", letterSpacing: "0.15em", fontFamily: "var(--font-cormorant)", fontStyle: "italic", color: "rgba(200,215,255,0.50)", fontWeight: 300 }}>
                      MERN
                    </div>
                    <div style={{ marginTop: "0.25rem" }}>Full Stack</div>
                  </div>
                </div>
              </motion.div>

              {/* Satellite orbs */}
              <motion.div
                className="orb-satellite"
                style={{ width: 80, height: 80, top: -20, right: 30 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="orb-satellite"
                style={{ width: 48, height: 48, bottom: 40, left: -10 }}
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="orb-satellite"
                style={{ width: 32, height: 32, bottom: -10, right: 80 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
            </div>

            {/* Stats float cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="glass-card absolute -left-10 top-1/4 rounded-2xl p-4 hidden lg:block"
              style={{ minWidth: 120 }}
            >
              <div className="font-display font-bold text-3xl italic" style={{ color: "var(--text-bright)" }}>3+</div>
              <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="glass-card absolute -right-8 bottom-1/4 rounded-2xl p-4 hidden lg:block"
              style={{ minWidth: 130 }}
            >
              <div className="font-display font-bold text-3xl italic" style={{ color: "var(--text-bright)" }}>30+</div>
              <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>Projects Delivered</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "var(--text-dim)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--border-base), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
