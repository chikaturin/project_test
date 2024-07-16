import { gql } from 'graphql-request';
import { client } from './client'; // Ensure this path is correct

export const querySB = async () => {
  const query = gql`
    query GetDanhSachSanBay {
      getDanhSachSanBay {
        MaSB
        TenSanBay
        ThanhPho
      }
    }
  `;
  try {
    const data = await client.request(query);
    return data.getDanhSachSanBay;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách Sân Bay:', error);
    throw new Error('Không thể lấy danh sách Sân Bay');
  }
};

export const addSanBay = async (SanBayData) => {
  const query = gql`
    mutation Mutation($TenSanBay: String!, $ThanhPho: String!) {
      addDanhSachSanBay(TenSanBay: $TenSanBay, ThanhPho: $ThanhPho) {
        TenSanBay
        ThanhPho
      }
    }
  `;
  const variables = {
    TenSanBay: SanBayData.TenSanBay,
    ThanhPho: SanBayData.ThanhPho,
  };
  try {
    const data = await client.request(query, variables);
    return data.addDanhSachSanBay;
  } catch (error) {
    throw new Error('Không thể thêm sân bay');
  }
};

export const UpdateSanBay = async (SanBayData) => {
  const query = gql`
  mutation EditDanhSachSanBay($MaSb: String!, $ThanhPho: String!) {
  editDanhSachSanBay(MaSB: $MaSb, ThanhPho: $ThanhPho) {
      ThanhPho
      MaSB
  }
  }
  `;
  const variables = {
      MaSb: SanBayData.MaSB,
      ThanhPho: SanBayData.ThanhPho,
  };
  try {
      const data = await client.request(query, variables);
      return data.editDanhSachSanBay; 
  } catch (error) {
      throw new Error('Không thể cập nhật sân bay');
  }
}
