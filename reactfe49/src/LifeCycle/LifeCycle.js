import React, { Component } from 'react'

import ChildComponent from './ChildComponent'
import Header from './Header';

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            sinhVien: {
                id: 1,
                name: 'Nguyen Van A'
            }
        }

    }
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');


        return currentState;
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    render() {
        console.log('render compponent cha')
        return (
            <div>
                <h1>{this.state.sinhVien.name}</h1>
                <button onClick={() => {
                    let sinhVien = { ...this.state.sinhVien };
                    sinhVien.name = 'Nguyen Van B';
                    this.setState({
                        sinhVien: sinhVien
                    })
                }}>+</button>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>setNumber</button>
                {this.state.render < 3 ? <Header sinhVien={this.state.sinhVien} /> : ''}
                <ChildComponent />
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount')
    }
    componentDidUpdate(propCu, StateCu) {
        console.log('componentDidUpdate');
    }
}
