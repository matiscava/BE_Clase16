// const options = {
//     client: 'mysql',
//     conecton: {
//         host: 'localhost',
//         port: 3308,
//         user: 'root',
//         password: 'matinico11',
//         database: 'testdb'
//     }
// };
const options = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3308,
        user: 'root',
        password: 'matinico11',
        database: 'testdb'
    },
    pool: { min: 0, max: 7 }
};
module.exports = {
    options
}