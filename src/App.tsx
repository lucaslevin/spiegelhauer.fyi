import { MeshGradient } from '@paper-design/shaders-react';
import { IconBrandGithub, IconCalendar, IconCpu, IconMapPin, IconMenu2, IconPalette, IconX } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';

function App() {
	const revealRefs = useRef<(HTMLElement | null)[]>([]);
	const meshRef = useRef<HTMLDivElement>(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 0);
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

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

	useEffect(() => {
		const mesh = meshRef.current;
		if (!mesh) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const onScroll = () => {
			mesh.style.transform = `translateY(${window.scrollY * 0.15}px)`;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
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
			<header
				className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-bg/60 backdrop-blur-md border-b border-border/40' : 'border-b border-transparent'}`}
			>
				<div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
					<button
						type="button"
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className="text-text-h font-semibold tracking-tight text-lg cursor-pointer bg-transparent border-none p-0"
					>
						Spiegelhauer
					</button>

					{/* Desktop nav */}
					<nav className={`hidden sm:flex gap-8 text-sm transition-colors duration-500 ${scrolled ? 'text-text' : 'text-text-h/70'}`}>
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
						className={`sm:hidden p-1.5 -mr-1.5 transition-colors duration-500 ${scrolled ? 'text-text' : 'text-text-h/70'} hover:text-text-h`}
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={menuOpen}
						aria-controls="mobile-menu"
					>
						{menuOpen ? <IconX size={22} stroke={1.5} /> : <IconMenu2 size={22} stroke={1.5} />}
					</button>
				</div>

				{/* Mobile dropdown */}
				<div
					id="mobile-menu"
					className={`sm:hidden overflow-hidden transition-all duration-250 ease-out bg-bg ${menuOpen ? 'max-h-64 opacity-100 border-t border-border' : 'max-h-0 opacity-0 border-transparent'}`}
				>
					<nav className="flex flex-col px-6 py-4 gap-1 text-sm">
						{navItems.map((item) => (
							<a key={item.href} href={item.href} onClick={closeMenu} className={`${item.className} py-2.5 text-left`}>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</header>

			{/* Hero */}
			<section className="relative min-h-[70svh] flex flex-col justify-center items-center text-center px-6 pt-14 overflow-hidden">
				{/* Mesh gradient background */}
				<div ref={meshRef} className="absolute inset-0 z-0">
					<MeshGradient colors={['#0f172a', '#1e293b', '#e2a03f', '#312e81']} distortion={0.5} swirl={0.4} speed={0.07} style={{ width: '100%', height: '100%' }} />
				</div>
				{/* Subtle dark overlay for text readability */}
				<div className="absolute inset-0 z-1 bg-bg/30" />
				{/* Content */}
				<div className="relative z-10">
					<p className="animate-fade-up inline-flex items-center gap-1.5 text-sm tracking-widest uppercase text-accent mb-6">
						<IconMapPin size={14} stroke={1.5} />
						Copenhagen, Denmark
					</p>
					<h1 className="animate-fade-up animate-fade-up-delay-1 font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-h leading-none mb-6">
						Spiegelhauer
					</h1>
					<p className="animate-fade-up animate-fade-up-delay-2 text-lg sm:text-xl text-text-h/80 max-w-lg leading-relaxed mb-10">
						Your product, built end to end. From first conversation to live deployment — frontend, backend, and everything between.
					</p>
					<a
						href="#contact"
						className="animate-fade-up animate-fade-up-delay-3 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-text-h text-bg font-medium text-sm tracking-wide accent-glow no-underline"
					>
						Get in touch
					</a>
				</div>
			</section>

			{/* Craft — Support section */}
			<section id="craft" className="py-24 sm:py-32 px-6">
				<div className="mx-auto max-w-3xl">
					<div ref={r(0)} className="reveal">
						<p className="text-sm tracking-widest uppercase text-accent mb-4">What I do</p>
						<h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-h mb-6">From idea to live product</h2>
						<p className="text-text leading-relaxed max-w-xl">
							Every project starts the same way: understanding the problem before reaching for a solution. From there it's design, build, launch — tightly connected, never thrown
							over a wall.
						</p>
					</div>

					<div ref={r(1)} className="reveal mt-16 sm:mt-20 grid sm:grid-cols-2 gap-10 sm:gap-16">
						<div>
							<IconPalette size={24} stroke={1.5} className="text-accent mb-3" />
							<h3 className="text-xl font-semibold text-text-h mb-2">What you see</h3>
							<p className="text-text leading-relaxed text-sm">
								Interfaces people enjoy using. Fast, accessible, polished — built so your product feels good in their hands. Every screen, every interaction, every device — I make
								sure it all holds together.
							</p>
						</div>
						<div>
							<IconCpu size={24} stroke={1.5} className="text-accent mb-3" />
							<h3 className="text-xl font-semibold text-text-h mb-2">Under the hood</h3>
							<p className="text-text leading-relaxed text-sm">
								Infrastructure you don't have to think about. Scalable APIs, solid databases — the engine runs so you can focus on everything else. Reliable, tested, and deployed
								on infrastructure that grows with your users.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Separator */}
			<div className="mx-auto max-w-6xl px-6">
				<div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
			</div>

			{/* Story — Detail section */}
			<section id="story" className="py-24 sm:py-32 px-6">
				<div className="mx-auto max-w-3xl">
					<div ref={r(2)} className="reveal">
						<p className="text-sm tracking-widest uppercase text-accent mb-4">About</p>
						<h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-h mb-8">A decade of building for the web</h2>
						<div className="space-y-5 text-text leading-relaxed">
							<p>
								Based in Copenhagen, I've spent over a decade shipping software — from early-stage startups to established platforms. I'm drawn to the full picture: how data flows,
								how interfaces feel, and how teams build together.
							</p>
							<p>
								Every project starts with the same question: what problem are we solving? From there it's clear communication, regular updates, and shipping working software — not
								chasing perfection.
							</p>
							<p>I care about the details. Good typography, solid architecture, software that feels considered rather than cobbled together.</p>
							<p>
								I'm most excited by projects that solve real problems for real people — whether that's a customer-facing app, an internal tool, or an API powering a new service.
								That's the work I want to do.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Separator */}
			<div className="mx-auto max-w-6xl px-6">
				<div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
			</div>

			{/* Contact — Final CTA */}
			<section id="contact" className="py-24 sm:py-32 px-6">
				<div className="mx-auto max-w-xl text-center">
					<div ref={r(3)} className="reveal">
						<h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text-h mb-4">Let's work together</h2>
						<p className="text-text leading-relaxed mb-10">
							Have a project in mind? Let's talk it through. No obligation, just a conversation about what you need. Full builds, additions to existing products, or technical
							consulting — all welcome.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="https://cal.com/spiegelhauer"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-accent text-bg font-medium text-sm tracking-wide accent-glow no-underline"
							>
								<IconCalendar size={16} stroke={2} />
								Book a meeting
							</a>
							<a
								href="https://github.com/lucaslevin"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full border border-border text-text-h font-medium text-sm tracking-wide hover:border-accent transition-colors no-underline"
							>
								<IconBrandGithub size={16} stroke={2} />
								GitHub
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-border py-8 px-6">
				<div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text">
					<span>© {new Date().getFullYear()} Lucas Spiegelhauer Levin</span>
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
