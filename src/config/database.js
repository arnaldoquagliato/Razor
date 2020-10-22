const { Pool } = require('pg');
const dotenv = require('dotenv');
const { text } = require('body-parser');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('deu bom');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};