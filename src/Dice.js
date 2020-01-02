import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Dice.css'
class Dice extends React.Component {
    render() {
        return (
            <div>
                <h1>Dice Game</h1>
                <i className="fas fa-dice-one face"/>
            </div>
        
        )
    }

}

export default Dice;