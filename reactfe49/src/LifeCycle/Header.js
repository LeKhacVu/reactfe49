import React, { Component, PureComponent } from 'react'

export default class Header extends PureComponent {
    render() {
        console.log('Header render')
        return (

            <div>
                <h1>Header render sinh vien:{this.props.sinhVien.name}</h1>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled link</a>
                    </li>
                </ul>
            </div>



        )
       
    }
    componentWillUnmount(){
        //Chạy trước khi component mất khỏi giao diện
        console.log('componentWillUnmount header')
    }
}
