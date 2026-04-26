"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap, BookOpen, ExternalLink } from "lucide-react"

type ExperienceType = "internship" | "education" | "training" | "volunteer"

const typeConfig: Record<ExperienceType, { icon: React.ElementType; color: string; label: string }> = {
  internship: { icon: Briefcase, color: "text-accent", label: "Internship" },
  education:  { icon: GraduationCap, color: "text-foreground", label: "Education" },
  training:   { icon: BookOpen, color: "text-muted-foreground", label: "Training" },
  volunteer:  { icon: Briefcase, color: "text-muted-foreground", label: "Volunteer" },
}

const experiences = [

    {
    id: "Malware-Analysis",
    role: "Malware-Analysis",
    organization: "Independent Lab Work",
    organizationUrl: "#",
    duration: "2026",
    isCurrent: false,
    type: "training" as ExperienceType,
bullets: [
  "Analyzed malware behavior in isolated lab environments to understand execution patterns and system-level impact.",
  "Identified malicious indicators of compromise (IOCs) through process activity, file system changes, and runtime behavior.",
],
skills: [
  "Malware Analysis",
  "IOC Extraction",
  "Process Monitoring",
  "System Behavior Analysis",
  "DFIR Fundamentals"
],
  },

  
  {
    id: "minufiya-ai",
    role: "Bachelor of Artificial Intelligence",
    organization: "Minufiya University",
    organizationUrl: "https://www.menofia.edu.eg/",
    duration: "2022 – Present",
    isCurrent: true,
    type: "education" as ExperienceType,
    bullets: [
      "Specialization: Artificial Intelligence & Intelligent Systems.",
      "Focused on networking, cybersecurity, machine learning, and software engineering.",
    ],
    skills: ["AI", "Machine Learning", "Networking", "Security"],
  },
  {
    id: "depi-ir",
    role: "Incident Response Analyst – DEPI Program",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    organizationUrl: "https://www.depi.gov.eg/",
    duration: "6 Months",
    isCurrent: true,
    type: "internship" as ExperienceType,
    bullets: [
      "Completed the full DEPI Incident Response lifecycle training—detection, containment, eradication, and recovery.",
      "Practiced hands-on SOC alert triage and investigated simulated security incidents end-to-end.",
    ],
    skills: ["Incident Response", "SOC", "Alert Triage", "DFIR"],
  },
  {
    id: "ccna-study",
    role: "CCNA & CCNP Study Track",
    organization: "Self-Study / Cisco",
    organizationUrl: "https://www.cisco.com/",
    duration: "2023 – 2024",
    isCurrent: false,
    type: "training" as ExperienceType,
    bullets: [
      "Mastered routing & switching, ACLs, NAT, and VLANs through Cisco Packet Tracer labs.",
      "Advanced to CCNP-level concepts including enterprise networking and high-availability design.",
    ],
    skills: ["CCNA", "CCNP", "Routing", "Switching", "ACL", "Cisco Packet Tracer"],
  },
  {
    id: "mcsa-study",
    role: "MCSA – Windows Server Administration",
    organization: "Microsoft",
    organizationUrl: "https://www.microsoft.com/",
    duration: "2024",
    isCurrent: false,
    type: "training" as ExperienceType,
    bullets: [
      "Gained expertise in Windows Server roles, Active Directory, Group Policy, and DNS/DHCP configuration.",
      "Applied system hardening and access management principles for enterprise environments.",
    ],
    skills: ["MCSA", "Windows Server", "Active Directory", "Group Policy"],
  },
  {
    id: "tryhackme-soc",
    role: "SOC Analyst Tier 1 Path",
    organization: "TryHackMe",
    organizationUrl: "https://tryhackme.com/",
    duration: "2026",
    isCurrent: false,
    type: "training" as ExperienceType,
    bullets: [
      "Completed TryHackMe SOC Tier 1 path covering SIEM fundamentals, threat detection, and alert analysis.",
      "Practised DFIR and malware analysis fundamentals through hands-on browser-based labs.",
    ],
    skills: ["TryHackMe", "SIEM", "DFIR", "Malware Analysis", "Threat Detection"],
  },
  {
    id: "wireshark-lab",
    role: "Network Analysis & Packet Forensics",
    organization: "Independent Lab Work",
    organizationUrl: "#",
    duration: "2026",
    isCurrent: false,
    type: "training" as ExperienceType,
    bullets: [
      "Built TCP/IP analysis labs using Wireshark to inspect protocol behavior and detect anomalies.",
      "Developed deep understanding of packet flow, handshake mechanisms, and network forensics techniques.",
    ],
    skills: ["Wireshark", "TCP/IP", "Packet Analysis", "Network Forensics"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="Experience" className="py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-accent font-mono"
          >
            Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mt-4 text-balance"
          >
            Education &amp;{" "}
            <span className="font-serif italic text-muted-foreground">Training</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-[200px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-0">
            {experiences.map((exp, index) => {
              const config = typeConfig[exp.type]
              const Icon = config.icon

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative flex flex-col sm:flex-row gap-6 pb-12"
                >
                  {/* Left: duration */}
                  <div className="sm:w-[200px] sm:text-right sm:pr-10 flex-shrink-0 pt-1">
                    <span className="text-xs font-mono text-muted-foreground/70">
                      {exp.duration}
                    </span>
                    {exp.isCurrent && (
                      <div className="flex sm:justify-end items-center gap-1.5 mt-1">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                        </span>
                        <span className="text-xs text-accent font-mono">Current</span>
                      </div>
                    )}
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 lg:left-[200px] hidden sm:flex w-5 h-5 -translate-x-1/2 mt-0.5 items-center justify-center">
                    <div className={`w-2.5 h-2.5 rounded-full border-2 ${exp.isCurrent ? "bg-accent border-accent" : "bg-background border-border"}`} />
                  </div>

                  {/* Right: content */}
                  <div className="sm:pl-10 flex-1">
                    <div className="bg-card border border-border p-6 hover:border-accent/40 transition-colors group">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-secondary border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon className={`w-3.5 h-3.5 ${config.color}`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground leading-snug">
                              {exp.role}
                            </h3>
                            <a
                              href={exp.organizationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1 mt-0.5"
                            >
                              {exp.organization}
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          </div>
                        </div>
                        <span className="text-xs font-mono px-2 py-1 bg-secondary border border-border text-muted-foreground">
                          {config.label}
                        </span>
                      </div>

                      {/* Bullets */}
                      <ul className="mt-4 space-y-2">
                        {exp.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                            <span className="text-accent mt-1.5 flex-shrink-0 text-xs">▸</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2.5 py-1 bg-secondary border border-border text-muted-foreground font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
