
/*
import {useState} from 'react'

export function useCounter(){

    const [count, setCount] = useState(0)
    
    const increment=() =>{
        setCount(count + 1)
    }
    const decrement=() =>{
        setCount(count - 1)
    }
    const reset=() =>{
        setCount(0)
    }
    return [count, increment, decrement, reset]
}

*/

// using useReducer
import {useReducer} from 'react'

const initialState= 0
const reducer=(state, action)=>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default : 
            return state
    }
}

export function useCounter(){

    const [count, dispatch] = useReducer(reducer, initialState)
    return [count, dispatch]
}