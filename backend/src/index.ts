import express, { Request, Response } from 'express';

const server = express();

server.get('/health', (request: Request, response: Response) =>
  response.end('Its Ok')
);
server.listen(3333, () =>
  console.log('server is running at http://localhost:3333')
);
