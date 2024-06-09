import bcrypt from 'bcrypt';
import { PasswordHasher } from '../../application/utils/Hasher';

export class BcryptPasswordHasher implements PasswordHasher {
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async comparePassword(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean | undefined> {
    try {
      return bcrypt.compareSync(plainPassword, hashedPassword);
    } catch (error) {
      console.log(error);
    }
  }
}
