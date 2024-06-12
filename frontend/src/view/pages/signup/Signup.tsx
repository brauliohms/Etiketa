import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { userService } from "../../../app/services/users";
import { Button } from "../../components/Button";
import { ErrorStringFeedback } from "../../components/ErrorStringFeedback";
import { InputLabel } from "../../components/InputLabel";
import { Spinner } from "../../components/Spinner";
import { UserSignUp } from "../../types";

const schema = z.object({
	name: z.string().min(1, "Seu nome não pode ser vazio."),
	email: z.string().email("Preencha um email valído"),
	password: z.string().min(4, "Sua senha deve conter ao menos 4 caracteres"),
});

type DataForm = z.infer<typeof schema>;

export function Signup() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DataForm>({
		resolver: zodResolver(schema),
	});

	const { mutateAsync, isPending } = useMutation({
		mutationFn: async (data: UserSignUp) => userService.signup(data),
	});

	const onSubmitting = async (data: DataForm) => {
		console.log(data);
		try {
			await mutateAsync(data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-4 p-5 text-white">
			<h1 className="max-w-[383px] text-center text-[32px] font-bold">
				Cadastre-se na plataforma
			</h1>

			<form
				onSubmit={handleSubmit(onSubmitting)}
				className="flex w-full max-w-md flex-col gap-4 rounded-md border border-zinc-700 bg-zinc-900 p-8 shadow-md"
			>
				<InputLabel id="name" label="Nome" control={{ ...register("name") }} />
				{errors.name && <ErrorStringFeedback message={errors?.name.message} />}
				<InputLabel
					id="email"
					label="Email"
					type="email"
					control={{ ...register("email") }}
				/>
				{errors.email && (
					<ErrorStringFeedback message={errors?.email.message} />
				)}
				<InputLabel
					id="password"
					label="Senha"
					type="password"
					control={{ ...register("password") }}
				/>
				{errors.password && (
					<ErrorStringFeedback message={errors?.password.message} />
				)}

				<Button type="submit" className="mt-10">
					{isPending ? <Spinner variant="md" /> : "Registrar"}
				</Button>
				<Link
					className="flex h-10 items-center justify-center rounded-md border border-zinc-700 bg-transparent transition-opacity hover:opacity-80"
					to="/signin"
				>
					Já possui conta?
				</Link>
			</form>
		</div>
	);
}
