"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, Download, ArrowRight, Mail, MapPin, Clock, Linkedin, Phone } from "lucide-react"
import { useState, useEffect } from "react"

const roles = [
  "Network Engineer",
  "Cybersecurity Enthusiast",
  "SOC Analyst",
  "Incident Responder",
  "AI/ML Learner",
]

const tools = ["Cisco PT", "Wireshark", "Python", "TryHackMe", "Linux", "Nmap"]

const stats = [
  { value: "6+", label: "Certifications Earned" },
  { value: "CCNA", label: "Cisco Certified" },
  { value: "3.7+", label: "GPA at Minufiya Univ." },
]

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="Home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-16">
        <div className="max-w-4xl mx-auto text-center">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-card border border-border px-4 py-2 mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs text-muted-foreground">Available for Opportunities</span>
            <span className="text-border">·</span>
            <Clock className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Egypt time</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold tracking-tighter leading-none text-foreground">
              BASEM
            </h1>
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-serif italic text-muted-foreground tracking-tight leading-none mt-1">
              Akram Younis
            </h2>
          </motion.div>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 h-8 flex items-center justify-center gap-3"
          >
            <span className="w-6 h-px bg-accent flex-shrink-0" />
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="text-base font-mono text-accent tracking-wide"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="w-6 h-px bg-accent flex-shrink-0" />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-muted-foreground leading-relaxed max-w-xl mx-auto text-base"
          >
            Computer Science student at Minufiya University specializing in{" "}
            <span className="text-foreground font-medium">AI &amp; Intelligent Systems</span>.
            Hands-on with network engineering, SOC workflows, incident response, and machine learning—
            building systems that are secure, reliable, and intelligent.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Banha, Egypt</span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-8 justify-center"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-2 justify-center"
          >
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-xs font-mono px-3 py-1.5 bg-secondary border border-border text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-3 justify-center"
          >
            <a
              href="#Projects"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-background transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#Experience"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              Experience
            </a>
            <a
              href="mailto:basemakram560@gmail.com"
              className="inline-flex items-center gap-2 bg-secondary border border-border px-4 py-3 text-sm text-foreground hover:border-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="tel:+201553927779"
              className="inline-flex items-center gap-2 bg-secondary border border-border px-4 py-3 text-sm text-foreground hover:border-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
            <a
              href="www.linkedin.com/in/basem-younis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary border border-border px-4 py-3 text-sm text-foreground hover:border-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="/Basem_Akram_CV.docx"
              className="inline-flex items-center gap-2 bg-secondary border border-border px-4 py-3 text-sm text-foreground hover:border-accent transition-colors"
            >
              <Download className="w-4 h-4" />
              CV
            </a>
          </motion.div>

          {/* Closing line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 text-xs text-muted-foreground/60 font-mono text-center"
          >
            Best next step: share your opportunity and receive a tailored response within 24 hours.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
