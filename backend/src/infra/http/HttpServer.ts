export default interface HttpServer {
  register(
    method: string,
    url: string,
    callback: Function,
    middlewares?: any[]
  ): void;
  listen(port: number): void;
  setupSwagger(swaggerFilePath: string): void;
}
