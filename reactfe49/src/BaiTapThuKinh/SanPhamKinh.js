import React, { Component } from 'react'

export default class SanPhamKinh extends Component {
    render() {
        let {sanPham,doiMatKinh} = this.props;
        return (
            <div style={{border:'1px solid gray',cursor:'pointer'}}>   
                <img onClick={()=>{
                    this.props.doiMatKinh(sanPham)
                }} style={{width:140}} src={sanPham.hinhAnh}/>
            </div>
            
        )
    }
}
