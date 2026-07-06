import { cn } from "@/lib/utils";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";
import { DecorIcon } from "@/components/decor-icon";
import { QuoteIcon } from "lucide-react";

type Testimonial = {
	quote: string;
	name: string;
	role: string;
	company: string;
	image: string;
};

const testimonials: Testimonial[] = [
	{
		quote:
			"Aziz is one of the most driven engineers I've worked with. His ability to ship production-grade AI systems — from voice agents to evaluation pipelines — while maintaining clean architecture is rare. He was instrumental in building core platform features at AlmaBetter.",
		image: "https://github.com/alokemran.png",
		name: "Alok Alma",
		role: "Co-founder",
		company: "AlmaBetter",
	},
	{
		quote:
			"AbdulAziz was a key member of our voice agent team. His ability to handle complex real-time systems and deliver production-ready solutions under tight deadlines was impressive. A reliable full-stack engineer who gets things done.",
		image: "https://github.com/rohanthakur.png",
		name: "Rohan Thakur",
		role: "CTO",
		company: "GoYoyo.ai",
	},
	{
		quote:
			"Aziz consistently delivers beyond expectations. His work on our AI-powered platforms — combining real-time systems, multilingual STT, and scalable backend architecture — has been outstanding. He's our go-to engineer for complex AI integrations.",
		image: "https://api.dicebear.com/7.2/personas/svg?seed=Abdullah&backgroundColor=b6e3f4,c0aede,d1d4f9",
		name: "Abdullah",
		role: "CEO",
		company: "Hawksims",
	},
];

export function TestimonialsSection() {
	return (
		<div className="mx-auto -mt-10 grid w-full max-w-5xl gap-8 md:grid-cols-3 md:gap-6">
			{testimonials.map((testimonial, index) => (
				<TestimonialCard
					index={index}
					key={testimonial.name}
					testimonial={testimonial}
				/>
			))}
		</div>
	);
}

function TestimonialCard({
	testimonial,
	index,
	className,
	...props
}: React.ComponentProps<"figure"> & {
	testimonial: Testimonial;
	index: number;
}) {
	const { quote, name, role, company, image } = testimonial;

	return (
		<figure
			className={cn(
				"relative flex flex-col justify-between gap-6 px-8 pt-8 pb-6 shadow-xs md:translate-y-[calc(3rem*var(--t-card-index))]",
				"dark:bg-[radial-gradient(50%_80%_at_25%_0%,--theme(--color-foreground/.1),transparent)]",
				className
			)}
			style={
				{
					"--t-card-index": index,
				} as React.CSSProperties
			}
			{...props}
		>
			<div className="absolute -inset-y-4 -left-px w-px bg-border" />
			<div className="absolute -inset-y-4 -right-px w-px bg-border" />
			<div className="absolute -inset-x-4 -top-px h-px bg-border" />
			<div className="absolute -right-4 -bottom-px -left-4 h-px bg-border" />
			<DecorIcon className="size-3.5" position="top-left" />

			<blockquote className="flex gap-4">
				<QuoteIcon aria-hidden="true" className="size-6 shrink-0 stroke-1" />

				<p className="flex-1 font-normal text-base text-muted-foreground leading-relaxed">
					{quote}
				</p>
			</blockquote>

			<figcaption className="flex items-center gap-3">
				<Avatar className="size-10 rounded-full ring-2 ring-border ring-offset-2 ring-offset-background transition-shadow group-hover:ring-foreground/20">
					<AvatarImage alt={`${name}'s profile picture`} src={image} />
					<AvatarFallback>{name.charAt(0)}</AvatarFallback>
				</Avatar>
				<div className="flex flex-col">
					<cite className="font-medium text-foreground text-sm not-italic">
						{name}
					</cite>
					<p className="text-muted-foreground text-xs">
						{role}, <span className="text-foreground/80">{company}</span>
					</p>
				</div>
			</figcaption>
		</figure>
	);
}
