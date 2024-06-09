import { ComponentProps } from "react";

interface InputLabel extends ComponentProps<"input"> {
	label: string;
	id: string;
	control?: object;
}

export function InputLabel({ label, id, control, ...rest }: InputLabel) {
	return (
		<div className="flex flex-col gap-2">
			<label className="block" htmlFor={id}>
				{label}
			</label>
			<input
				id={id}
				className="h-10 w-full rounded-md bg-black px-2 outline-none"
				{...rest}
				{...control}
			/>
		</div>
	);
}
