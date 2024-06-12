import { Button } from "../../../../components/Button";
import { ConfIcon, PlusIcon, UserIcon } from "../../../../components/Icons";
import { MenuItem } from "./MenuItem";

export function Menu() {
	return (
		<aside className="flex w-14 flex-col gap-y-8 border-r-2 border-zinc-800 py-6 pl-4 lg:w-96 lg:pl-8">
			<MenuItem title="Meu Perfil" icon={UserIcon} url="#" />
			<MenuItem title="Configurações" icon={ConfIcon} url="#" />
			<h3 className="invisible text-white lg:visible">SUPERTAGS</h3>
			<div>
				<Button
					type="button"
					className="flex items-center justify-center gap-x-4 border bg-transparent px-0.5 text-white lg:w-64"
				>
					<PlusIcon className="w-6" />
					<span className="hidden lg:inline">Nova SuperTag</span>
				</Button>
			</div>
		</aside>
	);
}
