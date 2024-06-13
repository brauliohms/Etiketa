import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('tags_properties', (table) => {
    table.uuid('id').defaultTo(knex.fn.uuid()).primary();
    table
      .uuid('tag_id')
      .unsigned()
      .references('id')
      .inTable('tags')
      .onDelete('SET NULL');
    table.string('key', 255).notNullable();
    table.text('value');
    table.string('type', 50);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('tags_properties');
}
