        // Repeating Counter Logic

/*

import React, {useState} from 'react'

export function CounterOne(){
    const [count, setCount] = useState(0)

    const increment=() =>{
        setCount(prevCount => prevCount + 1)
    }
    const decrement=() =>{
        setCount(prevCount => prevCount - 1)
    }
    const reset=() =>{
        setCount(0)
    }

    return(
        <div>
            <h2>Count : {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

*/

        // counter logic using custom hooks (useState) [my idea]

/*
import { useCounter } from "./MyHooks/useCounter";

export function CounterOne(){
    const [count, increment, decrement, reset] = useCounter()
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

export function CounterOne(){
    const [count, increment, decrement, reset] = useCounter(0, 1)
    return(
        <div>
            <div><h2>Count {count}</h2></div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}



// using useReducer

/*

import { useCounter } from "./MyHooks/useCounter";

export function CounterOne(){
    const [count, dispatch] = useCounter()
    return(
        <div>
            <div><h2>Count {count}</h2></div>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}> Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
}
    */
