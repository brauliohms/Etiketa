import jwt from 'jsonwebtoken';
import AuthToken from '../../application/utils/AuthToken';

export default class JwtTokenService implements AuthToken {
  private static readonly secretKey = process.env.JWT_SECRET as string;

  generateToken(payload: Input): string {
    return jwt.sign(
      {
        sub: payload.accountId,
        email: payload.email,
      },
      JwtTokenService.secretKey,
      {
        expiresIn: '7d',
      }
    );
  }

  verifyToken(token: string): any {
    return jwt.verify(token, JwtTokenService.secretKey);
  }
}

type Input = {
  accountId: string;
  email: string;
};
