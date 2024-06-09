import knex, { Knex } from 'knex';
import config from '../../../../knexfile';

export class KnexDatabase {
  private static instance: Knex | undefined;

  private constructor() {}

  public static getInstance(): Knex {
    if (!KnexDatabase.instance) {
      const environment = process.env.NODE_ENV || 'development';
      const connectionConfig = config[environment];
      KnexDatabase.instance = knex(connectionConfig);
    }
    return KnexDatabase.instance;
  }

  public static destroyInstance(): void {
    if (KnexDatabase.instance) {
      KnexDatabase.instance.destroy();
      KnexDatabase.instance = undefined;
    }
  }
}
