import { CAP_NHAT_SINH_VIEN, CHINH_SUA_SINH_VIEN, QUAN_LY_SINH_VIEN } from "./types/QuanLySinhVienTypes"

const initialState = {
    mangSinhVien: [
        {
            maSinhVien: 1, tenSinhVien: 'Nguyen Van A', soDienThoai: 1234567, email: 'nguyenvana@gmail.com'
        },
        {
            maSinhVien: 2, tenSinhVien: 'Nguyen Van B', soDienThoai: 1234567, email: 'nguyenvanb@gmail.com'
        }

    ],
    sinhVienSua:{
        //state thong tin sinh vien tren o input
        maSinhVien:'',
        tenSinhVien:'',
        soDienThoai:'',
        email:''
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN': {
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
            return { ...state }
        }
        case CHINH_SUA_SINH_VIEN :{
            //Thay đổi state.sinhVienSua = sinhVien khi người dùng click chỉnh sửa
            state.sinhVienSua=action.sinhVien;
            return{...state};
        }
        case CAP_NHAT_SINH_VIEN:{
            let mangSinhVienCapNhat=[...state.mangSinhVien];
            let index = state.mangSinhVien.findIndex(sv=>sv.maSinhVien === action.sinhVienCapNhat.maSinhVien);
            if(index!== -1){
                //Gán lại sinhVien trong mảng có mã = sinh viên cập nhật
                mangSinhVienCapNhat[index] = {...action.sinhVienCapNhat};

            }
            //Cập nhật lại state.mangSinhVien
            state.mangSinhVien = mangSinhVienCapNhat;
            //Trả về state mới
            return {...state}
        }
        
        default:
            return state
    }
}
