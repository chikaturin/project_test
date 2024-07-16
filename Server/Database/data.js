import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: process.env.DB_HOST,  // Sửa lại với địa chỉ IP của cơ sở dữ liệu
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Hàm khởi tạo kết nối, không xuất khẩu
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
