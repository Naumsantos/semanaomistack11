// criando a tabela "incidentes (casos)" no banco de dados
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments(); // id alto incrementado pelo banco

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();
        
        // criação da chave estrangeira referente a tabela ongs
        table.string('ongs_id').notNullable();
        table.foreign('ongs_id').references('id').inTable('ongs');
    });  
};

//   caso de algum erro durante a criação da tabela
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
