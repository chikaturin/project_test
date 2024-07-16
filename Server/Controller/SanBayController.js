import connection from '../Database/data.js';

export const InsertSanBay= async (_parent, args) => {
        const { TenSanBay, ThanhPho} = args;
        const insertQuery = 'INSERT INTO DanhSachSanBay (TenSanBay,ThanhPho) VALUES (?, ?)';
        const values = [ TenSanBay, ThanhPho];
  
        try {
          const [result] = await connection.execute(insertQuery, values);
          return {
            TenSanBay,
            TenThanhPhoKH,
          };
        } catch (error) {
            throw new Error('Lỗi khi thêm Danh sách sân bay vào cơ sở dữ liệu');
          }          
      };
      export const UpdateSanBay = async (_, { MaSB, ThanhPho }) => {
        const updateQuery = `
          UPDATE DanhSachSanBay 
          SET ThanhPho = ? 
          WHERE MaSB = ?`;
        const values = [ThanhPho, MaSB];
      
        try {
          await connection.execute(updateQuery, values);
          const [updatedSanBay] = await connection.execute('SELECT * FROM DanhSachSanBay WHERE MaSB = ?', [MaSB]);
      
          return updatedSanBay[0];
        } catch (error) {
          throw new Error('Lỗi khi cập nhật danh sách sân bay trong cơ sở dữ liệu');
        }
      };