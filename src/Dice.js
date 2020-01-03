import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Dice.css'
class Dice extends React.Component {
    render() {
        // let cls = `dice fas fa-dice-${this.props.face} `;
        return (
            <div>
                {/* <i className={cls}  /> */}
                <i className = {`dice fas fa-dice-${this.props.face} ${this.props.rolling? 'shaking' : ''}`} />
            </div>
        )
    }
}

export default Dice;