import { Toaster } from "react-hot-toast";
import { Router } from "./app/router/Router";

function App() {
	return (
		<>
			<Router />
			<Toaster />
		</>
	);
}

export default App;
