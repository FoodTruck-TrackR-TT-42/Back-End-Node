exports.seed = function(knex) {
    return knex('favorite_trucks').del()
      .then(function () {
        return knex('favorite_trucks').insert([
          {user_id: 1, truck_id: 2},
          {user_id: 2, truck_id: 1}
        ]);
      });
  };