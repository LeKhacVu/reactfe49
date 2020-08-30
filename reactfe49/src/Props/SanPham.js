import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let sanPham = this.props.sp;
        return (
            <div className="card text-left">
                <img className="card-img-top" style={{ height: 250 }} src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.gia}</p>
                    <button onClick={() => {
                        this.props.xemChiTiet(sanPham)
                    }}
                        className="btn btn-success">Xem chi tiet</button>
                </div>
            </div>

        )
    }
}
