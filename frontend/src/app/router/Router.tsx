import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../../view/layouts/AuthLayout";
import { Dashboard } from "../../view/pages/home/Dashboard";
import { Signin } from "../../view/pages/signin/Signin";
import { Signup } from "../../view/pages/signup/Signup";
import { AuthGuard } from "./AuthGuard";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthGuard isProtected={false} />}>
					<Route element={<AuthLayout />}>
						<Route path="/signin" element={<Signin />} />
						<Route path="/signup" element={<Signup />} />
					</Route>
				</Route>

				<Route element={<AuthGuard isProtected />}>
					<Route path="/" element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
