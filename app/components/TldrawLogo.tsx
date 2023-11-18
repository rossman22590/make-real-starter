import { useBreakpoint } from '@tldraw/tldraw'

export function TldrawLogo() {
	const breakpoint = useBreakpoint()
	return (
		<a
			className={`lockup__link ${breakpoint < 5 ? 'lockup__link__mobile' : ''}`}
			href="https://myapps.ai"
		>
			<img
				alt="tldraw logo"
				className="lockup"
				src="https://img.mytsi.org/i/YJET169.png"
				style={{ padding: 8, height: 40 }}
			/>
		</a>
	)
}
