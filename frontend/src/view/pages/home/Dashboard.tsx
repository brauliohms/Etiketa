import { Main } from "../../components/Main";
import { Menu } from "../../components/Menu/Menu";
import { TopBar } from "../../components/TopBar";

export function Dashboard() {
	//seu componente home ;)
	return (
		<div className="flex min-h-screen w-full flex-col bg-black">
			<TopBar />
			<div className="flex w-full">
				<Menu />
				<Main />
			</div>
		</div>
	);
}
