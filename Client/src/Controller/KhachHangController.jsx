import { gql } from 'graphql-request';
import {client} from './client';

export const addKhachHang = async (khachHangData) => {
  const query = gql`
    mutation Mutation($MaCus: String!, $TenKH: String, $Sdt: String, $Email: String, $NgaySinh: String, $Password: String) {
      addKhachHang(MaCus: $MaCus, TenKH: $TenKH, Sdt: $Sdt, Email: $Email, NgaySinh: $NgaySinh, Password: $Password) {
        MaCus
        TenKH
        Sdt
        Email
        NgaySinh
        Password
      }
    }
  `;

  const variables = {
    MaCus: khachHangData.MaCus,
    TenKH: khachHangData.TenKH,
    Sdt: khachHangData.Sdt,
    Email: khachHangData.Email,
    NgaySinh: khachHangData.NgaySinh,
    Password: khachHangData.Password,
  };

  try {
    const data = await client.request(query, variables);
    alert('Khách hàng được thêm thành công:', data);
    return data;
  } catch (error) {
    console.error('Lỗi khi thêm khách hàng:', error);
    throw new Error('Không thể thêm khách hàng');
  }
};

export const queryKH = async () => {
  const query = gql`
    query GetKhachHang {
      getKhachHang {
        MaCus
        TenKH
        Sdt
        Email
        NgaySinh
        Password
      }
    }
  `;

  try {
    const data = await client.request(query);
    return data.getKhachHang;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách khách hàng:', error);
    throw new Error('Không thể lấy danh sách khách hàng');
  }
};
