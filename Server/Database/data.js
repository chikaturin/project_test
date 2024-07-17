import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: 'localhost',  // Sửa lại với địa chỉ IP của cơ sở dữ liệu
    user: 'root',
    password: '',
    database:'db_cnpm',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export async function initializeConnection() {
    try {
        // Test một kết nối
        await pool.query('SELECT 1');
        console.log('Database connected successfully!');
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;  // Rethrow lỗi để quản lý ở nơi gọi
    }
}
