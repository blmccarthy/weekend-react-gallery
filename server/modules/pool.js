const pg = require('pg');
const Pool = pg.Pool;

const config = {
  database: 'react_gallery',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

// create a new pool instance to manage our connections
const pool = new Pool(config);

pool.on('connect', () => {
  console.log('Postgres is connected!');
})

pool.on('error', (err) => {
  console.log('Unexpected things!', err);
})

// allow access to this pool instance from other code
module.exports = pool;