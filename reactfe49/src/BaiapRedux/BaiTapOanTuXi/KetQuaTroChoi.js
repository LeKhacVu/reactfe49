import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="container-fluid mt-2" >
                <div className="display-3 text-center" style={{color:'orange'}}>I'm iron man,i love you 3000</div>
                <div className="display-3 text-center text-success">Số bàn thắng:<span className="text-primary">0</span></div>
                <div className="display-3 text-center text-success">Số bàn chơi:<span className="text-danger">0</span></div>
                <div className=" text-center mt-5">
                    <button className="btn btn-success">PLAY GAME</button>
                </div>
            </div>
        )
    }
}
