import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Dice.css'
class Dice extends React.Component {
    render() {
        let cls = `fas fa-dice-${this.props.face} dice`;
        return (
            <div>
                <i className={cls}/>
            </div>
        )
    }
}

export default Dice;