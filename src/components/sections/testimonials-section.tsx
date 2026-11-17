"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full scroll-mt-20 py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Client Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
            Trusted by businesses and startups to deliver exceptional results
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group relative h-full overflow-hidden border-border bg-card p-6 transition-all duration-300 hover:border-primary/50">
                <Quote className="absolute top-4 right-4 h-10 w-10 text-muted/10 transition-colors group-hover:text-primary/10" />
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="truncate text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="truncate text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    &quot;{testimonial.content}&quot;
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
