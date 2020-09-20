import React, { Component } from 'react'
import OanXuXi from './OanXuXi'
import {connect} from 'react-redux'
 class Player extends Component {
    render() {

        return (
            <div>
                <div style={{ width: 120, height: 120, background: 'white', marginLeft: 190, border: '5px solid #45D994' }}>
                    <img src="./img/game_oan_xu_xi/keo.png" style={{ width: 50, marginTop: 30 }} />
                </div>
                <div className="speech-bubble" ></div>
                <img src="./img/game_oan_xu_xi/player.png" style={{ width: 250, height: 250, marginLeft: 100 }} />
                <div className="container-fluid">
                    {this.props.mangDatCuoc.map((item,index)=>{
                        return <img className="ml-5"  key={index} src={item.hinhAnh} alt={item.hinhAnh}  style={{ width: 50, cursor: 'pointer', background: 'white' }} />
                    })}
                    {/* <img className="ml-5" src="./img/game_oan_xu_xi/keo.png" style={{ width: 50, cursor: 'pointer', background: 'white' }} />
                    <img className="ml-5" src="./img/game_oan_xu_xi/bua.png" style={{ width: 50, cursor: 'pointer', background: 'white' }} />
                    <img className="ml-5" src="./img/game_oan_xu_xi/bao.png" style={{ width: 50, cursor: 'pointer', background: 'white' }} /> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        mangDatCuoc:state.BaiTapOanTuXiReducer.mangDatCuoc

    }
}
export default connect (mapStateToProps)(Player);