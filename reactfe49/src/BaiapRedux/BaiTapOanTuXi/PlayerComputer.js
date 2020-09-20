import React, { Component } from 'react'

export default class PlayerComputer extends Component {
    render() {
        return (
            <div>
                <div style={{ width: 120, height: 120, background: 'white', border: '5px solid #45D994', marginLeft: 90 }}>
                <img src="./img/game_oan_xu_xi/keo.png" style={{width:50,transform:'rotate(125deg)',marginTop:30}}/>
                </div>
                        <div className="speech-bubble-right" ></div>
                        <img src="./img/game_oan_xu_xi/playerComputer.png" style={{ width: 250, height: 250, marginRight: 100 }} />
            </div>
        )
    }
}
