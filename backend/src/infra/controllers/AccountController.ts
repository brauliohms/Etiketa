import CreateAccountUseCase from '../../application/usecases/CreateAccount';
import GetAccountUseCase from '../../application/usecases/Authenticate';
import HttpServer from '../http/HttpServer';
import AuthMiddleware from '../http/middlewares/AuthMiddleware';

export default class AccountController {
  constructor(
    private httpServer: HttpServer,
    private accountUseCase: CreateAccountUseCase,
    private getAccountUseCase: GetAccountUseCase,
    private authMiddleware: AuthMiddleware
  ) {
    this.httpServer.register(
      'post',
      '/signup',
      async (params: any, body: any) => {
        await this.accountUseCase.execute(body);
      }
    );
    this.httpServer.register(
      'post',
      '/signin',
      async (params: any, body: any) => {
        const { email, password } = body;
        return await this.getAccountUseCase.execute(email, password);
      }
    );
    this.httpServer.register(
      'get',
      '/protected',
      async (params: any, body: any) => {
        return { ok: true };
      },
      [this.authMiddleware]
    );
  }
}
