import React, { Component } from 'react'

export default class SanPhamGH extends Component {
    render() {
        let {sanPham,themGioHang} = this.props;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={sanPham.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.gia.toLocaleString()}</p>
                        <button className="btn btn-success">Xem chi tiết</button>
                        <button className="btn btn-danger" onClick={()=>{
                            this.props.themGioHang(sanPham)
                        }}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>



        )
    }
}
