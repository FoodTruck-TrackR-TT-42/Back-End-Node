exports.seed = function(knex) {
    return knex('menu_items').del()
      .then(function () {
        return knex('menu_items').insert([
          {item_name: "Paco's Taco", item_description: 'Flour taco shell with chicken, lettuce, pico de gallo, cheese, and guacamole', item_price: 5.99, truck_id: 1},
          {item_name: "Paco's Burrito", item_description: 'Burrito filled with steak, chorizo, tomatoes, lettuce, and topped with sour cream', item_price: 8, truck_id: 1},
          {item_name: 'Ribs', item_description: 'Slow cooked ribs with bbq sauce of your choice', item_price: 10, truck_id: 2},
          {item_name: 'Brisket', item_description: 'Melt in your mouth brisket, best around', item_price: 11.99, truck_id: 2},
          {item_name: 'Chicken Wings', item_description: 'Smoked chicken wings with sauce of choice', item_price: 6.99, truck_id: 2},
        ]);
      });
  };