import React, { Component } from 'react'
import Dice from './Dice';
import './RollDice.css';


class RollDice extends Component {

    static defaultProps = {
        sides: [ "one", "two", "three", "four", "five", "six" ]
    };

    constructor(props){
        super(props)
        this.state = { dice1: "one", dice2: "two", dice3: "five" }
        this.roll = this.roll.bind(this);
    }

    roll() {
        // dynamically select numbers for each dice. 
        const newDice1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];

        const newDice2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];

        const newDice3 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];

        // set state with new rolls
        this.setState({dice1:newDice1, dice2:newDice2, dice3:newDice3});
    }
    render() {
        return (
            <div className='RollDice'>
                <div className="dice-container">
                <Dice face={this.state.dice1}/>
                <Dice face={this.state.dice2}/>
                <Dice face={this.state.dice3}/> 
                </div>
                <button onClick={this.roll}>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;