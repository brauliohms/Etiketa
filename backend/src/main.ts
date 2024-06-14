import cors from "cors";
import "dotenv/config";
import path from "node:path";
import AuthenticateUseCase from "./application/usecases/Authenticate";
import CreateAccountUseCase from "./application/usecases/CreateAccount";
import CreateTagUseCase from "./application/usecases/CreateTag";
import GetTagUseCase from "./application/usecases/GetTagById";
import EnvChecker from "./infra/configs/EnvsChecker";
import AccountController from "./infra/controllers/AccountController";
import TagController from "./infra/controllers/TagController";
import ExpressAdapter from "./infra/http/ExpressHttpAdapter";
import AuthMiddleware from "./infra/http/middlewares/AuthMiddleware";
import KnexAccountsRepository from "./infra/repositories/AccountRepository";
import { KnexTagsRepository } from "./infra/repositories/TagRepository";
import BcryptPasswordHasher from "./infra/utils/Bcrypt";
import JwtTokenService from "./infra/utils/JsonWebToken";

EnvChecker.checkEnvVariables([
  "PORT",
  "JWT_SECRET",
  "DATABASE_USER",
  "DATABASE_PASSWORD",
  "DATABASE_CLIENT",
  "DATABASE_HOST",
  "DATABASE_NAME",
  "NODE_ENV",
]);

// infra bootstrap
const expressHttpServer = new ExpressAdapter();
// server cors
expressHttpServer.use(
  cors()
  // cors({
  //   origin: "*",
  //   optionsSuccessStatus: 200,
  // })
);
const jwtAuth = new JwtTokenService();
const bcryptHasher = new BcryptPasswordHasher();
const authMiddleware = new AuthMiddleware(jwtAuth);

// account bootstrap
const accountRepository = new KnexAccountsRepository();
const createAccountUseCase = new CreateAccountUseCase(accountRepository);
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

// tag bootstrap
const tagRepository = new KnexTagsRepository();
const createTagUseCase = new CreateTagUseCase(tagRepository);
const getTagsUseCase = new GetTagUseCase(tagRepository);
new TagController(
  expressHttpServer,
  createTagUseCase,
  getTagsUseCase,
  authMiddleware
);

// documentation bootstrap
const swaggerFilePath = path.resolve(
  __dirname,
  "infra",
  "configs",
  "swagger",
  "api.json"
);
expressHttpServer.setupSwagger(swaggerFilePath);

expressHttpServer.listen(Number(process.env.PORT));
