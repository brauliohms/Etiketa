import 'dotenv/config';
import path from 'node:path';
import CreateAccountUseCase from './application/usecases/CreateAccount';
import ExpressAdapter from './infra/http/ExpressHttpAdapter';
import KnexAccountsRepository from './infra/repositories/AccountRepository';
import { JwtTokenService } from './infra/utils/JsonWebToken';
import { BcryptPasswordHasher } from './infra/utils/Bcrypt';
import AuthenticateUseCase from './application/usecases/Authenticate';
import { AccountController } from './infra/controllers/AccountController';
import { AuthMiddleware } from './infra/http/middlewares/AuthMiddleware';
import EnvChecker from './infra/configs/EnvsChecker';
import cors from 'cors';

EnvChecker.checkEnvVariables([
  'PORT',
  'JWT_SECRET',
  'DATABASE_USER',
  'DATABASE_PASSWORD',
  'DATABASE_CLIENT',
  'DATABASE_HOST',
  'DATABASE_NAME',
  'NODE_ENV',
]);

const expressHttpServer = new ExpressAdapter();
const accountRepository = new KnexAccountsRepository();
const createAccountUseCase = new CreateAccountUseCase(accountRepository);
const jwtAuth = new JwtTokenService();
const bcryptHasher = new BcryptPasswordHasher();
const authMiddleware = new AuthMiddleware(jwtAuth);
const authenticateAccountUseCase = new AuthenticateUseCase(
  accountRepository,
  jwtAuth,
  bcryptHasher
);

new AccountController(
  expressHttpServer,
  createAccountUseCase,
  authenticateAccountUseCase,
  authMiddleware
);

const swaggerFilePath = path.resolve(
  __dirname,
  'infra',
  'configs',
  'swagger',
  'api.json'
);

expressHttpServer.setupSwagger(swaggerFilePath);
expressHttpServer.use(cors());
expressHttpServer.listen(Number(process.env.PORT));
