import React, { Component } from 'react'

export default class HinhThuKinh extends Component {
    render() {
        let matKinh = this.props.matKinh
        return (
            <div>
                <div  style={{ paddingTop: 50, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ background: 'url("./img/model.jpg")', width: 300, height: 350, backgroundSize: 'cover', position: 'relative' }}>
                        <img style={{ width: 140, position: 'absolute', top: 95, left: 82 }} src={matKinh.hinhAnh} className="card-img-top" />
                        <div className="card-body" style={{ textAlign: "left", background: 'rgba(255,152,0,.5)', position: 'absolute', bottom: 0 }}>
                            <h5 className="card-title" style={{ margin: 0, fontSize: 20, color: 'blue' }}>{matKinh.name}</h5>
                            <p className="card-text" style={{ marginTop: 10, color: 'white' }}>{matKinh.desc}</p>
                        </div>
                    </div>
                    <div>
                        <img src="./img/model.jpg" style={{width: 300, height: 350,marginLeft:50}}/>
                    </div>
                </div>
            </div>
        )
    }
}
