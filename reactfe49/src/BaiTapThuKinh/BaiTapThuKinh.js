import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham';

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
    render() {
        return (
            <div style={{ background: 'url("./img/background.jpg")', width: '100%', height: 850, backgroundSize: 'cover' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.2)', height: 850 }}>
                    <div style={{ width: '100%', backgroundColor: 'rgba(0,0,0,.5)', height: 100 }}>
                        <h2 style={{ color: 'white', paddingTop: 25, margin: 0 }}>TRY GLASSES APP ONLINE</h2>
                    </div>
                    <div className="container">
                        <div style={{ paddingTop: 50, display: 'flex', justifyContent: 'center' }}>
                            <div style={{ background: 'url("./img/model.jpg")', width: 300, height: 350, backgroundSize: 'cover', position: 'relative' }}>
                                <img style={{ width: 140, position: 'absolute', top: 95, left: 82 }} src="./img/v7.png" className="card-img-top" />
                                <div className="card-body" style={{ textAlign: "left", background: 'rgba(255,152,0,.5)', position: 'absolute', bottom: 0 }}>
                                    <h5 className="card-title" style={{ margin: 0, fontSize: 20, color: 'blue' }}>Card title</h5>
                                    <p className="card-text" style={{ marginTop: 10, color: 'white' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <DanhSachSanPham mangSanPham={this.mangSanPham} />
                    </div>
                </div>
            </div>
        )
    }
}
