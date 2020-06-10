import React from 'react'

export default function SelectionSort(originalArray){
    const array = [...originalArray]
    let len = array.length;
    let i,j;
    for(i = 0; i < len; i++){
        let min = i
        for(j = i + 1; j < len; j++){
            if(array[min] > array[j]){
                min = j;
            }
        }
        if(i !== min)
        {
            let temp = array[i]
            array[i] = array[min]
            array[min] = temp
        }
    }
    return array;
}