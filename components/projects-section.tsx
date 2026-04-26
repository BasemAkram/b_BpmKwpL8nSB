"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Shield, Network, Bug, Terminal, Brain, BarChart, Database } from "lucide-react"

type FilterTab = "All" | "Networking" | "Security" | "AI" | "Cybersecurity" | "Software Development"

const filterTabs: FilterTab[] = ["All", "Networking", "Security", "AI", "Cybersecurity", "Software Development"]
const projects = [
  {
    id: 1,
    title: "Network Lab Setup",
    category: "Networking" as FilterTab,
    categoryLabel: "Infrastructure",
    description:
      "Built and simulated enterprise-grade network topologies in Cisco Packet Tracer. Implemented routing protocols (OSPF, EIGRP), inter-VLAN routing, ACLs, and NAT for scalable, real-world network design.",
    icon: Network,
    tags: ["Cisco PT", "OSPF", "VLAN", "ACL", "NAT"],
    year: "2024",
    source: "Lab Project",
  },
  {
    id: 2,
    title: "TCP/IP Packet Analysis Lab",
    category: "Networking" as FilterTab,
    categoryLabel: "Network Forensics",
    description:
      "Used Wireshark to capture and dissect live network traffic. Analysed TCP three-way handshakes, DNS queries, HTTP flows, and ARP behaviour to understand protocol fundamentals and spot anomalies.",
    icon: Terminal,
    tags: ["Wireshark", "TCP/IP", "DNS", "HTTP", "ARP"],
    year: "2024",
    source: "Lab Project",
  },
  {
    id: 3,
    title: "SOC Tier 1 Analyst Path",
    category: "Security" as FilterTab,
    categoryLabel: "SOC Operations",
    description:
      "Completed TryHackMe SOC Tier 1 learning path. Practised SIEM alert triage, threat hunting, IOC identification, and incident investigation workflows using hands-on browser labs.",
    icon: Shield,
    tags: ["TryHackMe", "SIEM", "Alert Triage", "IOC", "Threat Hunting"],
    year: "2026",
    source: "TryHackMe",
  },
  {
    id: 4,
    title: "Malware Fundamentals",
    category: "Security" as FilterTab,
    categoryLabel: "Malware Analysis",
    description:
      "Explored static and dynamic malware analysis techniques within isolated lab environments. Practiced reverse engineering, behaviour analysis, and threat identification to build foundational security skills.",
    icon: Bug,
    tags: ["Malware Analysis", "Reverse Engineering", "Threat Analysis"],
    year: "2026",
    source: "Lab Project",
  },
  {
    id: 5,
    title: "DEPI Incident Response Program",
    category: "Security" as FilterTab,
    categoryLabel: "Incident Response",
    description:
      "Hands-on 6-month DEPI program covering the full IR lifecycle: preparation, detection, containment, eradication, recovery, and lessons-learned documentation with simulated real-world scenarios.",
    icon: Shield,
    tags: ["Incident Response", "DEPI", "SOC", "Detection Engineering"],
    year: "2026",
    source: "DEPI",
  },
  {
    id: 6,
    title: "AI & Intelligent Systems Coursework",
    category: "AI" as FilterTab,
    categoryLabel: "Machine Learning Project ",
    description:
      "University specialisation in AI covering supervised/unsupervised machine learning, deep neural networks, computer vision foundations, and NLP—with practical Python implementations using scikit-learn and TensorFlow.",
    icon: Brain,
    tags: ["Python", "ML", "Deep Learning", "scikit-learn", "TensorFlow"],
    year: "2024",
    source: "Academic Project",
  },
  {
  id: 7,
  title: "Land Type Classification",
  category: "AI" as FilterTab,
  categoryLabel: "Deep Learning Project",
  description:
    "Deep learning project for classifying land types from satellite images using PyTorch with image preprocessing and CNN-based model training.",
  icon: Brain,
  tags: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "Image Classification"],
  year: "2025",
  source: "Academic Project ",
},
{
  id: 8,
  title: "Garbage Classification Challenge",
  category: "AI" as FilterTab,
  categoryLabel: "Deep Learning Competition",
  description:
    "Deep learning project for classifying waste types using image datasets and CNN models with PyTorch, including data preprocessing and model optimization. Achieved 5th place in a competitive challenge.",
  icon: Brain,
  tags: ["Python", "PyTorch", "Deep Learning", "Computer Vision", "Image Classification"],
  year: "2025",
  source: "Self Project",
},
  {
  id: 9,
  title: "Bank Asset Security Documentation",
  category: "Cybersecurity" as FilterTab,
  categoryLabel: "Security Documentation",
  description:
    "Security documentation project analyzing bank assets, identifying critical systems and data, and defining protection strategies including controls, tools, and security measures to mitigate risks.",
  icon: Shield,
  tags: ["Cybersecurity", "Risk Analysis", "Asset Management", "Security Controls", "Threat Modeling"],
  year: "2025",
  source: "Academic Project",
},

  {
  id: 11,
  title: "Automated Machine Learning & Data Analysis Pipeline",
  category: "AI" as FilterTab,
  categoryLabel: "Machine Learning Project",
  description:
    "Built an automated ML pipeline that allows users to upload datasets, perform full preprocessing on selected features, train different machine learning models, and control training split ratios. The system also generates predictions and supports data visualization through customizable graphs.",
  icon: BarChart,
  tags: ["Python", "Machine Learning", "Data Analysis", "Pandas", "Scikit-learn", "Data Visualization"],
  year: "2025",
  source: "Academic Project",
},
 {
  id: 12,
  title: "Counter System with Database Integration",
  category: "Software Development" as FilterTab,
  categoryLabel: "Desktop Application Project",
  description:
    "Developed a Python GUI-based counter system integrated with a database to store, retrieve, and manage counter data efficiently with persistent storage support.",
  icon: Database,
  tags: ["Python", "GUI", "Database", "SQL", "Data Persistence"],
  year: "2024",
  source: "Academic Project",
}, 
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All")

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="Projects" className="py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.3em] text-accent font-mono"
            >
              Projects
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold mt-4 text-balance"
            >
              Selected{" "}
              <span className="font-serif italic text-muted-foreground">Work</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-sm text-sm leading-relaxed"
          >
            Grouped by security focus so the right examples are easier to scan.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`text-xs font-mono px-4 py-2 border transition-colors ${
                activeFilter === tab
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-accent hover:text-accent"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="group bg-card border border-border hover:border-accent/50 transition-colors flex flex-col"
              >
                {/* Top bar */}
                <div className="flex items-center justify-between p-5 border-b border-border">
                  <div className="w-9 h-9 bg-secondary border border-border flex items-center justify-center">
                    <project.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground">{project.source}</span>
                    <span className="text-xs font-mono text-muted-foreground border-l border-border pl-3">{project.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs uppercase tracking-widest text-accent font-mono">
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold mt-2 group-hover:text-accent transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-secondary border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Details</span>
                    <div className="w-7 h-7 border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-background transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
