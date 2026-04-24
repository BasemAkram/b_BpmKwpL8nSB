"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Award } from "lucide-react"

const certifications = [
  {
    title: "CCNA – Entrprise Networking",
    issuer: "Cisco",
    issuerUrl: "https://www.cisco.com/",
    date: "2024",
    highlight: false,
    image: "/certs/ccna.jpg",
  },
  {
    title: "CCNP – Advanced Networking Concepts",
    issuer: "Cisco",
    issuerUrl: "https://www.cisco.com/",
    date: "2024",
    highlight: false,
    image: "/certs/ccnp.jpg",
  },
  {
    title: "MCSA – Windows Server Administration",
    issuer: "Microsoft",
    issuerUrl: "https://www.microsoft.com/",
    date: "2024",
    highlight: false,
    image: "/certs/mcsa.jpg",
  },
  {
    title: "Digital Forensics Fundamentals",
    issuer: "MaharaTech",
    issuerUrl: https:/maharatech.gov.eg",
    date: "2024",
    highlight: true,
    image: "/certs/depi-ir.jpg",
  },
    title: "CCNA – Switching And Routing",
    issuer: "Cisco",
    issuerUrl: "https://www.cisco.com/",
    date: "2024",
    highlight: false,
    image: "/certs/malware.jpg",

  },
    title: "CCNA – Intro To Networks",
    issuer: "Cisco",
    issuerUrl: "https://www.cisco.com/",
    date: "2024",
    highlight: false,
    image: "/certs/dfir.jpg",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="Certifications" className="py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-accent font-mono"
          >
            Certifications
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mt-4 text-balance"
          >
            Credentials &amp;{" "}
            <span className="font-serif italic text-muted-foreground">Achievements</span>
          </motion.h2>
        </div>

        {/* Cert grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.issuerUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group flex flex-col justify-between border transition-colors hover:border-accent/60 overflow-hidden ${
                cert.highlight
                  ? "bg-card border-accent/30"
                  : "bg-card border-border"
              }`}
            >
              {/* Image placeholder */}
              {cert.image && (
                <div className="relative w-full h-40 bg-secondary border-b border-border overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-9 h-9 bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                    <Award className={`w-4 h-4 ${cert.highlight ? "text-accent" : "text-muted-foreground"}`} />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-accent transition-colors flex-shrink-0 mt-0.5" />
                </div>

                <div className="mt-5 flex-1">
                  <h3 className="font-semibold text-foreground leading-snug text-sm group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5">{cert.issuer}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground/60">{cert.date}</span>
                  {cert.highlight && (
                    <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent border border-accent/20 font-mono">
                      Key Cert
                    </span>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
