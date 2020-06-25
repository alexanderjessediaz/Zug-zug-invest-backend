
exports.up = function(knex) {
    return knex.schema.createTable("user", table => {
        table.increments()
        table.string("username")
        table.string("password_digest")
        table.boolean("admin").notNullable().defaultTo(false)
        table.timestamps("created_at").notNullable().defaultTo(knex.raw("now()"))
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user")
};
