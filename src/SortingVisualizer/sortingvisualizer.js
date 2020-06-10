import React, { Component } from 'react'
import './sortingvisualizer.css'

export default class sortingvisualizer extends Component {
    constructor(props){
        super(props);

        this.state = {
            array: []
        }
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i = 0; i < 310; i++){
            array.push(randomInt(5,680))
        }
        this.setState({array});
    }
    
    render() {
        const {array} = this.state
        return (
            <div className="array-container">
                {array.map((value, id) => (
                    <div className="array-bar" key={id} style={{height: `${value}px`}}>
                        
                    </div>
                ))}
            </div>
        )
    }
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}