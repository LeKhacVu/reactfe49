import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    //State la source tam hinh xe
    state = {
        imgCar: './img/black-car.jpg'

    }

    handleChangeColorCar = (imgColor) => {
        //Lay img duoc click gan vao state thong qua phuong thuc setState
        this.setState({
            imgCar: `./img/${imgColor}-car.jpg`
        })
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <img style={{ width: '100%' }} src={this.state.imgCar}></img>
                    </div>
                    <div className="col-4">
                        <div class="card text-left">
                            <div className="card-header">
                                Exterior Color
                            </div>
                            <div class="card-body">
                                <div onClick={() => {
                                    this.handleChangeColorCar('black')
                                }} className="row " style={{ border: '1px solid #EEE', cursor: 'pointer' }}>
                                    <div className="col-4">
                                        <img style={{ width: '100%' }} src="./img/icon-black.jpg"></img>
                                    </div>
                                    <div className="col-8">
                                        <h6>Crystal Black</h6>
                                        <p>Pear</p>
                                    </div>
                                </div>
                                <div onClick={() => {
                                    this.handleChangeColorCar('steel')
                                }} className="row" style={{ border: '1px solid #EEE', cursor: 'pointer' }}>
                                    <div className="col-4">
                                        <img style={{ width: '100%' }} src="./img/icon-steel.jpg"></img>
                                    </div>
                                    <div className="col-8">
                                        <h6>Modern Steel</h6>
                                        <p>Metallic</p>
                                    </div>
                                </div>
                                <div onClick={() => {
                                    this.handleChangeColorCar('silver')
                                }} className="row" style={{ border: '1px solid #EEE', cursor: 'pointer' }}>
                                    <div className="col-4">
                                        <img style={{ width: '100%' }} src="./img/icon-silver.jpg"></img>
                                    </div>
                                    <div className="col-8">
                                        <h6>Lunar Silver</h6>
                                        <p>Metallic</p>
                                    </div>
                                </div>
                                <div onClick={() => {
                                    this.handleChangeColorCar('red')
                                }} className="row" style={{ border: '1px solid #EEE', cursor: 'pointer' }}>
                                    <div className="col-4">
                                        <img style={{ width: '100%' }} src="./img/icon-red.jpg"></img>
                                    </div>
                                    <div className="col-8">
                                        <h6>Rallye Red</h6>
                                        <p>Metallic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> </div>
        )
    }
}
