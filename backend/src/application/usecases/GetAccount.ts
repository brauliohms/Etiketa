import Account from '../../domain/Account';
import AccountsRepository from '../repositories/AccountRepository';

export default class GetAccountUseCase {
  constructor(private readonly accountRepository: AccountsRepository) {}

  async execute(email: string): Promise<Account | undefined> {
    return await this.accountRepository.findByEmail(email);
  }
}
