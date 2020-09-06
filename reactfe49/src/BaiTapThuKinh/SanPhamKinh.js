import React, { Component } from 'react'

export default class SanPhamKinh extends Component {
    render() {
        let {sanPham} = this.props;
        return (
            <div style={{border:'1px solid gray',cursor:'pointer'}}>   
                <img style={{width:140}} src={sanPham.hinhAnh}/>
            </div>
            
        )
    }
}
