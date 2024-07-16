import { pool } from '../Database/data.js';
import { InsertKhachHang } from '../Controller/KhachHangController.js';
import { InsertSanBay, UpdateSanBay } from '../Controller/SanBayController.js';

export const resolvers = {
  Query: {
    getKhachHang: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM KhachHang');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy danh sách Khách Hàng: ' + error.message);
      }
    },
    getDanhSachSanBay: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM DanhSachSanBay');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy danh sách Sân Bay: ' + error.message);
      }
    },
    getTuyen: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM Tuyen');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy danh sách Tuyến: ' + error.message);
      }
    },
    getPhuongTien: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM PhuongTien');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy danh sách Phương Tiện: ' + error.message);
      }
    },
    getTramDung: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM TramDung');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy danh sách Trạm Dừng: ' + error.message);
      }
    },
    getChiTietXeOto: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM ChiTietXeOto');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy danh sách Chi Tiết Xe Ô Tô: ' + error.message);
      }
    },
    getDatXeOto: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM DatXeOto');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy danh sách Đặt Xe Ô Tô: ' + error.message);
      }
    },
    getAppraiseCar: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM AppraiseCar');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy danh sách Đánh Giá Xe Ô Tô: ' + error.message);
      }
    },
    getDoanhThuThangDatXe: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM DoanhThuThangDatXe');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy Doanh Thu Tháng Đặt Xe Ô Tô: ' + error.message);
      }
    },
    getDoanhThuThangBanVe: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM DoanhThuThangBanVe');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy Doanh Thu Tháng Bán Vé: ' + error.message);
      }
    },
    getPhieuDatTau: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM PhieuDatTau');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy danh sách Phiếu Đặt Tàu: ' + error.message);
      }
    },
    getAppraiseTrain: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM AppraiseTrain');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy danh sách Đánh Giá Tàu: ' + error.message);
      }
    },
    getPhieuDatXeBus: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM PhieuDatXeBus');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy danh sách Phiếu Đặt Xe Bus: ' + error.message);
      }
    },
    getAppraiseBus: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM AppraiseBus');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy danh sách Đánh Giá Xe Bus: ' + error.message);
      }
    },
    getLichSuDatXeOto: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM LichSuDatXeOto');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy Lịch Sử Đặt Xe Ô Tô: ' + error.message);
      }
    },
    getLichSuBus: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM LichSuBus');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy Lịch Sử Xe Bus: ' + error.message);
      }
    },
    getLichSuTau: async () => {
      try {
        const [results] = await pool.query('SELECT * FROM LichSuTau');
        return results;
      } catch (error) {
        throw new Error('Lỗi khi lấy Lịch Sử Tàu: ' + error.message);
      }
    },
  },
  Mutation: {
    addKhachHang: InsertKhachHang,
    addDanhSachSanBay: InsertSanBay,
    editDanhSachSanBay: UpdateSanBay,
  },
};
