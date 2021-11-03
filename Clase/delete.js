const { options } = require('./options/mysql');
const knex = require('knex')(options);

knex.from('cars').del()
    .then(() => console.log('all cars deleted'))
    .catch((error) => {console.error(error);throw error;})
    .finally(() => knex.destroy())