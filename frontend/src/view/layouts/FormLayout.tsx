import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/Button";
import { InputLabel } from "../components/InputLabel";

interface FormProps {
	title: string;
	btnText: string;
	linkText: string;
	onSubmit: any; //por enquanto
}

export function FormLayout({ title, btnText, linkText }: FormProps) {
	const { pathname } = useLocation();
	const isSignIn = pathname === "/signin";
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-4 p-5 text-white">
			<h1 className="max-w-[383px] text-center text-[32px] font-bold">
				{title}
			</h1>
			<form className="flex w-full max-w-md flex-col gap-4 rounded-md border border-zinc-700 bg-zinc-900 p-8 shadow-md">
				{!isSignIn && <InputLabel id="name" label="Nome" />}
				<InputLabel id="email" label="Email" type="email" />
				<InputLabel id="password" label="Senha" type="password" />

				<Button className="mt-10">{btnText}</Button>
				<Link
					className="flex h-10 items-center justify-center rounded-md border border-zinc-700 bg-transparent transition-opacity hover:opacity-80"
					to={isSignIn ? "/signup" : "/signin"}
				>
					{linkText}
				</Link>
			</form>
		</div>
	);
}
