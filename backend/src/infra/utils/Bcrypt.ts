import bcrypt from 'bcryptjs';
import PasswordHasher from '../../application/utils/Hasher';

export default class BcryptPasswordHasher implements PasswordHasher {
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  comparePassword(
    plainPassword: string,
    hashedPassword: string
  ): boolean | undefined {
    try {
      return bcrypt.compareSync(plainPassword, hashedPassword);
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
