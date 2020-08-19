import React, { Component } from 'react'

export default class HandleEvent extends Component {




    handleClick = () => {
        alert('hello');
    }

    showInfo = (name) => {
        alert(`name ${name}`)
    }


    render() {



        return (
            <div className="container">
                {/* Cach 1 truyen Callback function */}
                <button onClick={this.handleClick}>Click me</button>
                <br /><br />
                {/* Cach 2 dung arrow function */}
                <button onClick={() => {
                    alert('123456789');
                    //Click vao goi nhieu ham thuc hien ...........
                    this.handleClick();
                }}>show Message</button>

                <button onClick={() => {
                    this.showInfo('ham co tham so');
                }}>show Info</button>
            </div>
        )
    }
}
