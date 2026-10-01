import { IconMapPin } from '@tabler/icons-react';

function Footer() {
	return (
		<footer className="border-t border-border py-8 px-6">
			<div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text">
				<span>© {new Date().getFullYear()} Lucas Spiegelhauer Levin</span>
				<span className="inline-flex items-center gap-1">
					<IconMapPin size={12} stroke={1.5} />
					Copenhagen, Denmark
				</span>
			</div>
		</footer>
	);
}

export default Footer;
