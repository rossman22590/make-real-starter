import { useBreakpoint } from '@tldraw/tldraw'

export function TldrawLogo() {
	const breakpoint = useBreakpoint()
	return (
<a
			className={`tldrawLogo ${breakpoint < 5 ? 'tldrawLogo__mobile' : ''}`}
			href="https://myapps.ai"
		>
						<img
				alt="tldraw logo"
				className="lockup"
				src="https://img.mytsi.org/i/zjbS568.png"
				style={{ padding: 8, height: 40 }}
			/>
		</a>
	)
}
