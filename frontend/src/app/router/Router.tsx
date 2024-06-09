import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../../view/layouts/AuthLayout";
import { Signin } from "../../view/pages/signin/Signin";
import { Signup } from "../../view/pages/signup/Signup";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AuthLayout />}>
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
