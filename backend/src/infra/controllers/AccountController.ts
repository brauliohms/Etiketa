import CreateAccountUseCase from '../../application/usecases/CreateAccount';
import GetAccountUseCase from '../../application/usecases/GetAccount';
import HttpServer from '../http/HttpServer';

export class AccountController {
  constructor(
    private httpServer: HttpServer,
    private accountUseCase: CreateAccountUseCase,
    private getAccountUseCase: GetAccountUseCase
  ) {
    this.httpServer.register(
      'post',
      '/accounts',
      async (params: any, body: any) => {
        await this.accountUseCase.execute(body);
      }
    );
    this.httpServer.register(
      'get',
      '/accounts',
      async (params: any, body: any) => {
        const { email } = body;
        console.log(email);
        return await this.getAccountUseCase.execute(email);
      }
    );
  }
}
