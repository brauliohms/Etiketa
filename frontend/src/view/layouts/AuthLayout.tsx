import { Outlet } from "react-router-dom";

function AuthLayout() {
	return (
		<div className="flex min-h-screen w-full items-center justify-center bg-hero bg-cover bg-no-repeat">
			<Outlet />
		</div>
	);
}

export default AuthLayout;
