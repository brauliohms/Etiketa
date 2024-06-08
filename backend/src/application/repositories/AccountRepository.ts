import Account from '../../domain/Account';

export default interface AccountsRepository {
  create(account: Account): Promise<void>;
  findByEmail(email: string): Promise<Account | undefined>;
}
