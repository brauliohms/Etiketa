export default class UnauthorizedError extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'UnauthorizedError';
    this.message = message;
    this.status = status;
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}
