import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    productList = [
        { id: 1, name: 'Iphone X', price: 1000 },
        { id: 2, name: 'SamSung Note 10plus', price: 3000 },
        { id: 3, name: 'Htc m10', price: 2000 },
    ]
    //Cach 1:======================
    // renderProduct = () => {
    //     // let content = [];
    //     // for (let i = 0; i < this.productList.length; i++) {
    //     //     let product = this.productList[i];
    //     //     let cardProduct = <div key={i} className="col-4">
    //     //         <div class="card text-left">
    //     //             <img class="card-img-top" src="holder.js/100px180/" alt="" />
    //     //             <div class="card-body">
    //     //                 <h4 class="card-title">{product.name}</h4>
    //     //                 <p class="card-text">{product.price}</p>
    //     //             </div>
    //     //         </div>
    //     //     </div>;
    //     //     content.push(cardProduct);

    //     // }
    //     // console.log(content);
    //     return content;
    // }
    //===============================
    //CACH 2:======

    renderProduct=()=>{
        let arrJSXProduct = this.productList.map((product,index)=>{
            return <div className="col-4" key={index}>
               <div class="card text-left">
                 <img class="card-img-top" src="https://picsum.photos/200/200" alt=""/>
                 <div class="card-body">
                   <h4 class="card-title">{product.name}</h4>
                   <p class="card-text">{product.price}</p>
                 </div>
               </div> 
            </div>
        })
        return arrJSXProduct;
    }



    render() {
        return (
            <div>
                {this.renderProduct()}
            </div>
        )
    }
}
