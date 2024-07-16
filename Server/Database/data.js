  import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DB_CNPM'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

export default connection;
