import React, { useState } from 'react';
import { addKhachHang } from './Controller/KhachHangController.jsx';

const App = () => {
    const [khachHangData, setKhachHangData] = useState({
        MaCus: '',
        TenKH: '',
        Sdt: '',
        Email: '',
        NgaySinh: '',
        Password: '',
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setKhachHangData({
            ...khachHangData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await addKhachHang(khachHangData);
            console.log('Khách hàng được thêm:', response);
        } catch (error) {
            console.error('Lỗi khi thêm khách hàng:', error);
            setError('Lỗi khi thêm khách hàng. Vui lòng thử lại sau.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="MaCus"
                value={khachHangData.MaCus}
                onChange={handleChange}
                placeholder="MaCus"
            />
            <input
                type="text"
                name="TenKH"
                value={khachHangData.TenKH}
                onChange={handleChange}
                placeholder="Tên Khách Hàng"
            />
            <input
                type="text"
                name="Sdt"
                value={khachHangData.Sdt}
                onChange={handleChange}
                placeholder="Số điện thoại"
            />
            <input
                type="text"
                name="Email"
                value={khachHangData.Email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="text"
                name="NgaySinh"
                value={khachHangData.NgaySinh}
                onChange={handleChange}
                placeholder="Ngày Sinh"
            />
            <input
                type="password"
                name="Password"
                value={khachHangData.Password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button type="submit">Thêm Khách Hàng</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default App;
