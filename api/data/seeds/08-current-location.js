exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('current_location').del()
      .then(function () {
        // Inserts seed entries
        return knex('current_location').insert([
          {current_lat: 25.078, current_long: -98.234, user_id: 2, truck_id: null},
          {current_lat: 25.123, current_long: -123.459, user_id: null, truck_id: 1},
          {current_lat: 25.262, current_long: -121.452, user_id: null, truck_id: 2},
          {current_lat: 25.562, current_long: -78.123, user_id: null, truck_id: 3},
        ]);
      });
  };