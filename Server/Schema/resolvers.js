import connection from '../Database/data.js';
import {Mutation} from '../Controller/KhachHangController.js';
export const resolvers = {
  Query: {
      getKhachHang: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM KhachHang', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getDanhSachSanBay: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM DanhSachSanBay', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getTuyen: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM Tuyen', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getPhuongTien: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM PhuongTien', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getTramDung: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM TramDung', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getChiTietXeOto: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM ChiTietXeOto', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getDatXeOto: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM DatXeOto', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getAppraiseCar: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM AppraiseCar', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getDoanhThuThangDatXe: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM DoanhThuThangDatXe', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },
      getDoanhThuThangBanVe: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM DoanhThuThangBanVe', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getPhieuDatTau: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM PhieuDatTau', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getAppraiseTrain: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM AppraiseTrain', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getPhieuDatXeBus: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM PhieuDatXeBus', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getAppraiseBus: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM AppraiseBus', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getLichSuDatXeOto: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM LichSuDatXeOto', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getLichSuBus: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM LichSuBus', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },

      getLichSuTau: async () => {
          return new Promise((resolve, reject) => {
              connection.query('SELECT * FROM LichSuTau', (error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                      resolve(results);
                  }
              });
          });
      },
  },
  Mutation,
};