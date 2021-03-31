exports.seed = function(knex) {
    return knex('truck_ratings').del()
      .then(function () {
        return knex('truck_ratings').insert([
          {rating: 5, user_id: 1, truck_id: 2},
          {rating: 5, user_id: 2, truck_id: 1},
          {rating: 3, user_id: 1, truck_id: 1},
        ]);
      });
  };