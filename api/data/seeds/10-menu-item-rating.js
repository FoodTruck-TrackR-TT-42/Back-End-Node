exports.seed = function(knex) {
    return knex('menu_item_ratings').del()
      .then(function () {
        return knex('menu_item_ratings').insert([
          {menu_item_rating: 4, menu_item_id: 1, user_id: 2},
          {menu_item_rating: 4, menu_item_id: 2, user_id: 2},
          {menu_item_rating: 5, menu_item_id: 3, user_id: 1},
          {menu_item_rating: 5, menu_item_id: 4, user_id: 2},
          {menu_item_rating: 3, menu_item_id: 5, user_id: 1},
        ]);
      });
  };