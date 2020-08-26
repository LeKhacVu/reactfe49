import React, { Component } from 'react'

export default class ThongTinSinhVien extends Component {

    //this.props: Là thuộc tính có sẵn của component , lưu ý : dùng để nhận giá trị từ component cha truyền vào, và không thay đổi được giá trị đó 
    render() {
        return (
            <div>
                {/* <p>Ho Ten:{this.props.hoTen}</p>
                <p>Lop:{this.props.lop}</p> */}
                {/* <p>Ho Ten:{this.props.sinhVien.hoTen}</p>
                <p>Lop:{this.props.sinhVien.lop}</p> */}
                <div className="card text-left">
                    <img className="card-img-top" src={this.props.sinhVien.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.sinhVien.hoTen}</h4>
                        <p className="card-text">{this.props.sinhVien.lop}</p>
                    </div>
                </div>


            </div>
        )
    }
}
