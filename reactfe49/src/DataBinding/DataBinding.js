import React, { Component } from 'react'

export default class DataBinding extends Component {
    //Thuoc tinh
    product ={
        id:1,
        name:'iphoneX',
        price:1000
    }

    //Phuong thuc
    renderCard = ()=>{
        return <div className="card text-left">
  <img className="card-img-top" src="https://picsum.photos/180/100" alt />
  <div className="card-body">
    <h4 className="card-title">{this.product.name}</h4>
    <p className="card-text">{this.product.price}</p>
  </div>
</div>

    }

    render() {
        //Binding data
        let title = 'hello FrontEnd 49';
        let photo = 'http://picsum.photos/200/200';
        //Binding function

        let renderImg = () =>{

            return <img src="https://picsum.photos/100/100"/>
        }





        return (
            <div>
                <h1 id="title" >{title}</h1>
                <img src={photo} ></img>
                <img src="./img/sp_iphoneX.png"/>
                <div>
                    {renderImg()}
                </div>
                <div>
                    {this.renderCard()}
                </div>
            </div>
        )
    }
}
