
// إعداد الاتصال بـ PostgreSQL
const { Pool } = require('pg');
const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'school_exam',
  password: 'your_db_password',
  port: 5432,
});
module.exports = pool;
