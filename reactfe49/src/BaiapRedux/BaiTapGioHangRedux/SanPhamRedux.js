import React, { Component } from 'react'

//Ket noi redux
import { connect } from 'react-redux'
import BaiTapGioHangRedux from './BaiTapGioHangRedux';

class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div>
                <div class="card text-left">
                    <img class="card-img-top" src={sanPham.hinhAnh} />
                    <div class="card-body">
                        <h4 class="card-title">{sanPham.tenSP}</h4>
                        <p class="card-text">{sanPham.gia.toLocaleString()}</p>
                        <button className="btn btn-success" onClick={()=>{
                            this.props.themGioHang(sanPham);
                        }}>Them San Pham</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {//dispatch la ham giong ham setState
    return{
        themGioHang:(sanPhamClick)=>{
            console.log(sanPhamClick);
            const action ={
                type:'THEM_GIO_HANG',// Day la thuoc tinh bat buoc
                sanPham:sanPhamClick//Noi dung dua len store cua redux
            }
            //Dung ham dispatch gui action len redux
            dispatch(action);

        }
    }
}

export default connect(null, mapDispatchToProps)(SanPhamRedux);