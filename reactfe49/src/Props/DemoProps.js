import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class DemoProps extends Component {

    sinhVien = {
        hoTen:'Nguyen Van A',
        hinhAnh:`https://api.adorable.io/avatars/285/vu`,
        lop:'FE 49'
    }


    render() {
        return (
            <div className="container">
                {/* <ThongTinSinhVien hoTen="Nguyen Van A" lop="FrontEnd49"/>
                <ThongTinSinhVien hoTen="Nguyen Van B" lop="FrontEnd49"/>
                <ThongTinSinhVien hoTen="Nguyen Van C" lop="FrontEnd49"/> */}
                <ThongTinSinhVien sinhVien={this.sinhVien}/>
            </div>
        )
    }
}
