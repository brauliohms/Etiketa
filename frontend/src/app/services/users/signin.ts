import { UserSignIn } from "../../../view/types";
import { api } from "../api";

export async function signin(user: UserSignIn) {
	console.log(user);
	const { data, headers } = await api.post(`/signin`, user);
	console.log(data, headers);
	return data;
}
