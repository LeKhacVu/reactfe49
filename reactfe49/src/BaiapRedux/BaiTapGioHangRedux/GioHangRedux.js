import React, { Component } from 'react'
import { connect } from 'react-redux'

class GioHangRedux extends Component {
    renderGioHang = () => {
        return this.props.gioHang.map((spGioHang, index) => {
            return <tr key={index}>
                <td>{spGioHang.maSP}</td>
                <td><img src={spGioHang.hinhAnh} style={{width:50}} /></td>
                <td>{spGioHang.tenSP}</td>
                <td>{spGioHang.gia}</td>
                <td>
                    <button onClick={()=>{
                        this.props.tangGiamSoLuong(spGioHang.maSP,true)
                    }}>+</button>
                    {spGioHang.soLuong}
                    <button onClick={()=>{
                        this.props.tangGiamSoLuong(spGioHang.maSP,false)
                    }}>-</button></td>
                <td>{spGioHang.gia * spGioHang.soLuong}</td>
                <td><button className="btn btn-danger" onClick={()=>{
                    this.props.xoaGioHang(spGioHang.maSP)
                }}>Xoa</button></td>
            </tr>
        });
    }
    render() {
        return (
            <div>
                <h3>Gio Hang</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                Tổng tiền
                            </td>
                            <td>
                                {
                                                        this.props.gioHang.reduce((tongTien,spGH,index)=>{
                                                            return tongTien += spGH.gia * spGH.soLuong
                                                        },0).toLocaleString()
                                                    }
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

//Ham tao ra 1 props la function dua du lieu len redux store (reducer)
const mapDispatchToProps = (dispatch) =>{
    return {
        xoaGioHang:(maSP) =>{
            const action ={
                type:'XOA_GIO_HANG',
                maSP:maSP
            }
            //Gui du lieu len reducer
            dispatch(action)
        },
        tangGiamSoLuong: (maSP,tangGiam) =>{
            //Tao ra action dua len reducer
            dispatch({
                type:' TANG_GIAM_SO_LUONG',
                maSP,
                tangGiam
            })
        }
    }
}

//Phuong thuc bien doi stateRedux => props cua component
const mapStateToProps = (state) => {//state la rootReducer
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux)