import { pool } from '../Database/data.js';

export const InsertKhachHang= async (_parent, args) => {
        const { MaCus, TenKH, Sdt, Email, NgaySinh, Password } = args;
        const insertQuery = 'INSERT INTO KhachHang (MaCus, TenKH, Sdt, Email, NgaySinh, Password) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [MaCus, TenKH, Sdt, Email, NgaySinh, Password];
  
        try {
          const [result] = await pool.execute(insertQuery, values);
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
      };
