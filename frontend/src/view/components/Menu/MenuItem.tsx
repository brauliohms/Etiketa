import { UserIcon } from "../Icons";

export function MenuItem() {
	return (
		<div className="flex items-center text-white">
			<UserIcon className="mr-4 w-6" />
			<span className="">Meu Perfil</span>
		</div>
	);
}
