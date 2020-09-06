import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham';
import HinhThuKinh from './HinhThuKinh';

export default class BaiTapThuKinh extends Component {

    mangSanPham = [

        { id: 1, price: 30, name: 'GUCCI G8850U', hinhAnh: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', hinhAnh: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 3, price: 30, name: 'DIOR D6700HQ', hinhAnh: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 4, price: 30, name: 'DIOR D6005U', hinhAnh: './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 5, price: 30, name: 'PRADA P8750', hinhAnh: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 6, price: 30, name: 'PRADA P9700', hinhAnh: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 7, price: 30, name: 'FENDI F8750', hinhAnh: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 8, price: 30, name: 'FENDI F8500', hinhAnh: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 9, price: 30, name: 'FENDI F4300', hinhAnh: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    ];
    state = {
        matKinh: {
            id: 1, price: 30, name: 'GUCCI G8850U', hinhAnh: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        }

    }
    doiMatKinh =(spClick)=>{
        this.setState({
            matKinh:spClick
        })
    }
    render() {
        return (
            <div style={{ background: 'url("./img/background.jpg")', width: '100%', height: 850, backgroundSize: 'cover' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.2)', height: 850 }}>
                    <div style={{ width: '100%', backgroundColor: 'rgba(0,0,0,.5)', height: 100 }}>
                        <h2 style={{ color: 'white', paddingTop: 25, margin: 0 }}>TRY GLASSES APP ONLINE</h2>
                    </div>
                    <div className="container">
                        <HinhThuKinh matKinh={this.state.matKinh} />
                        <DanhSachSanPham mangSanPham={this.mangSanPham} doiMatKinh={this.doiMatKinh}/>
                    </div>
                </div>
            </div>
        )
    }
}
