export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Al-Rashid",
    role: "CTO at Marsa Tijarah",
    content:
      "Aziz delivered our bilingual voice agent with exceptional quality. His understanding of both the technical architecture and the Arabic language nuances made all the difference.",
    rating: 5,
    avatar: "AR",
  },
  {
    name: "Sarah Mitchell",
    role: "Product Lead at TechFlow",
    content:
      "Working with Aziz on our evaluation pipeline was a game-changer. He architected a system that cut our QA time by 80% and gave us confidence in our voice AI quality.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Omar Hassan",
    role: "Founder at DataBridge",
    content:
      "Exceptional full-stack skills and great communication throughout the project. Aziz turned our complex requirements into a clean, maintainable platform.",
    rating: 5,
    avatar: "OH",
  },
  {
    name: "Lisa Chen",
    role: "Engineering Manager at ScaleUp",
    content:
      "Aziz's attention to performance and detail is remarkable. He optimized our dashboard from sluggish to sub-second response times while keeping the codebase clean.",
    rating: 5,
    avatar: "LC",
  },
];
