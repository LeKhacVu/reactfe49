import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import{connect} from 'react-redux'
import { chinhSuaSinhVienAction } from '../redux/actions/QuanLySinhVienAction'

class DanhSachSinhVien extends Component {
    render() {
        return (
            <div className="container-fluid">
                <FormSinhVien />
                <table className="table bg-dark
                text-white">
                    <thead>
                        <tr>
                            <th>Mã Sinh Viên</th>
                            <th>Tên Sinh Viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-dark">
                        {
                            this.props?.mangSinhVien.map((sinhVien, index) => {
                                return <tr key={index}>
                                    <td>{sinhVien.maSinhVien}</td>
                                    <td>{sinhVien.tenSinhVien}</td>
                                    <td>{sinhVien.soDienThoai}</td>
                                    <td>{sinhVien.email}</td>
                                    <td><button className="btn btn-danger">Xóa</button></td>
                                    <td><button className="btn btn-primary" onClick={()=>{
                                        //dispatch thong tin sinh vien cap nhat lai state.sinhVienSua tren redux
                                        let action= chinhSuaSinhVienAction(sinhVien);
                                        //Dua du lieu len reducer

                                        this.props.dispatch(action);

                                    }}>Chỉnh sửa</button></td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}

 const mapStateToProps = state => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}
export default connect(mapStateToProps)(DanhSachSinhVien)