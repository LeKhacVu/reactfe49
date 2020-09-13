import React, { Component } from 'react'
import { connect } from 'react-redux'
 class XucXac extends Component {
    renderXucXac =()=>{
        const {mangXucXac} =this.props;
        return mangXucXac.map((xucXac,index)=>{
            return <img key={index} className="ml-5" style={{ width: 50 }} src={xucXac.hinhAnh} />
        })
    }
    render() {       
        let {banChon} = this.props;
        return (
            <div className="container-fluid">
                <div className="row mt-5 ">
                    <div className="col-3">
                        <button onClick={()=>{
                            this.props.datCuocTaiXiu(true)
                        }}  style={{ fontSize: 50, marginLeft: 200,border:banChon?'5px solid green' : 'none' }} className="btn btn-primary display-4 text-white p-5 ">TÀI</button>
                    </div>
                    <div className="col-6 text-center">
                        {this.renderXucXac()}
                        {/* <img className="ml-5" style={{ width: 50 }} src="./img/Game_Xuc_Xac/1.png" />
                        <img className="ml-5" style={{ width: 50 }} src="./img/Game_Xuc_Xac/2.png" />
                        <img className="ml-5" style={{ width: 50 }} src="./img/Game_Xuc_Xac/3.png" /> */}
                    </div>
                    <div className="col-3 ">
                        <button onClick={()=>{
                            this.props.datCuocTaiXiu(false)
                        }} style={{ fontSize: 50,border: !banChon? '5px solid green':'none'}} className="btn btn-primary display-4 text-white p-5">XỈU</button>
                    </div>
                </div>
            </div >
        )
    }
}

//Lay du lieu tu redux ve
const mapStateToProps = (state)=>{
    return{
        mangXucXac:state.gameXucXacReducer.mangXucXac,
        banChon:state.gameXucXacReducer.banChon
    }
}

//Tao ra props dua du lieu len redux store
const mapDispatchToProps = (dispatch) =>{
    return{
        datCuocTaiXiu: (ketQuaChon) =>{
            const action ={
                type:'DAT_CUOC_TAI_XIU',
                ketQuaChon

            }
            //Dua action len tat ca reducer
            dispatch(action);
        }

    }
}

export default connect (mapStateToProps,mapDispatchToProps)(XucXac)