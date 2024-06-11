import { SVGAttributes } from "react";

export function PlusIcon(props: SVGAttributes<SVGElement>) {
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
				d="M12 4.5v15m7.5-7.5h-15"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
