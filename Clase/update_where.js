const { options } = require('./options/mysql');
const knex = require('knex')(options);

knex.from('cars').where('price', '9000').update({price: 9500})
    .then(() => console.log('car updated'))
    .catch((error) => {console.error(error);throw error;})
    .finally(() => knex.destroy())