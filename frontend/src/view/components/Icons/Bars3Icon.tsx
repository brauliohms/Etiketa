import { SVGAttributes } from "react";

export function Bars3Icon(props: SVGAttributes<SVGElement>) {
	return (
		<svg
			// dataSlot="icon"
			aria-hidden="true"
			fill="none"
			strokeWidth={1.5}
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
