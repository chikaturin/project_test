import mysql from 'mysql2/promise';

async function initializeConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  });

  console.log('Successful Connected to MySQL database.');
  return connection;
}

const connection = await initializeConnection();

export default connection;
