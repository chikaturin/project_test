import connection from '../Database/data.js';
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing

export const Mutation = {
    addKhachHang: async (_parent, args) => {
        const { MaCus, TenKH, Sdt, Email, NgaySinh, Password } = args;
        const insertQuery = 'INSERT INTO KhachHang (MaCus, TenKH, Sdt, Email, NgaySinh, Password) VALUES (?, ?, ?, ?, ?, ?)';
        const hashedPassword = await bcrypt.hash(Password, 10);
        const values = [MaCus, TenKH, Sdt, Email, NgaySinh, hashedPassword];

        try {
            const [result] = await connection.execute(insertQuery, values);
            return {
                MaCus,
                TenKH,
                Sdt,
                Email,
                NgaySinh,
            };
        } catch (error) {
            console.error('Lỗi khi thêm Khách Hàng:', error);

            if (error.code === 'ER_DUP_ENTRY') {
                throw new Error('Mã khách hàng hoặc email đã tồn tại');
            }

            throw new Error('Lỗi khi thêm Khách Hàng vào cơ sở dữ liệu');
        }
    },
};
