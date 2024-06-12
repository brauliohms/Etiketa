import Account from '../../domain/Account';
import AccountsRepository from '../repositories/AccountRepository';
import Password from '../../domain/Password';
// import PasswordHasher from '../utils/Hasher';

export default class CreateAccountUseCase {
  constructor(
    private readonly accountRepository: AccountsRepository // private readonly hashPassword: PasswordHasher
  ) {}

  async execute(input: Input): Promise<void> {
    const account = Account.create(input.name, input.email, input.password);
    const hashedPassword = await account.password.hash();
    account.password = new Password(hashedPassword, true);
    return this.accountRepository.create(account);
  }
}

type Input = {
  name: string;
  email: string;
  password: string;
};
