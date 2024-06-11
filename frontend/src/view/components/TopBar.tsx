import { UserInfoType } from "../types";
import { Bars3Icon } from "./Icons/Bars3Icon";
import { UserInfo } from "./UserInfo";

export function TopBar() {
	// TODO: trocar o objeto criado pelo usuario autenticado Zustand
	const user: UserInfoType = {
		name: "Fulano Dital",
		email: "fulanodital@email.com",
	};

	return (
		<nav className="flex h-[88px] w-full items-center justify-between border-b-2 border-zinc-800 bg-zinc-900 px-4 lg:px-8">
			<button type="button">
				<Bars3Icon className="h-6 text-white" />
			</button>
			<UserInfo user={user} />
		</nav>
	);
}
