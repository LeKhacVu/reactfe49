//File nay quan ly state theo nghiep vu

const stateDefault = {
    gioHang: [
        { maSP: 1, tenSP: 'Iphone', hinhAnh: './img/sp_iphoneX.png', gia: 1000, soLuong: 1 }
    ]
}

export const GioHangReducer = (state = stateDefault, action) => {//Ham nay giong ham setState

    switch (action.type) {
        case 'THEM_GIO_HANG': {
            //Xử lý trả về state mới render lại tất cả component theo dõi state này 
            //Tạo ra sp giỏ hàng
            let spGioHang = {
                maSP: action.sanPham.maSP,
                tenSP: action.sanPham.tenSP,
                hinhAnh: action.sanPham.hinhAnh,
                soLuong: 1,
                gia: action.sanPham.gia,
            };
            //Xu ly them gio hang
            const gioHangUpdate = [...state.gioHang];
            const index = gioHangUpdate.findIndex(spGH => spGH.maSP === spGioHang.maSP);
            if (index !== -1) {
                gioHangUpdate[index].soLuong += 1;
            } else {
                gioHangUpdate.push(spGioHang)
            };
            //Cap nhat lai state
            state.gioHang = gioHangUpdate;
            //Tra ve state
            return { ...state }
        }
        case 'XOA_GIO_HANG': {
            //Sao chep gia tri gio hang ra 1 bien 
            const gioHangUpdate = [...state.gioHang];
            //xu ly xoa gio hang tren bien vua tao
            const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSP);
            if (index !== -1) {
                gioHangUpdate.splice(index, 1);
            }
            //Cap nhat lai state gio hang
            state.gioHang = gioHangUpdate;
            return { ...state }
        }
        case 'TANG_GIAM_SO_LUONG': {
            const gioHangUpdate = [...state.gioHang];
            const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSP);

            if (index !== -1) {
                if (action.tangGiam) { //Tang Giam = true => tang so luong

                    gioHangUpdate[index].soLuong += 1;

                } else {
                    // Neu san pham giam thi xem soLuong > 1 moi cho giam
                    if (gioHangUpdate[index].soLuong > 1) {
                        gioHangUpdate[index].soLuong -= 1

                    } else {

                        alert('So luong khong duoc nho hon 1')
                    }
                }
            };
            state.gioHang = gioHangUpdate;
            return { ...state }
        }
        default: return { ...state }
    }


}