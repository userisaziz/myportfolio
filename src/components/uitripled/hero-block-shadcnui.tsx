"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { MapPin, Mail, Download, Code2, Link2, ArrowDown } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HeroBlock() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-background min-h-screen w-full px-6 pt-20 sm:px-8 md:pt-0">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl w-full"
      >
        <motion.div variants={item} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Avatar className="w-24 h-24 md:w-28 md:h-28 ring-2 ring-border shadow-lg">
                <AvatarImage
                  src="https://github.com/userisaziz.png"
                  alt="AbdulAziz Adnan"
                />
                <AvatarFallback className="text-2xl font-bold">
                  AZ
                </AvatarFallback>
              </Avatar>
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  AbdulAziz Adnan
                </h1>
                <p className="text-lg text-muted-foreground font-medium mt-1">
                  Full Stack AI Engineer
                </p>
              </div>

              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                I design and build end-to-end AI systems — from real-time voice agents with speaker diarization and multilingual STT/TTS, to production SaaS platforms with scalable backend architectures. I ship production-grade conversational AI, evaluation pipelines, and intelligent dashboards that solve real business problems.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Bengaluru, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  <span>azizadnan370@gmail.com</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                <a href="https://github.com/userisaziz" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="gap-2">
                    <Code2 className="w-4 h-4" />
                    GitHub
                  </Button>
                </a>
                <a href="https://linkedin.com/in/userisaziz" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="gap-2">
                    <Link2 className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </a>
                <Button size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item}>
          <Separator className="my-8" />
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {[
            { label: "Years Experience", value: "4+" },
            { label: "AI Systems Shipped", value: "10+" },
            { label: "Full Stack Projects", value: "20+" },
            { label: "Technologies", value: "30+" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
