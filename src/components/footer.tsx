import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/icons/github-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { XIcon } from "@/components/icons/x-icon";
import { FullWidthDivider } from "@/components/full-width-divider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
	return (
		<footer
			className={cn(
				"relative mx-auto max-w-5xl lg:border-x",
				"dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]"
			)}
		>
			<FullWidthDivider position="top" />
			<div className="grid max-w-5xl grid-cols-6 gap-6 p-4">
				<div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
					<Link href="/" className="w-max text-xl font-bold tracking-tight text-foreground">
						Aziz
					</Link>
					<p className="max-w-sm text-balance text-muted-foreground text-sm">
						Full Stack Developer & AI Engineer building production-grade voice agents and modern web applications.
					</p>
					<div className="flex gap-2">
						{socialLinks.map((item, index) => (
							<Button key={`social-${item.link}-${index}`} size="icon" variant="outline" render={<a href={item.link} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>{item.icon}</Button>
						))}
					</div>
				</div>
				<div className="col-span-3 w-full md:col-span-1">
					<span className="text-muted-foreground text-xs">Resources</span>
					<div className="mt-2 flex flex-col gap-2">
						{resources.map(({ href, title }) => (
							<a
								className="w-max text-sm hover:underline"
								href={href}
								key={title}
							>
								{title}
							</a>
						))}
					</div>
				</div>
				<div className="col-span-3 w-full md:col-span-1">
					<span className="text-muted-foreground text-xs">Company</span>
					<div className="mt-2 flex flex-col gap-2">
						{company.map(({ href, title }) => (
							<a
								className="w-max text-sm hover:underline"
								href={href}
								key={title}
							>
								{title}
							</a>
						))}
					</div>
				</div>
			</div>
			<FullWidthDivider />
			<div className="flex items-center justify-center gap-2 py-4">
				<p className="text-center font-light text-muted-foreground text-sm">
					&copy; {new Date().getFullYear()} AbdulAziz Adnan. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

const company = [
	{
		title: "About",
		href: "/#about",
	},
	{
		title: "Projects",
		href: "/#projects",
	},
	{
		title: "Testimonials",
		href: "/#testimonials",
	},
	{
		title: "Contact",
		href: "/#contact",
	},
];

const resources = [
	{
		title: "Case Studies",
		href: "/#projects",
	},
	{
		title: "Skills",
		href: "/#skills",
	},
	{
		title: "Location",
		href: "/#location",
	},
	{
		title: "Resume",
		href: "#",
	},
	{
		title: "Email",
		href: "mailto:azizadnan370@gmail.com",
	},
];

const socialLinks = [
	{
		icon: <GithubIcon />,
		link: "https://github.com/userisaziz",
	},
	{
		icon: <InstagramIcon />,
		link: "#",
	},
	{
		icon: <XIcon />,
		link: "#",
	},
];
