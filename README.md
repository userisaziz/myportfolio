# Abdul Aziz — Portfolio

Full Stack AI Engineer portfolio showcasing production-grade applications, AI systems, and web platforms.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **UI**: [shadcn/ui](https://ui.shadcn.com) + [Tailwind CSS](https://tailwindcss.com)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Maps**: [Leaflet](https://leafletjs.com) + react-leaflet
- **Email**: [Resend](https://resend.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Font**: Geist (via `next/font`)
- **Theme**: Dark/Light mode with `next-themes`

## Projects Featured

| Project | Description | Live |
|---------|-------------|------|
| **CXSAMAA** | AI-powered dashboard with real-time analytics | [dashboard.cxsamaa.store](https://dashboard.cxsamaa.store) |
| **TurfBuddy** | Sports turf booking & management platform | [GitHub](https://github.com/userisaziz/turf_buddy) |
| **Voice Agent SaaS** | Multi-tenant voice AI platform with eval pipeline | — |
| **LAW COMPANION** | Legal case management with eCourts integration | [law-companion.vercel.app](https://law-companion.vercel.app) |
| **Rover Dashboard** | Analytics dashboard UI | [rover-dashboard-ui.vercel.app](https://rover-dashboard-ui.vercel.app) |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── projects/[slug]/   # Case study pages
│   └── api/contact/       # Contact form API
├── components/
│   ├── sections/          # Portfolio sections
│   ├── ui/                # shadcn/ui components
│   └── uitripled/         # Custom UI blocks
├── data/
│   └── projects.ts        # Project data
└── lib/                   # Utilities
public/
└── project/               # Project screenshots
```

## Contact

- **Email**: azizadnan370@gmail.com
- **GitHub**: [@userisaziz](https://github.com/userisaziz)
- **LinkedIn**: [linkedin.com/in/userisaziz](https://linkedin.com/in/userisaziz)

## License

© 2026 Abdul Aziz. All rights reserved.
