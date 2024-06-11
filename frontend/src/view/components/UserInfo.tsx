import { UserInfoType } from "../types";

interface UserInfoProps {
	user: UserInfoType;
}

export function UserInfo({ user }: UserInfoProps) {
	return (
		<section className="flex items-center gap-4">
			<div className="flex flex-col text-right">
				<span className="text-base font-bold text-white sm:text-lg">
					{user.name}
				</span>
				<span className="text-sm font-light text-zinc-500 sm:text-base">
					{user.email}
				</span>
			</div>
			<div className="bg-red h-10 w-10 rounded-full bg-white">
				{/* TODO: verificar sobre a imagem avatar e remover bg-white */}
				{user.avatar}
			</div>
		</section>
	);
}
