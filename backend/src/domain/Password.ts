import * as bcrypt from 'bcrypt';

export default class Password {
  constructor(readonly value: string, readonly isHashed: boolean = false) {
    if (!isHashed && this.isInvalidPassword(value))
      throw new Error('Invalid password');
  }

  isInvalidPassword(value: string): boolean {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
    return !regex.test(value);
  }

  async hash(): Promise<string> {
    if (!this.isHashed) {
      return bcrypt.hash(this.value, 8);
    }
    return this.value;
  }
}
