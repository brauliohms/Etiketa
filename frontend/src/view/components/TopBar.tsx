import { UserInfoType } from "../types";
import { Bars3Icon } from "./Icons/Bars3Icon";
import { UserInfo } from "./UserInfo";

export function TopBar() {
	const user: UserInfoType = {
		name: "Fulano Dital",
		email: "fulanodital@email.com",
	};

	return (
		<nav className="flex h-[88px] w-full items-center justify-between border-b-2 border-zinc-800 bg-zinc-900 px-8">
			<Bars3Icon className="h-6 text-white" />
			<UserInfo user={user} />
		</nav>
	);
}
