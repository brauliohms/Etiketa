import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
	isProtected: boolean;
}

export function AuthGuard({ isProtected }: AuthGuardProps) {
	const user = true; //será alterado

	if (!user && isProtected) {
		return <Navigate to="/signin" replace />;
	}

	if (user && !isProtected) {
		return <Navigate to="/" />;
	}

	return <Outlet />;
}
