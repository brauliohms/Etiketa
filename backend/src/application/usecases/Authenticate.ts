import UnauthorizedError from '../erros/UnauthorizedError';
import AccountsRepository from '../repositories/AccountRepository';
import PasswordHasher from '../utils/Hasher';
import AuthToken from '../utils/AuthToken';

export default class AuthenticateUseCase {
  constructor(
    private readonly accountRepository: AccountsRepository,
    private readonly jwtService: AuthToken,
    private readonly passwordHasher: PasswordHasher
  ) {}

  async execute(email: string, password: string) {
    const account = await this.accountRepository.findByEmail(email);
    if (!account) throw new UnauthorizedError('Invalid Credentials', 401);
    const encryptPassword = String(account.password);
    const passwordMatches = this.passwordHasher.comparePassword(
      password,
      encryptPassword
    );

    if (!passwordMatches)
      throw new UnauthorizedError('Invalid Credentials', 401);

    if (!passwordMatches)
      throw new UnauthorizedError('Invalid Credentials', 401);

    const token = this.jwtService.generateToken({
      accountId: account.accountId,
      email: account.email,
    });

    return {
      account: {
        ...account,
      },
      token,
    };
  }
}
