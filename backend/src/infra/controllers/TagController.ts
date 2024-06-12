import CreateTagUseCase from '../../application/usecases/CreateTag';
import GetTagUseCase from '../../application/usecases/GetTagById';
import HttpServer from '../http/HttpServer';
import AuthMiddleware from '../http/middlewares/AuthMiddleware';

export default class TagController {
  constructor(
    private httpServer: HttpServer,
    private createTagUseCase: CreateTagUseCase,
    private getTagsUseCase: GetTagUseCase,
    private authMiddleware: AuthMiddleware
  ) {
    this.httpServer.register(
      'post',
      '/tags',
      async (params: any, body: any) => {
        await this.createTagUseCase.execute(body);
      },
      [this.authMiddleware]
    );
    this.httpServer.register(
      'get',
      '/tags/:id',
      async (params: any, body: any) => {
        const { id } = params;
        return await this.getTagsUseCase.execute(id);
      },
      [this.authMiddleware]
    );
  }
}
