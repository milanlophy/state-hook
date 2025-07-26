// Repeating Counter Logic

/*
import React, {useState} from 'react'

export function CounterTwo(){
    const [count, setCount] = useState(0)

    const increment=() =>{
        setCount(count + 1) //  using fnal form is preferred always so that updated value is considered to perform operation.
    }
    const decrement=() =>{
        setCount(prevCount => prevCount - 1)
    }
    const reset=() =>{
        setCount(0)
    }

    return(
        
        <div>
            <div><h2>Count : {count} </h2></div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
    */    

// Counter logic using custom hooks (useState) [my idea]

/*

import { useCounter } from './MyHooks/useCounter'

export function CounterTwo(){

    const [count,increment,decrement,reset] = useCounter()

    return(
        <div>
            <div><h2>Count : {count}</h2></div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
    */

// useState general version (in video)


import { useCounter } from "./MyHooks/useCounter";

export function CounterTwo(){
    const [count, increment, decrement, reset] = useCounter(0, 10)
    return(
        <div>
            <div><h2>Count {count}</h2></div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}



// counter using useReducer

/*
import { useCounter } from "./MyHooks/useCounter";

export function CounterTwo(){
    const [count, dispatch] = useCounter()
    return(
        <div>
            <div><h2>Count {count}</h2></div>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
}
    */
