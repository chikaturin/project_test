import mysql from 'mysql2/promise';

async function initializeConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'DB_CNPM',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
  });

  console.log('Successfully connected to MySQL database.');
  return connection;
}

const connection = await initializeConnection();

export default connection;
