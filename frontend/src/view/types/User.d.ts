export type UserInfoType = {
	name: string;
	email: string;
	avatar?: string;
};

export interface Account {
	accountId: string;
	name: string;
	email: string;
	password: string;
	created_at: string;
	updated_at: string;
}

export interface UserInterface {
	account: Account;
	token: string;
}

export interface UserSignIn {
	email: string;
	password: string;
}

export interface UserSignUp {
	name: string;
	email: string;
	password: string;
}
