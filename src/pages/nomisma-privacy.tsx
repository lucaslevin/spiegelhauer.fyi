import { IconArrowLeft } from '@tabler/icons-react';
import { Link } from 'wouter';
import Footer from '../components/footer.tsx';

const LAST_UPDATED = '1 October 2026';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<section>
			<h2 className="font-display text-xl font-semibold tracking-tight text-text-h mt-10 mb-3">{title}</h2>
			<div className="space-y-3 text-text leading-relaxed">{children}</div>
		</section>
	);
}

function NomismaPrivacy() {
	return (
		<>
			<header className="fixed top-0 inset-x-0 z-50 bg-bg/60 backdrop-blur-md border-b border-border/40">
				<div className="mx-auto max-w-3xl px-6 h-14 flex items-center justify-between">
					<Link href="/" className="inline-flex items-center gap-2 text-sm text-text hover:text-text-h transition-colors no-underline">
						<IconArrowLeft size={16} stroke={1.5} />
						Back
					</Link>
					<span className="font-display text-text-h font-semibold tracking-tight">Nomisma</span>
				</div>
			</header>

			<main className="mx-auto max-w-3xl px-6 pt-28 pb-24">
				<p className="text-sm tracking-widest uppercase text-accent mb-3">Nomisma</p>
				<h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-h leading-none mb-3">Privacy Policy</h1>
				<p className="text-sm text-text opacity-70 mb-10">Nomisma: Currency Converter · Last updated {LAST_UPDATED}</p>

				<p className="text-lg text-text-h/90 leading-relaxed">
					<strong className="text-text-h font-semibold">Nomisma: Currency Converter</strong> does not collect, store, or transmit any personal data.
				</p>

				<Section title="What Nomisma does with your data">
					<ul className="list-disc pl-5 space-y-2">
						<li>
							<strong className="text-text-h">Page content is processed locally.</strong> Nomisma scans the text of pages you visit to find prices, and does this entirely inside
							your browser. The content of the pages you visit is never sent anywhere.
						</li>
						<li>
							<strong className="text-text-h">No accounts, no analytics, no tracking.</strong> There is no sign-in, no usage analytics, no advertising, and no tracking of any kind.
						</li>
						<li>
							<strong className="text-text-h">No personal data is collected.</strong> Nomisma does not read or store your browsing history, form input, credentials, or any other
							personal information.
						</li>
					</ul>
				</Section>

				<Section title="Network requests">
					<p>Nomisma makes exactly one kind of network request: a daily fetch of exchange rates.</p>
					<ul className="list-disc pl-5 space-y-2">
						<li>
							Endpoint: <code className="font-mono text-sm bg-surface border border-border rounded px-1.5 py-0.5 text-text-h">https://latest.currency-api.pages.dev</code> (with a{' '}
							<code className="font-mono text-sm bg-surface border border-border rounded px-1.5 py-0.5 text-text-h">https://cdn.jsdelivr.net</code> mirror as fallback).
						</li>
						<li>
							What is sent: the currency code you selected (for example{' '}
							<code className="font-mono text-sm bg-surface border border-border rounded px-1.5 py-0.5 text-text-h">USD</code>
							). Nothing about you or the pages you visit is included.
						</li>
						<li>The response (a table of exchange rates) is cached locally on your device and reused for the rest of the day.</li>
					</ul>
				</Section>

				<Section title="Data stored on your device">
					<p>
						Your settings (target currency, display mode, abbreviation, and any sites you disabled) are stored using the browser's built-in storage so Nomisma can remember your
						preferences. You can clear them at any time by removing the extension.
					</p>
				</Section>

				<Section title="Permissions">
					<ul className="list-disc pl-5 space-y-2">
						<li>
							<strong className="text-text-h">Storage</strong> is used only to save your settings.
						</li>
						<li>
							<strong className="text-text-h">Access to all sites</strong> is required because Nomisma works on any website, converting prices wherever they appear. The page
							content is only read and annotated locally; it is never uploaded.
						</li>
					</ul>
				</Section>

				<Section title="Contact">
					<p>
						Questions or concerns:{' '}
						<a href="https://spiegelhauer.fyi/" className="text-accent hover:underline">
							spiegelhauer.fyi
						</a>
					</p>
				</Section>
			</main>

			<Footer />
		</>
	);
}

export default NomismaPrivacy;
