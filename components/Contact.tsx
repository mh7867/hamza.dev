"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1400));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="section-wrap">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 80%, rgba(91,138,245,0.05) 0%, transparent 70%)",
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
            Get In Touch
          </span>
          <h2
            className="font-display font-bold italic text-5xl md:text-6xl mt-4 leading-tight"
            style={{ color: "var(--text-bright)" }}
          >
            Let&apos;s <span className="text-shimmer">Collaborate</span>
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            Have a project in mind? I&apos;d love to hear about it. Send a message and
            I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start max-w-5xl mx-auto">
          {/* Info cards */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {[
              {
                Icon: Mail,
                label: "Email",
                value: "hamza@devmail.com",
                sub: "Reply within 24h",
              },
              {
                Icon: MapPin,
                label: "Location",
                value: "Islamabad, Pakistan",
                sub: "Open to remote work",
              },
              {
                Icon: Clock,
                label: "Availability",
                value: "Mon — Sat",
                sub: "9:00 AM — 8:00 PM PKT",
              },
            ].map(({ Icon, label, value, sub }) => (
              <div key={label} className="glass-card rounded-2xl p-5 flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "var(--accent-muted)", border: "1px solid rgba(91,138,245,0.22)" }}
                >
                  <Icon size={17} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p className="text-xs font-mono tracking-wider uppercase mb-0.5" style={{ color: "var(--text-dim)" }}>
                    {label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--text-bright)" }}>
                    {value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {sub}
                  </p>
                </div>
              </div>
            ))}

            {/* Status indicator */}
            <div
              className="glass-card rounded-2xl p-5 flex items-center gap-3"
              style={{ borderColor: "rgba(71,162,72,0.30)" }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: "#47A248", boxShadow: "0 0 10px #47A24880", animation: "glow-pulse 2s ease-in-out infinite" }}
              />
              <div>
                <p className="text-sm font-medium" style={{ color: "#47A248" }}>Available for work</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>Actively seeking new opportunities</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-7">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(71,162,72,0.15)", border: "1px solid rgba(71,162,72,0.30)" }}
                  >
                    <CheckCircle size={32} style={{ color: "#47A248" }} />
                  </div>
                  <h3 className="font-display font-bold italic text-2xl" style={{ color: "var(--text-bright)" }}>
                    Message Sent!
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    Thanks for reaching out. I&apos;ll respond within 24 hours.
                  </p>
                  <button
                    className="btn-glass text-sm mt-2"
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        className="glass-input"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-mono tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        className="glass-input"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>
                      Subject
                    </label>
                    <input
                      required
                      type="text"
                      className="glass-input"
                      placeholder="Project Collaboration / Freelance Work"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="glass-input resize-none"
                      placeholder="Tell me about your project, timeline, and goals..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full justify-center text-sm"
                    style={{ opacity: sending ? 0.75 : 1 }}
                  >
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
