const { options } = require('./options/mysql');
const knex = require('knex')(options);

knex.from('cars').select('*')
    .then((rows) => {
        rows.forEach(car => {
            console.log(`ID: ${car.id}, NAME: ${car.name}, PRICE: ${car.price}`);
        });
    })
    .catch((error) => {console.error(error);throw error;})
    .finally(() => knex.destroy())