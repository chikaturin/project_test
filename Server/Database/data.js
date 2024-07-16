import mysql from 'mysql2/promise';

async function initializeConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',       // Sử dụng biến môi trường hoặc giá trị mặc định
      user: process.env.DB_USER || 'root',            // Sử dụng biến môi trường hoặc giá trị mặc định
      password: process.env.DB_PASSWORD || '',        // Sử dụng biến môi trường hoặc giá trị mặc định
      database: process.env.DB_NAME || 'DB_CNPM',     // Sử dụng biến môi trường hoặc giá trị mặc định
      port: parseInt(process.env.DB_PORT, 10) || 3306, // Sử dụng biến môi trường hoặc giá trị mặc định
    });
    console.log('Connected to the database');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error;  // Ném lỗi để ứng dụng có thể xử lý hoặc ghi log thêm
  }
}
