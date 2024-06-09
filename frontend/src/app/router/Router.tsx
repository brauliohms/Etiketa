import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "../../view/pages/signin/Signin";
import { Signup } from "../../view/pages/signup/Signup";

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
}
