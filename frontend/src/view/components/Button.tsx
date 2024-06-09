import { ComponentProps, ReactNode } from "react";
import { cn } from "../../app/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
	children: ReactNode;
	className?: string;
}

export function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<button
			className={cn(
				"h-10 rounded-md bg-violet-700 text-center transition-opacity hover:opacity-80",
				className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
