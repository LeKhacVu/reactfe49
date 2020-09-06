import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux'

export default class DanhSachSanPhamRedux extends Component {

    renderSanPham =() =>{
        //Nhan props mangSanPham tu component cha render ra giao dien

        return this.props.mangSanPham.map ((sanPham,index) =>{
            return <div className="col-4" key={index}>
                    <SanPhamRedux sanPham={sanPham}/>
            </div>
        })
    }

    render() {
        return (
            <div>
                <h3>Bai Tap Gio Hang redux</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
