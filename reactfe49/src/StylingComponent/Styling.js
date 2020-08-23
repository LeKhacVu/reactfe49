import React, { Component } from 'react'
import Child from './Child'

export default class Styling extends Component {
    render() {
        return (
            <div>
                <h1 className="title">hello</h1>
                <Child/>
            </div>
        )
    }
}
