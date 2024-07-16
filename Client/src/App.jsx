import React, { useState, useEffect } from 'react';
import { addKhachHang, queryKH } from './Controller/KhachHangController.jsx';
import { querySB, addSanBay,UpdateSanBay } from './Controller/SanBayController.jsx';

function formatDate(timestamp) {
  const date = new Date(Number(timestamp));
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

const App = () => {
  const [MaSB, setMaSB] = useState('');
  const [thanhPho, setThanhPho] = useState('');

  const handleSubmitUP = async (e) => {
    e.preventDefault();
    const sanBayData = {
      MaSB,
      ThanhPho: thanhPho,
    };

    try {
      const updatedSanBay = await UpdateSanBay(sanBayData);
      console.log('Sân bay được cập nhật:', updatedSanBay);
      setMaSB('');
      setThanhPho('');
      setError(null); // Reset error
    } catch (error) {
      console.error(error.message);
      setError('Lỗi khi cập nhật sân bay. Vui lòng thử lại sau.');
    }
  };

  const [khachHangData, setKhachHangData] = useState({
    MaCus: '',
    TenKH: '',
    Sdt: '',
    Email: '',
    NgaySinh: '',
    Password: '',
  });

  const [SanBayData, setSanBayData] = useState({
    MaSB: '',
    TenSanBay: '',
    ThanhPho: '',
  });

  const [error, setError] = useState(null);
  const [khachHangList, setKhachHangList] = useState([]);
  const [SanBayList, setSanBayList] = useState([]);

  useEffect(() => {
    fetchKhachHangList();
    fetchSanBayList();
  }, []);

  const fetchKhachHangList = async () => {
    try {
      const data = await queryKH();
      setKhachHangList(data);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách khách hàng:', error);
      setError('Lỗi khi lấy danh sách khách hàng. Vui lòng thử lại sau.');
    }
  };

  const fetchSanBayList = async () => {
    try {
      const data = await querySB();
      setSanBayList(data);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách sân bay:', error);
      setError('Lỗi khi lấy danh sách sân bay. Vui lòng thử lại sau.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKhachHangData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeSB = (e) => {
    const { name, value } = e.target;
    setSanBayData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await addKhachHang(khachHangData);
      console.log('Khách hàng được thêm:', response);
      alert('Khách hàng được thêm thành công!');
      fetchKhachHangList();
      setKhachHangData({
        MaCus: '',
        TenKH: '',
        Sdt: '',
        Email: '',
        NgaySinh: '',
        Password: '',
      });
      setError(null); // Reset error
    } catch (error) {
      console.error('Lỗi khi thêm khách hàng:', error);
      setError('Lỗi khi thêm khách hàng. Vui lòng thử lại sau.');
    }
  };

  const handleSubmitSB = async (event) => {
    event.preventDefault();
    try {
      await addSanBay(SanBayData);
      alert('Sân bay được thêm thành công!');
      fetchSanBayList();
      setSanBayData({
        MaSB: '',
        TenSanBay: '',
        ThanhPho: '',
      });
      setError(null); // Reset error
    } catch (error) {
      console.error('Lỗi khi thêm sân bay:', error);
      setError('Lỗi khi thêm sân bay. Vui lòng thử lại sau.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="MaCus"
          value={khachHangData.MaCus}
          onChange={handleChange}
          placeholder="MaCus"
          required
        />
        <input
          type="text"
          name="TenKH"
          value={khachHangData.TenKH}
          onChange={handleChange}
          placeholder="Tên Khách Hàng"
          required
        />
        <input
          type="text"
          name="Sdt"
          value={khachHangData.Sdt}
          onChange={handleChange}
          placeholder="Số điện thoại"
          required
        />
        <input
          type="email"
          name="Email"
          value={khachHangData.Email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="date"
          name="NgaySinh"
          value={khachHangData.NgaySinh}
          onChange={handleChange}
          placeholder="Ngày Sinh"
          required
        />
        <input
          type="password"
          name="Password"
          value={khachHangData.Password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Thêm Khách Hàng</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      <h2>Thêm Sân Bay</h2>
      <form onSubmit={handleSubmitSB}>
        <input
          type="text"
          name="TenSanBay"
          value={SanBayData.TenSanBay}
          onChange={handleChangeSB}
          placeholder="Tên Sân Bay"
          required
        />
        <input
          type="text"
          name="ThanhPho"
          value={SanBayData.ThanhPho}
          onChange={handleChangeSB}
          placeholder="Thành Phố"
          required
        />
        <button type="submit">Thêm Sân Bay</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      <h2>Cập Nhật Sân Bay</h2>
      <form onSubmit={handleSubmitUP}>
        <div>
          <label htmlFor="MaSB">MaSB:</label>
          <input
            name="MaSB"
            type="text"
            value={MaSB}
            onChange={(e) => setMaSB(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="thanhPho">Thành Phố:</label>
          <input
            name="thanhPho"
            type="text"
            value={thanhPho}
            onChange={(e) => setThanhPho(e.target.value)}
          />
        </div>
        <button type="submit">Cập Nhật Sân Bay</button>
      </form>

      <div>
        <h2>Danh sách Khách Hàng</h2>
        <ul>
          {khachHangList.map((khachHang, index) => (
            <li key={index}>
              <strong>Mã Khách Hàng:</strong> {khachHang.MaCus} <br />
              <strong>Tên Khách Hàng:</strong> {khachHang.TenKH} <br />
              <strong>Số điện thoại:</strong> {khachHang.Sdt} <br />
              <strong>Email:</strong> {khachHang.Email} <br />
              <strong>Ngày Sinh:</strong> {formatDate(khachHang.NgaySinh)} <br />
            </li>
          ))}
        </ul>

        <h2>Danh sách Sân Bay</h2>
        <ul>
          {SanBayList.map((SanBay) => (
            <li key={SanBay.MaSB}>
              <strong>Mã Sân Bay:</strong> {SanBay.MaSB} <br />
              <strong>Tên Sân Bay:</strong> {SanBay.TenSanBay} <br />
              <strong>Thành Phố:</strong> {SanBay.ThanhPho} <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
