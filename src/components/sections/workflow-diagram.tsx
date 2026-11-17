"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WorkflowStep {
  label: string;
  description: string;
  color: string;
}

interface WorkflowDiagramProps {
  title: string;
  steps: WorkflowStep[];
  /** `flow` draws a single arrow-connected row; `grid` wraps many steps into cards. */
  variant?: "flow" | "grid";
}

const colorClasses: Record<string, string> = {
  emerald: "border-emerald-400/40 bg-emerald-400/10 text-emerald-700 dark:text-emerald-400",
  blue: "border-blue-400/40 bg-blue-400/10 text-blue-700 dark:text-blue-400",
  amber: "border-amber-400/40 bg-amber-400/10 text-amber-700 dark:text-amber-400",
  purple: "border-purple-400/40 bg-purple-400/10 text-purple-700 dark:text-purple-400",
  indigo: "border-indigo-400/40 bg-indigo-400/10 text-indigo-700 dark:text-indigo-400",
  rose: "border-rose-400/40 bg-rose-400/10 text-rose-700 dark:text-rose-400",
  cyan: "border-cyan-400/40 bg-cyan-400/10 text-cyan-700 dark:text-cyan-400",
};

export function WorkflowDiagram({ title, steps, variant = "flow" }: WorkflowDiagramProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="my-12"
    >
      <h3 className="mb-6 text-lg font-semibold text-foreground">
        {title}
      </h3>
      {variant === "grid" ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card
              key={step.label}
              className={`border p-4 ${colorClasses[step.color] || colorClasses.blue}`}
            >
              <div className="text-xs font-medium uppercase tracking-wider opacity-60">
                Step {index + 1}
              </div>
              <div className="mt-1 font-semibold">{step.label}</div>
              <div className="mt-1 text-xs opacity-80">{step.description}</div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-3 md:flex-1">
              <Card
                className={`flex-1 border p-4 ${colorClasses[step.color] || colorClasses.blue}`}
              >
                <div className="text-xs font-medium uppercase tracking-wider opacity-60">
                  Step {index + 1}
                </div>
                <div className="mt-1 font-semibold">{step.label}</div>
                <div className="mt-1 text-xs opacity-80">{step.description}</div>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground md:block" />
              )}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
