import React, { Component } from 'react'

export default class ChildComponent extends Component {
    constructor(props) {
        super(props);
        console.log('constructor child')

    }
    static getDerivedStateFromProps( newProps,currentState) {
        console.log('getDerivedStateFromProps child');
        return currentState;
    }
    shouldComponentUpdate(newProps,newState){
        return false;
    }
    render() {
        console.log('renderChild')
        return (
            <div>

            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMount child')
    }
    componentDidUpdate(propCu,StateCu){
        console.log('componentDidUpdate child');
    }
}
