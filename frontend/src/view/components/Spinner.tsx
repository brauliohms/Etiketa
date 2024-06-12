import { cn } from "../../app/utils/cn";

interface SpinnerProps {
	variant: "xl" | "lg" | "md";
}

export function Spinner({ variant }: SpinnerProps) {
	return (
		<div
			className={cn(
				"mx-auto animate-spin rounded-full border-r border-t border-gray-400",
				variant === "xl" ? "size-10" : variant === "lg" ? "size-8" : "size-6",
			)}
		/>
	);
}
