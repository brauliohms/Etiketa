export interface PasswordHasher {
  hashPassword(password: string): Promise<string>;
  comparePassword(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean | undefined>;
}
