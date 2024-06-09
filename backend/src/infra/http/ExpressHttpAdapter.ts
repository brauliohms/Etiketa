import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import HttpServer from './HttpServer';

export interface IRequest {
  body: any;
}

export interface IResponse {
  status(code: number): IResponse;
  send(data?: any): void;
}

export default class ExpressAdapter implements HttpServer {
  app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  use(middleware: (req: Request, res: Response, next: NextFunction) => void) {
    this.app.use(middleware);
  }

  register(
    method: string,
    url: string,
    callback: Function,
    middlewares: any[] = []
  ): void {
    const middlewareFunctions = middlewares.map(
      (middleware) => (req: Request, res: Response, next: NextFunction) => {
        return middleware.handle(req, res, next);
      }
    );

    this.app[method](
      url,
      ...middlewareFunctions,
      async function (req: any, res: any) {
        try {
          const output = await callback(req.params, req.body);
          res.json(output);
        } catch (e: any) {
          res.status(422).json({
            message: e.message,
          });
        }
      }
    );
  }

  setupSwagger(swaggerFilePath: string): void {
    const swaggerDocument = JSON.parse(
      fs.readFileSync(swaggerFilePath, 'utf8')
    );
    this.app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument, {
        swaggerOptions: {
          url: 'http://localhost:3000/api-docs/swagger.json',
        },
      })
    );
  }

  listen(port: number): void {
    this.app.listen(port, () =>
      console.log(`running at http://localhost:${port}`)
    );
  }
}
