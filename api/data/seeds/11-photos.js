exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('item_photos').del()
      .then(function () {
        // Inserts seed entries
        return knex('item_photos').insert([
          {item_photo_img: 'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', menu_item_id: 1},
          {item_photo_img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', menu_item_id: 2},
          {item_photo_img: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', menu_item_id: 3},
          {item_photo_img: 'https://images.pexels.com/photos/3641761/pexels-photo-3641761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', menu_item_id: 4},
          {item_photo_img: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', menu_item_id: 5},
         
        ]);
      });
  };