const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"root",
    host:"localhost",
    port:5863,
    database:"ticketsystem"

});
module.exports =pool;