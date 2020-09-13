import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
    render() {
        const { banChon, soBanThang, tongSoBanChoi } = this.props;


        return (

            <div className="container-fluid">
                <div className="display-4 text-center">
                    Tổng điểm: <span className="text-danger">
                        {this.props.mangXucXac.reduce((tongDiem, xxnn, index) => {
                            return tongDiem += xxnn.ma;
                        }, 0)}
                    </span>
                </div>
                <div className="display-4 text-center">BẠN CHỌN:<span className="text-danger">{banChon ? 'TÀI' : 'XỈU'}</span></div>
                <div className="display-4 text-center">SỐ BÀN THẮNG:<span className="text-success">{soBanThang}</span></div>
                <div className="display-4 text-center">TỔNG SỐ BÀN CHƠI:<span className="text-warning">{tongSoBanChoi}</span></div>
                <div className=" text-center mt-5"><button onClick={() => {
                    this.props.playGame()
                }} className="btn btn-success">PLAY GAME</button> </div>
            </div>

        )
    }
}
// Ham lay gia tri tu state redux ve bien doi thanh props cua component
const mapStateToProps = (state) => { // state la gia tri tu rootreducer truyen vao component
    return {
        banChon: state.gameXucXacReducer.banChon,
        soBanThang: state.gameXucXacReducer.soBanThang,
        tongSoBanChoi: state.gameXucXacReducer.tongSoBanChoi,

    }
}
const mapDispacthToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch({ type: 'PLAY_GAME' })

        }
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(KetQuaTroChoi)