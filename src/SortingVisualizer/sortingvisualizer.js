import React, { Component } from 'react'
import './sortingvisualizer.css'
import BubbleSort from '../SortingAlgorithms/BubbleSort'
import SelectionSort from '../SortingAlgorithms/SelectionSort'

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
        for(let i = 0; i < 330; i++){
            array.push(randomInt(5,680))
        }
        this.setState({array});
    }
    
    bubbleSort(){
        const javaScriptSortedArray = this.state.array
        .slice()
        .sort((a,b) => a - b);
        const sortedArray = BubbleSort(this.state.array);
        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray))
    }

    
    selectionSort(){
        const javaScriptSortedArray = this.state.array
        .slice()
        .sort((a,b) => a - b);
        const sortedArray = SelectionSort(this.state.array);
        console.log(sortedArray)
        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray))
    }

    mergeSort(){

    }

    heapSort(){

    }

    render() {
        const {array} = this.state
        return (
            <div className="array-container">
                {array.map((value, id) => (
                    <div className="array-bar" key={id} style={{height: `${value}px`}}>
                        
                    </div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New array</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.selectionSort()}>Selection Sort</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
            </div>
        )
    }
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo){
    if(arrayOne.length !== arrayTwo.length) return false;
    for(let i = 0; i < arrayOne.length; i++){
        if(arrayOne[i] !== arrayTwo[i]) return false
    }
    return true
}