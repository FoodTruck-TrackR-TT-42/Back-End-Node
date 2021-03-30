const users = {
    "userId": 1,
    "role": (1 || 2),
    "username": "Billybob",
    "password": "12345",
    "currentLocation": "1234 lullaby lane",
    "favoriteTrucks": [1, 5],
    "trucksOwned": [1, 5]
}

const truck =  {
    "truckId": 1,
    "name": "Paco's Tacos",
    "currentLocation": "456 Swendel Drive",
        "departureTime": "8pm",
        "imageOfTruck": "url",
        "cuisineType": "Mexican",
        "customerRatings": [4,2,4,3,5],
        "customerRatingsAvg": function average(num) {
        return Math.round(num.reduce((acc, curr) => (acc + curr)) / num.length * 10) / 10;
    },
        "menuId": 1
}

const menu = [
    {
        "itemId": 1,
        "itemName": "Burrito",
        "itemDescription": "flour tortilla wrapped up with steak, guacamole, and pico de gallo",
        "itemPhotos": ["url"],
        "itemPrice": 5,
        "customerRating": [4, 5, 3, 4],
        "truckId": 1
    },
    {
        "itemId": 2,
        "itemName": "Burrito",
        "itemDescription": "flour tortilla wrapped up with steak, guacamole, and pico de gallo",
        "itemPhotos": ["url"],
        "itemPrice": 5,
        "customerRating": [4, 5, 3, 4],
        "truckId": 1
    }
]

exports.user = users
exports.truck = truck
exports.menu = menu
exports.seeds = function (knex) {
    return knex('users').insert(users)
}
exports.seeds = function (knex) {
    return knex('truck').insert(truck)
}
exports.seeds = function (knex) {
    return knex('menu').insert(menu)
}