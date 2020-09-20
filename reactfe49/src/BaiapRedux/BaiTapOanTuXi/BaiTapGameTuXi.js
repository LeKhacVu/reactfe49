import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import OanXuXi from './OanXuXi'
import Player from './Player'
import PlayerComputer from './PlayerComputer'
// import './styleGame/buble.css'
import './styleGame/styleGame.css'


export default class BaiTapGameTuXi extends Component {
    render() {
        return (
            <div className="gameXuXi">
                <div className="row"> 
                    <div className="col-3 mt-4">
                        <Player/>
                    </div>
                    <div className="col-6">
                        <KetQuaTroChoi/>
                    </div>
                    <div className="col-3 mt-4">
                        <PlayerComputer/>
                    </div>
                  
                </div>
            </div>
        )
    }
}
