import { MenuItem } from "./MenuItem";

export function Menu() {
	return (
		<aside className="flex min-h-dvh w-80 flex-col gap-y-8 border-r-2 border-zinc-800 py-6 pl-8">
			<MenuItem />
			<MenuItem />
		</aside>
	);
}
