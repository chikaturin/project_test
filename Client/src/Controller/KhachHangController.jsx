import { graphQLRequest } from './request.jsx';

export const addKhachHang = async (khachHangData) => {
    const query = `
        mutation Mutation($maCus: String!) {
            addKhachHang(MaCus: $maCus) {
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
        // Make the GraphQL request
        const response = await graphQLRequest({
            query,
            variables: { input: khachHangData },
        });

        // Check for HTTP errors
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
        }

        // Parse the JSON data
        const data = await response.json();

        // Check for GraphQL errors
        if (data.errors) {
            throw new Error(`GraphQL error: ${data.errors.map(e => e.message).join(', ')}`);
        }

        // Return the added customer data
        return data.data.addKhachHang;
    } catch (error) {
        console.error('Error adding Khach Hang:', error);
        throw new Error('Lỗi khi thêm khách hàng. Vui lòng thử lại sau.');
    }
};
