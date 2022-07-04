const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: '4712',
    host: 'localhost',
    port: 5432,
    database: 'getpet',
})

if (Pool) {
    console.log("Подключение к базе данных..")
} else {
    console.log("Подкючение к бд не удалось")
}
module.exports = pool