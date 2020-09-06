import React, { Component } from 'react'
import SanPhamKinh from './SanPhamKinh'

export default class DanhSachSanPham extends Component {
    renderSanPham = ()=>{
        return this.props.mangSanPham.map((sanPham,index)=>{
            return <div key={index} className="col-2">
                <SanPhamKinh sanPham={sanPham}/>
            </div>
        })
    }
    render() {
        return (
            <div className="row" style={{backgroundColor:'white',padding:50,marginTop:50}}>               
                    {this.renderSanPham()}             
            </div>
        )
    }
}
