'use strict'
exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.uuid('id').primary()
  table.string('email').unique().notNullable()
  table.string('password').notNullable()
  table.timestamps()
})

exports.down = (knex) => knex.schema.dropTable('users')
