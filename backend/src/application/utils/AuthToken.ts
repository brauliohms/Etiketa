export interface AuthToken {
  generateToken(payload: any): string;
  verifyToken(token: string): any;
}
