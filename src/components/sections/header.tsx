"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#location", label: "Location" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isHome = pathname === "/";

  return (
    <header style={{ viewTransitionName: "persistent-header" }} className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/80 via-background/50 to-transparent backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground group"
        >
          <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-secondary/50 font-bold text-sm text-foreground transition-colors group-hover:border-foreground/30 group-hover:bg-secondary">
            A
          </span>
          <span className="font-semibold tracking-tight text-lg hidden sm:inline">
            Aziz
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          {!isHome && (
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
          )}
          <a
            href="/resume_ai_fullstack.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="size-8"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="size-8"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {!isHome && (
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            )}
            <a
              href="/resume_ai_fullstack.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              onClick={() => setMobileOpen(false)}
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
