
import mysql from 'mysql2/promise';

async function initializeConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'DB_CNPM'
  });

  console.log('Successful Connected to MySQL database.');
  return connection;
}

const connection = await initializeConnection();

export default connection;
