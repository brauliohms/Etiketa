import AccountsRepository from '../../application/repositories/AccountRepository';
import Account from '../../domain/Account';
import { KnexDatabase } from '../database/knex/KnexDatabase';

export default class KnexAccountsRepository implements AccountsRepository {
  private knex = KnexDatabase.getInstance();

  async create(account: Account): Promise<void> {
    await this.knex('accounts').insert({
      accountId: account.accountId,
      name: account.name.value,
      email: account.email.value,
      password: account.password.value,
    });
  }

  async findByEmail(email: string): Promise<Account | undefined> {
    const result = await this.knex('accounts').where({ email }).first();
    if (!result) return undefined;
    const account = new Account(
      result.accountId,
      result.name,
      result.email,
      result.password
    );
    return account;
  }
}
