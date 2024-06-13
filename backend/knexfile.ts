import * as dotenv from 'dotenv';
dotenv.config();
import type { Knex } from 'knex';
import path from 'path';

const { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } =
  process.env;

if (!DATABASE_HOST || !DATABASE_USER || !DATABASE_PASSWORD || !DATABASE_NAME)
  throw new Error('One or more required environment variables are missing');

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg' as string,
    connection: {
      host: DATABASE_HOST,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      database: DATABASE_NAME,
    },
    migrations: {
      directory: path.resolve(
        __dirname,
        'src',
        'infra',
        'database',
        'knex',
        'migrations'
      ),
    },
    seeds: {
      directory: path.resolve(
        __dirname,
        'src',
        'infra',
        'database',
        'knex',
        'seeds'
      ),
    },
  },
};

export default config;
