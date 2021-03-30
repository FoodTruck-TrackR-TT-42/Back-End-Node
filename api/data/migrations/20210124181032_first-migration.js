exports.up = async (knex) => {
  await knex.schema
    .createTable('truck', (tbl) => {
      tbl.increments('truckId')
      tbl.string('name').notNullable()
      tbl.string('currentLocation').notNullable()
      tbl.string('departureTime').notNullable()
      tbl.string('imageOfTruck')
      tbl.string("cuisineType").notNullable()
      tbl.integer("customerRatings")
      tbl.integer("customerRatingsAvg")
      tbl.integer("menuId")
        .unsigned()
        .notNullable()
        .references("menuId")
        .inTable("menu")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable('users', (tbl) => {
      tbl.increments('user_id')
      tbl.string('username', 200).notNullable()
      tbl.string('role').notNullable()
      tbl.string('password', 200).notNullable()
      tbl.string('currentLocation').notNullable()
      tbl.integer("favoriteTrucks")
      tbl.integer("trucksOwned")
    })
    .createTable('menu', (tbl) => {
      tbl.increments('menuId')
      tbl.integer('itemId')
        .unsigned()
        .notNullable()
      tbl.string('itemName').notNullable()
      tbl.text('itemDescription', 300).notNullable()
      tbl.string('itemPhotos')
      tbl.integer('itemPrice')
      tbl.integer('customerRating')
      tbl.integer('truckId')
        .unsigned()
        .notNullable()
        .references('truckId')
        .inTable('truck')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
}

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists('menu')
  .dropTableIfExists('users')
  .dropTableIfExists('truck')
}
