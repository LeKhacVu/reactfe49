import React, { Component } from 'react'
import data from './DataFilms.json';

export default class BaiTapRenderPhim extends Component {


    renderFilms = () => {
        return data.map((film, index) => {
            return <div className="col-2 mt-5 " key={index} >
                <div class="card text-left " style={{border:'none'}}>
                    <img class="card-img-top" src={film.hinhAnh} style={{height:300}} alt={film.hinhAnh} />
                    <div class="card-body bg-dark text-white">
        <h4 class="card-title" style={{height:50}}>{film.tenPhim.length > 30 ? <span>{film.tenPhim.substr(0,20)} ...</span> : <span>{film.tenPhim}</span>}</h4>
        <p class="card-text" style={{height:75}}>{film.moTa.length > 75 ? <span>{film.moTa.substr(0,75)} ...</span>:film.moTa}</p>
                    </div>
                </div>
            </div>
        })
    }

    render() {
        return (
            <div style={{ backgroundImage: 'url("./img/background/avanger.jpg")', width: '100%', backgroundSize: 'cover' }}>

                <nav className="navbar navbar-expand-sm navbar-dark  " style={{ backgroundColor: 'rgba(122,212,98,.5' }}>
                    <a className="navbar-brand" href="#">CYBERLEARN-MOVIE</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                </nav>
                <div className="container-fluid" style={{ width: '100%', minHeight: '900px', backgroundColor: 'rgba(0,0,0,.1)' }}>
                    <div className="row">
                        {this.renderFilms()}
                    </div>

                </div>
            </div>
        )
    }
}
