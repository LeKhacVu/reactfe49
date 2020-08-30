import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

export default class BaiTapGioHang extends Component {
    //State gio hang
    state = {
        gioHang: [
            { maSP: 1, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 1000, soLuong: 1 }
        ]
    }

    mangSanPham = [

        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "gia": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "gia": 27000000, "hinhAnh": "./img/applephone.jpg" }

    ]

    // Phương thức thêm giỏ hàng 
    themGioHang = (spClick) => {

        //Tao ra 1 san pham gio hang tu san pham duoc click
        let spGioHang = {
            maSP: spClick.maSP,
            tenSP: spClick.tenSP,
            hinhAnh: spClick.hinhAnh,
            gia: spClick.gia,
            soLuong: 1
        }


        //setState gio hang tai day
        let gioHangUpdate = this.state.gioHang;
        // gioHangUpdate.push(spGioHang);

        let index = gioHangUpdate.findIndex(spGH => spGH.maSP === spGioHang.maSP);

        if (index != -1) { //Tim thay tai vi tri index => tang so luong
            gioHangUpdate[index].soLuong += 1;
        } else { // Khong tim thay trong gio hang =>them san pham vao gio hang
            gioHangUpdate.push(spGioHang);
        }
        //setState gio hang = gio hang sau khi xu ly
        this.setState({
            gioHang: gioHangUpdate
        })

        // this.setState({
        //     gioHang:gioHangUpdate
        // })
    }

    xoaGioHang = (maSP) =>{
        // let gioHangUpdate = this.statelgioHang;

        // //Tim xem trong gio hang co ma sp duoc click (nut xoa') khong?
        // let index = gioHangUpdate.findIndex(spGH => spGH.maSP === maSP);
        // if (index !== -1){
        //     gioHangUpdate.splice(index,1)
        // }
        // Sau khi xoa sp gio hang thi cap nhat lai state
        this.setState({
            // gioHang:gioHangUpdate
            gioHang:this.state.gioHang.filter(sp=>sp.maSP !== maSP)
        })
    }

    tangGiamSoLuong =(maSP,tangGiam) => { //tangGiam = true => tang , tangGiam = false => giam
        let gioHangUpdate = this.state.gioHang;

        let index  = gioHangUpdate.findIndex(spGioHang => spGioHang.maSP === maSP);
        if(index !== -1){
            if(tangGiam){ //Tang Giam = true => tang so luong

                gioHangUpdate[index].soLuong +=1;

            }else{
                // Neu san pham giam thi xem soLuong > 1 moi cho giam
                if(gioHangUpdate[index].soLuong > 1){
                    gioHangUpdate[index].soLuong -= 1

                }else{
                    alert('So luong toi thieu la 1')
                }
            }
        }
        this.setState({
            gioHang:gioHangUpdate
        })

    }

    tinhSoLuongGH = () => {
        return this.state.gioHang.reduce((soLuong, spGH, index) => {
            return soLuong += spGH.soLuong;
        }, 0)
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Bai Tap Gio Hang</h3>
                <div className="gioHang">
                    <div className="text-right text-danger">
                        <span data-toggle="modal" data-target="#modelId" style={{ cursor: 'pointer' }}>Giỏ hàng ({this.tinhSoLuongGH()})</span>
                    </div>
                </div>

                <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}/>
                <DanhSachSanPham mangSanPham={this.mangSanPham} themGioHang={this.themGioHang} />
            </div>
        )
    }
}
