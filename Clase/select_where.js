const { options } = require('./options/mysql');
const knex = require('knex')(options);

knex.from('cars').select('name','price').where('price','>=','50000')
    .then((rows) => {
        for (row of rows) {
            console.log(`Name: ${row['name']}, Price: $ ${row['price']}`);
        }
    })
    .catch((error) => {console.error(error);throw error;})
    .finally(() => knex.destroy())