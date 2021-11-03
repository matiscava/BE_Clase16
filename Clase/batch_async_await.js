const { options } = require('./options/mysql');
const knex = require('knex')(options);

const cars = [
    {name: 'Audi',price: 56264 },
    {name: 'Mercedez',price: 57127 },
    {name: 'Skoda',price: 9000 },
    {name: 'Volvo',price: 29000 },
    {name: 'Bentley',price: 350000 },
    {name: 'Hummer',price: 41400 },
    {name: 'Volkswagen',price: 21600 }
]

(async () => {
    try {
        console.log('--> Borramos todos los autos')
        await knex('cars').del()

        console.log('--> Insertamos autos')
        await knex('cars').insert(cars)

        console.log('--> Leemos todos los autos')
        let columnas = await knex.from('cars').select('*')
        for(columna of columnas) console.log(`ID: ${columna['id']}, Nombre: ${columna['name']}, Precio: $ ${columna['price']}`)

        console.log('--> Insertamos un auto más')
        await knex('cars').insert({name: 'fiat', price: 7777})

        console.log('--> Leemos los autos actualizados')
        rows = await knex.from('cars').select('*')
        for(row of rows) console.log(`ID: ${row['id']}, Nombre: ${row['name']}, Precio: $ ${row['price']}`)
    }
    catch(error) {
        console.error(error);
        throw error;
    }
    finally{
        knex.destroy();
    }
})()