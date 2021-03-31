exports.seed = function(knex) {
    return knex('users').del()
      .then(function () {
        return knex('users').insert([
          {user_role: 1, user_username: "jimbob", user_password: "1234", user_email: "jimbob@email.com"},
          {user_role: 2, user_username: "billybob", user_password: "1234", user_email: "bill@email.com"},
        ]);
      });
  };