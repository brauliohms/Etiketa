import CreateAccountUseCase from './application/usecases/CreateAccount';
import GetAccountUseCase from './application/usecases/GetAccount';
import { AccountController } from './infra/controllers/AccountController';
import ExpressAdapter from './infra/http/ExpressHttpAdapter';
import AccountRepositoryInMemory from './infra/repositories/inMemory/AccountRepository';

const expressHttpServer = new ExpressAdapter();
const createAccountInMemory = new AccountRepositoryInMemory();
const createAccountUseCase = new CreateAccountUseCase(createAccountInMemory);
const getAccountUseCase = new GetAccountUseCase(createAccountInMemory);

new AccountController(
  expressHttpServer,
  createAccountUseCase,
  getAccountUseCase
);

expressHttpServer.listen(3333);
