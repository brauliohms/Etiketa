import { Request, Response, NextFunction } from 'express';
import JwtTokenService from '../../utils/JsonWebToken';
import { JwtPayload } from 'jsonwebtoken';

declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload | string;
  }
}

export default class AuthMiddleware {
  constructor(private jwtService: JwtTokenService) {}

  async handle(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return res.status(401).json({ message: 'Token is missing' });

    const [, token] = authHeader.split(' ');
    try {
      const decoded = this.jwtService.verifyToken(token);
      req.user = decoded;
      return next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
}
