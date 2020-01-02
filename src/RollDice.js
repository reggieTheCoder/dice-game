import React, { Component } from 'react'
import Dice from './Dice';


class RollDice extends Component {
    constructor(props){
        super(props)
        this.state = {dice1: "one", dice2: "two", dice3: "five" }
    }
    render() {
        return (
            <div>
                <Dice face={this.state.dice1}/>
                <Dice face={this.state.dice2}/>
                <Dice face={this.state.dice3}/>
                
            </div>
        )
    }
}

export default RollDice;