import AccountsRepository from '../../../application/repositories/AccountRepository';
import Account from '../../../domain/Account';

export default class AccountRepositoryInMemory implements AccountsRepository {
  private accounts: any[] = [];

  async create(account: Account): Promise<void> {
    const accountData = {
      ...account,
    };
    this.accounts.push(accountData);
  }

  async findByEmail(email: string): Promise<Account | undefined> {
    const account = await this.accounts.find(
      (account) => account.email.value === email
    );
    if (!account) return undefined;
    return {
      accountId: account.accountId,
      name: account.name.value,
      email: account.email.value,
      password: account.password.value,
    };
  }
}
