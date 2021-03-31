exports.seed = function(knex) {
    return knex('trucks').del()
      .then(function () {
        return knex('trucks').insert([
          {truck_name: "Paco's Tacos", truck_img: 'https://en.wikipedia.org/wiki/Taco_trucks_on_every_corner#/media/File:Taco_Truck_St_Louis_MO.jpg', cuisine_type_id: 1, user_id: 1},
          {truck_name: "Jim's BBQ", truck_img: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_2172,w_3864,x_0,y_202/f_auto,q_auto,w_1100/v1558021472/shape/mentalfloss/80312-istock-957009874.jpg', cuisine_type_id: 5, user_id: 2},
        ]);
      });
  };