const Pool = require("pg").Pool;

const pool = new Pool({
    PGUSER:"postgres",
    PGPASSWORD:"MOd9y9j9hBax9P3EQA34",
    PGHOST:"containers-us-west-101.railway.app",
    PGPORT:5863,
    PGDATABASE:"railway"

});
module.exports =pool;