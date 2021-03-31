exports.seed = function(knex) {
    return knex('cuisine_type').del()
      .then(function () {
        return knex('cuisine_type').insert([
          {cuisine_type: 'Mexican'},
          {cuisine_type: 'Chinese'},
          {cuisine_type: 'Italian'},
          {cuisine_type: 'American'},
          {cuisine_type: 'Barbeque'},
        ]);
      });
  };