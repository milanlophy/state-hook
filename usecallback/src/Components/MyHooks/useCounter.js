
// custom hook: counter using useState (my idea)

/*

import {useState} from 'react'

export function useCounter(){

    const [count, setCount] = useState(0)
    
    const increment=() =>{
        setCount(prevCount=> prevCount + 1)
    }
    const decrement=() =>{
        setCount(prevCount=> prevCount - 1)
    }
    const reset=() =>{
        setCount(0)
    }
    return [count, increment, decrement, reset]
}

*/

// using useState general version (in video)



import {useState} from 'react'

export function useCounter(initialCount = 0,value){
    const [count, setCount] = useState(initialCount)

    const increment= ()=>{
        setCount(prevCount => prevCount + value)
    }
    const decrement= ()=>{
        setCount(prevCount => prevCount - value)
    }
    const reset= ()=> {
        setCount(initialCount)
    }
    return [count, increment, decrement, reset]
}

 

// custom hook: counter using useReducer

/*
import {useReducer} from 'react'

const initialState = 0
const reducer=(state, action)=>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export function useCounter(){
    const [count, dispatch] = useReducer(reducer,initialState)
    return [count,dispatch]
}
    
*/
