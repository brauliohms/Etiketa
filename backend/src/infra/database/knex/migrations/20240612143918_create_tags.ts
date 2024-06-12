import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('tags', (table) => {
    table.uuid('id').primary();
    table
      .uuid('parent_id')
      .unsigned()
      .references('id')
      .inTable('tags')
      .onDelete('CASCADE');
    table.string('name', 80).notNullable();
    table.text('description').nullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('tags');
}
