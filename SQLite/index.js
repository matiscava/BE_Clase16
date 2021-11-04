const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./DB/mydb.sqlite', sqlite3.OPEN_READWRITE, (error)=> {
    if (error) return console.error(error.message);

    console.log('connection succesfull');
})

db.listenerCount('CREATE_TABLE user')

db.close((error) => {
    if (error) return console.error(error.message);
})