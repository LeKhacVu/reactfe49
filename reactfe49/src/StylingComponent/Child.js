import React, { Component } from 'react';
import './Styling.scss';
import style from './Style.module.scss'
export default class Child extends Component {
    render() {
        return (
            <div>
            <div className={style.content__scss}>
                <p className={`${style.text}`}>2222222222</p>
                child Component
            </div>
            <p className={`${style.text}`}>2222222222</p>
            <p style={{border:'5px solid red',background:'blue',fontSize:'15px'}} >
                Hello cybersoft fe49
            </p>
            </div>
        )
    }
}
