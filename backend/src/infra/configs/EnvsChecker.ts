export default class EnvChecker {
  static checkEnvVariables(variables: string[]) {
    const missingVariables = variables.filter(
      (variable) => !process.env[variable]
    );

    if (missingVariables.length > 0) {
      throw new Error(
        `Missing environment variables: ${missingVariables.join(', ')}`
      );
    }
  }
}
