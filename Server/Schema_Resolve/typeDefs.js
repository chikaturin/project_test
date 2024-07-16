export const typeDefs = `#graphql
    type KhachHang {
        MaCus: String!
        TenKH: String
        Sdt: String
        Email: String
        NgaySinh: String
        Password: String
    }
    type DanhSachSanBay {
        MaSB: String!
        TenSanBay: String
        ThanhPho: String
    }
    type Tuyen {
        MaTuyen: String!
        DiemKhoiHanh: String
        DiemKetThuc: String
        ThoiGianKhoiHanh: String
        ThoiGianKetThuc: String
        diemKhoiHanhSanBay: DanhSachSanBay
        diemKetThucSanBay: DanhSachSanBay
    }

    type PhuongTien {
        MaPT: String!
        MaTuyen: String
        MaLoai: Boolean
        TenPhuongTien: String
        SoGheToiDa: Int
        tuyen: Tuyen
    }

    type TramDung {
        MaTram: String!
        MaTuyen: String
        DiaChi: String
        ThoiGianDung: String
        GiaTienVe: Float
        tuyen: Tuyen
    }

    type ChiTietXeOto {
        MaDetailCar: String!
        TenHangXe: String
        TenChuSoHuu: String
        SoHanhLyToiDa: Int
        BienSoXe: String
        CongTy: String
        SDT_TaiXe: String
        SoGheToiDa: Int
        SoTien_1km: Float
        MaSB: String
        sanBay: DanhSachSanBay
    }
    type DatXeOto {
        MaDX: String!
        MaDetailCar: String!
        MaCus: String!
        DiemDon: String!
        DiemTra: String!
        SoLuongHanhKhach: Int!
        NgayGioDat: String!
        SoKm: Float!
        ThanhTien: Float!
        Trangthai: Boolean!
        chiTietXeOto: ChiTietXeOto
        khachHang: KhachHang
    }

    type AppraiseCar {
        MaAC: Int!
        MaDX: String!
        MaCus: String!
        SoSao: Int!
        NoiDung: String!
        datXeOto: DatXeOto
        khachHang: KhachHang
    }

    type DoanhThuThangDatXe {
        MDTTX: Int!
        MaXe: String!
        Thang: String!
        TongSoKmChay: Float!
        ThanhTien: Float!
    }

    type DoanhThuThangBanVe {
        MDTTV: Int!
        MaPB: String!
        Thang: String!
        TongSoLuongVeBan: Int!
        ThanhTien: Float!
    }

    type PhieuDatTau {
        MaVeTau: String!
        MaCus: String!
        MaPT: String!
        SLVeNguoiLon: Int!
        SLVeTreEm: Int!
        DiemDon: String!
        DiemTra: String!
        NgayGioKhoiHanh: String!
        ThanhTien: Float!
        TrangThai: Boolean!
        khachHang: KhachHang
        phuongTien: PhuongTien
    }
    type AppraiseTrain {
        MaAT: Int!
        MaTau: String!
        MaCus: String!
        SoSao: Int!
        NoiDung: String!
        phieuDatTau: PhieuDatTau
        khachHang: KhachHang
    }

    type PhieuDatXeBus {
        MaVeBus: String!
        MaCus: String!
        MaPT: String!
        SLVe: Int!
        DiemDon: String!
        DiemTra: String!
        NgayGioKhoiHanh: String!
        ThanhTien: Float!
        TrangThai: Boolean!
        khachHang: KhachHang
        phuongTien: PhuongTien
    }

    type AppraiseBus {
        MaAB: Int!
        MaBus: String!
        MaCus: String!
        SoSao: Int!
        NoiDung: String!
        phieuDatXeBus: PhieuDatXeBus
        khachHang: KhachHang
    }

    type LichSuDatXeOto {
        MaLS: Int!
        MaDX: String!
        datXeOto: DatXeOto
    }

    type LichSuBus {
        MaLS: Int!
        MaVeBus: String!
        phieuDatXeBus: PhieuDatXeBus
    }

    type LichSuTau {
        MaLS: Int!
        MaVeTau: String!
        phieuDatTau: PhieuDatTau
    }
    type Query {
        getKhachHang: [KhachHang]
        getDanhSachSanBay: [DanhSachSanBay]
        getTuyen: [Tuyen]
        getPhuongTien: [PhuongTien]
        getTramDung: [TramDung]
        getChiTietXeOto: [ChiTietXeOto]
        getDatXeOto: [DatXeOto]
        getAppraiseCar: [AppraiseCar]
        getDoanhThuThangDatXe: [DoanhThuThangDatXe]
        getDoanhThuThangBanVe: [DoanhThuThangBanVe]
        getPhieuDatTau: [PhieuDatTau]
        getAppraiseTrain: [AppraiseTrain]
        getPhieuDatXeBus: [PhieuDatXeBus]
        getAppraiseBus: [AppraiseBus]
        getLichSuDatXeOto: [LichSuDatXeOto]
        getLichSuBus: [LichSuBus]
        getLichSuTau: [LichSuTau]
    }
    type Mutation {
        addKhachHang(MaCus: String!, TenKH: String, Sdt: String, Email: String, NgaySinh: String, Password: String): KhachHang
        addDanhSachSanBay(TenSanBay: String!, ThanhPho: String!): DanhSachSanBay
        addTuyen(DiemKhoiHanh: String!, DiemKetThuc: String!, ThoiGianKhoiHanh: String, ThoiGianKetThuc: String): Tuyen
        addPhuongTien(MaTuyen: String, MaLoai: Boolean, TenPhuongTien: String, SoGheToiDa: Int): PhuongTien
        addTramDung(MaTuyen: String, DiaChi: String, ThoiGianDung: String, GiaTienVe: Float): TramDung
        addChiTietXeOto(TenHangXe: String, TenChuSoHuu: String, SoHanhLyToiDa: Int, BienSoXe: String, CongTy: String, SDT_TaiXe: String, SoGheToiDa: Int, SoTien_1km: Float, MaSB: String): ChiTietXeOto
        addDatXeOto(DiemDon: String!, DiemTra: String!, SoLuongHanhKhach: Int!): DatXeOto  
        addAppraiseCar(MaDX: String!, MaCus: String!, SoSao: Int!, NoiDung: String!): AppraiseCar
        addPhieuDatTau(MaCus: String!, MaPT: String!, SLVeNguoiLon: Int!, SLVeTreEm: Int!, DiemDon: String!, DiemTra: String!, NgayGioKhoiHanh: String!): PhieuDatTau
        addAppraiseTrain(MaTau: String!, MaCus: String!, SoSao: Int!, NoiDung: String!): AppraiseTrain
        addPhieuDatXeBus(MaCus: String!, MaPT: String!, SLVe: Int!, DiemDon: String!, DiemTra: String!, NgayGioKhoiHanh: String!): PhieuDatXeBus
        addAppraiseBus(MaBus: String!, MaCus: String!, SoSao: Int!, NoiDung: String!): AppraiseBus 

        editDanhSachSanBay(MaSB: String!, ThanhPho: String!): DanhSachSanBay
    }
`;