import React, {useState} from 'react'


/*
console.log('Without useMemo Hook')

export function CounterMemo(){
    const [counterOne, setCounterOne]= useState(0)
    const [counterTwo, setCounterTwo]= useState(0)

    const incrementOne= ()=>{
        setCounterOne(counterOne + 1)
    }
    const incrementTwo= ()=>{
        setCounterTwo(counterTwo + 1)
    }
    const isEven= ()=>{
        let i=0
        while(i<2000000000) i++ // to make Ui slow to see how it affects rendering performance. Onclicking count one we see there is a delay in updation. Same happens with count two also which doesn't depend on isEven fn. This is because whenever state changes (for both count one & two) a new isEven is created and re-rendered. To avoid use useMemo hook. 
        return counterOne % 2 === 0
    }

    return(
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven() ? ' Even' : ' Odd' }</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}
*/

import {useMemo} from 'react' 

console.log('useMemo hook for performance optimization')


export function CounterMemo(){
    const [counterOne, setCounterOne]= useState(0)
    const [counterTwo, setCounterTwo]= useState(0)

    const incrementOne= ()=>{
        setCounterOne(counterOne + 1)
    }
    const incrementTwo= ()=>{
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(()=>{
        let i=0
        while(i<2000000000) i++ 
        return counterOne % 2 ===0  // useMemo return memoized value and useCallback return memoized fn. returned memoized value is true of false from CounterOne % 2 === 0
    },[counterOne])
    return(
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? ' Even' : ' Odd' }</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}
// useCallback cache a fn definition to avoid re-creating it. useMemo  cache the result of an expensive computation (return a value) . ie use useCallback whenever we need to cache a fn and use useMemo whenever we need to cache the result.

// we can't use useCallback here as it does not stop fn from running instead it saves the fn so that react won't create a new version of it unless counterOne changes. so on changing counterTwo it ensures no recreation of fn but runs the saved fn making UI slow
