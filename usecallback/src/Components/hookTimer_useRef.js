import React, {useState, useEffect} from 'react' 

/*      // ERROR CODE:  without ref hook we cannot access interval which is inside hook.


export function HookTimer(){
    const[timer, setTimer]= useState(0) //need a state variable to hold the timer value

    useEffect(()=>{
        const interval =setInterval(()=>{
            setTimer(prevTimer=> prevTimer + 1)
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])// for behaviour of componentDidMount and componentWillUnmount we use useEffect Hook
    return(
        <div>
            Hook Timer - {timer} <button onClick={()=> clearInterval(interval)}>Clear Timer</button> 
        </div>
    ) // interval is not defined error appears because we hooked the variable 'interval' only to effect hook so we can clearInterval only from effect hook not from an event handler (onclick event, etc). 
}
    
*/

import {useRef} from 'react'



//  ref can be used to hold mutable values (here we hold interval [like we did in cls comp]) .

export function HookTimer(){
    const [timer, setTimer]= useState(0)
    const intervalRef= useRef()

    useEffect(()=>{
        intervalRef.current= setInterval(()=>{ // holding mutable interval as intervalRef
            setTimer(prevTimer=>  prevTimer + 1)
        },1000)
        return()=>{
            clearInterval(intervalRef.current)
        }
    },[])
    return(
        <div>
            Hook Timer - {timer} <button onClick={()=> clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    )
}
    

