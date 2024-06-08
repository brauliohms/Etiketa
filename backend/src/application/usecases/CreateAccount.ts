import Account from '../../domain/Account';
import AccountsRepository from '../repositories/AccountRepository';
import Password from '../../domain/Password';

export default class CreateAccountUseCase {
  constructor(private readonly accountRepository: AccountsRepository) {}

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
