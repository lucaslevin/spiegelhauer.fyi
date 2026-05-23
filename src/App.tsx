import { MeshGradient } from '@paper-design/shaders-react';
import { IconArrowRight, IconBrandGithub, IconCode, IconMail, IconMapPin, IconMenu2, IconServer, IconX } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';

function App() {
	const revealRefs = useRef<(HTMLElement | null)[]>([]);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{ threshold: 0.15 },
		);

		const refs = revealRefs.current.filter(Boolean) as HTMLElement[];
		for (const el of refs) observer.observe(el);
		return () => {
			for (const el of refs) observer.unobserve(el);
		};
	}, []);

	const r = (i: number) => (el: HTMLElement | null) => {
		revealRefs.current[i] = el;
	};

	const navItems = [
		{ href: '#craft', label: 'Work', className: 'hover:text-text-h transition-colors' },
		{ href: '#story', label: 'About', className: 'hover:text-text-h transition-colors' },
		{ href: '#contact', label: 'Contact', className: 'text-accent hover:opacity-80 transition-opacity font-medium' },
	] as const;

	const closeMenu = () => setMenuOpen(false);

	return (
		<>
			{/* Sticky header */}
			<header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
				<div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
					<button
						type="button"
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className="text-text-h font-semibold tracking-tight text-lg cursor-pointer bg-transparent border-none p-0"
					>
						Spiegelhauer
					</button>

					{/* Desktop nav */}
					<nav className="hidden sm:flex gap-8 text-sm text-text">
						{navItems.map((item) => (
							<a key={item.href} href={item.href} className={item.className}>
								{item.label}
							</a>
						))}
					</nav>

					{/* Mobile hamburger */}
					<button
						type="button"
						onClick={() => setMenuOpen(!menuOpen)}
						className="sm:hidden p-1.5 -mr-1.5 text-text hover:text-text-h transition-colors"
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					>
						{menuOpen ? <IconX size={22} stroke={1.5} /> : <IconMenu2 size={22} stroke={1.5} />}
					</button>
				</div>

				{/* Mobile dropdown */}
				<div className={`sm:hidden overflow-hidden transition-all duration-250 ease-out ${menuOpen ? 'max-h-64 opacity-100 border-t border-border' : 'max-h-0 opacity-0'}`}>
					<nav className="flex flex-col px-6 py-4 gap-3 text-sm">
						{navItems.map((item) => (
							<a key={item.href} href={item.href} onClick={closeMenu} className={`${item.className} py-1 text-left`}>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</header>

			{/* Hero */}
			<section className="relative min-h-[70svh] flex flex-col justify-center items-center text-center px-6 pt-14 overflow-hidden">
				{/* Mesh gradient background */}
				<div className="absolute inset-0 z-0">
					<MeshGradient colors={['#0f172a', '#1e293b', '#e2a03f', '#312e81']} distortion={0.5} swirl={0.4} speed={0.07} style={{ width: '100%', height: '100%' }} />
				</div>
				{/* Subtle dark overlay for text readability */}
				<div className="absolute inset-0 z-1 bg-bg/30" />
				{/* Content */}
				<div className="relative z-10">
					<p className="animate-fade-up inline-flex items-center gap-1.5 text-sm tracking-widest uppercase text-[var(--color-accent)] mb-6">
						<IconMapPin size={14} stroke={1.5} />
						Copenhagen, Denmark
					</p>
					<h1 className="animate-fade-up animate-fade-up-delay-1 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-text-h)] leading-none mb-6">
						Spiegelhauer
					</h1>
					<p className="animate-fade-up animate-fade-up-delay-2 text-lg sm:text-xl text-[var(--color-text)] max-w-lg leading-relaxed mb-10">
						Fullstack engineer with 10+ years building robust Node.js backends and polished React frontends.
					</p>
					<a
						href="#contact"
						className="animate-fade-up animate-fade-up-delay-3 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-text-h)] text-[var(--color-bg)] font-medium text-sm tracking-wide accent-glow no-underline"
					>
						Get in touch
						<IconArrowRight size={16} stroke={2} />
					</a>
				</div>
			</section>

			{/* Craft — Support section */}
			<section id="craft" className="py-24 sm:py-32 px-6">
				<div className="mx-auto max-w-3xl">
					<div ref={r(0)} className="reveal">
						<p className="text-sm tracking-widest uppercase text-[var(--color-accent)] mb-4">What I do</p>
						<h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-h)] mb-6">Fullstack craftsmanship</h2>
						<p className="text-[var(--color-text)] leading-relaxed max-w-xl">
							I build from database to deployment. TypeScript across the stack, React on the front, Node.js on the back — with a deep understanding of how they connect.
						</p>
					</div>

					<div ref={r(1)} className="reveal mt-20 grid sm:grid-cols-2 gap-16">
						<div>
							<IconCode size={24} stroke={1.5} className="text-[var(--color-accent)] mb-3" />
							<h3 className="text-xl font-semibold text-[var(--color-text-h)] mb-2">Frontend</h3>
							<p className="text-[var(--color-text)] leading-relaxed text-sm">
								React, Next.js, TypeScript. Design systems, accessibility, and performance. I care about the pixel on screen as much as the code behind it.
							</p>
						</div>
						<div>
							<IconServer size={24} stroke={1.5} className="text-[var(--color-accent)] mb-3" />
							<h3 className="text-xl font-semibold text-[var(--color-text-h)] mb-2">Backend</h3>
							<p className="text-[var(--color-text)] leading-relaxed text-sm">
								Node.js, APIs, databases. Event-driven architectures, message queues, and the patterns that keep systems reliable at scale.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Stack */}
			<section className="py-24 sm:py-32 px-6">
				<div className="mx-auto max-w-3xl">
					<div ref={r(2)} className="reveal">
						<p className="text-sm tracking-widest uppercase text-[var(--color-accent)] mb-4">Stack</p>
						<h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-h)] mb-10">Tools I reach for</h2>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
							{[
								{ label: 'TypeScript', category: 'Language' },
								{ label: 'React', category: 'Frontend' },
								{ label: 'Next.js', category: 'Frontend' },
								{ label: 'Tailwind CSS', category: 'Frontend' },
								{ label: 'Node.js', category: 'Backend' },
								{ label: 'PostgreSQL', category: 'Database' },
								{ label: 'Redis', category: 'Database' },
								{ label: 'Docker', category: 'Infra' },
								{ label: 'AWS', category: 'Cloud' },
							].map((tech) => (
								<div key={tech.label} className="border border-border rounded-xl px-4 py-3 text-center">
									<div className="text-sm font-medium text-text-h">{tech.label}</div>
									<div className="text-xs text-text mt-0.5">{tech.category}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Separator */}
			<div className="mx-auto max-w-6xl px-6">
				<div className="border-t border-[var(--color-border)]" />
			</div>

			{/* Story — Detail section */}
			<section id="story" className="py-24 sm:py-32 px-6">
				<div className="mx-auto max-w-3xl">
					<div ref={r(3)} className="reveal">
						<p className="text-sm tracking-widest uppercase text-[var(--color-accent)] mb-4">About</p>
						<h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-h)] mb-8">A decade of building for the web</h2>
						<div className="space-y-5 text-[var(--color-text)] leading-relaxed">
							<p>
								Based in Copenhagen, I've spent over ten years shipping software — from early-stage startups to established platforms. I'm drawn to the full picture: how data
								flows, how interfaces feel, and how teams build together.
							</p>
							<p>
								The stack I reach for is Node.js and React — not because they're popular, but because they're productive. TypeScript across the board. Postgres when it fits, Redis
								when it needs to be fast.
							</p>
							<p>Outside of code, I'm interested in design, developer tooling, and the small details that make software feel right.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Separator */}
			<div className="mx-auto max-w-6xl px-6">
				<div className="border-t border-[var(--color-border)]" />
			</div>

			{/* Contact — Final CTA */}
			<section id="contact" className="py-24 sm:py-32 px-6">
				<div className="mx-auto max-w-xl text-center">
					<div ref={r(4)} className="reveal">
						<h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-h)] mb-4">Let's work together</h2>
						<p className="text-[var(--color-text)] leading-relaxed mb-10">
							Open to freelance projects, consulting, and interesting collaborations. Based in Copenhagen but comfortable working remotely.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="mailto:lucas@spiegelhauer.fyi"
								className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] font-medium text-sm tracking-wide accent-glow no-underline"
							>
								<IconMail size={16} stroke={2} />
								lucas@spiegelhauer.fyi
							</a>
							<a
								href="https://github.com/lucaslevin"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-text-h)] font-medium text-sm tracking-wide hover:border-[var(--color-accent)] transition-colors no-underline"
							>
								<IconBrandGithub size={16} stroke={2} />
								GitHub
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-[var(--color-border)] py-8 px-6">
				<div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--color-text)]">
					<span>© {new Date().getFullYear()} Lucas Levin</span>
					<span className="inline-flex items-center gap-1">
						<IconMapPin size={12} stroke={1.5} />
						Copenhagen, Denmark
					</span>
				</div>
			</footer>
		</>
	);
}

export default App;
