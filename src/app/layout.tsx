import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://abdulazizadnan.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AbdulAziz Adnan - Full Stack Developer & AI Engineer",
    template: "%s | AbdulAziz Adnan",
  },
  description:
    "Portfolio of AbdulAziz Adnan, a full stack developer specializing in AI voice agents, real-time systems, and modern web applications.",
  keywords: [
    "AbdulAziz Adnan",
    "Full Stack Developer",
    "AI Engineer",
    "Voice Agent",
    "Next.js",
    "React",
    "TypeScript",
    "SaaS",
    "Portfolio",
  ],
  authors: [{ name: "AbdulAziz Adnan", url: SITE_URL }],
  creator: "AbdulAziz Adnan",
  publisher: "AbdulAziz Adnan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "AbdulAziz Adnan - Full Stack Developer & AI Engineer",
    description:
      "Portfolio showcasing AI voice agents, SaaS platforms, and modern web applications.",
    type: "website",
    siteName: "AbdulAziz Adnan",
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "AbdulAziz Adnan - Full Stack Developer & AI Engineer",
    description:
      "Portfolio showcasing AI voice agents, SaaS platforms, and modern web applications.",
    creator: "@userisaziz",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
