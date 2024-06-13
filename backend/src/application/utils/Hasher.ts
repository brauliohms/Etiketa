export default interface PasswordHasher {
  hashPassword(password: string): Promise<string>;
  comparePassword(
    plainPassword: string,
    hashedPassword: string
  ): boolean | undefined;
}
