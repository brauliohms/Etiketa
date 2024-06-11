import { Outlet } from "react-router-dom";
import { TopBar } from "../components/TopBar";

export function DashboardLayout() {
	return (
		<div className="flex min-h-screen w-full flex-col bg-black">
			<TopBar />
			<div className="flex w-full flex-1">
				<Outlet />
			</div>
		</div>
	);
}
