    //  instead of repeating title updation logic we can call our hook that has this logic

/*   

import React, {useState, useEffect} from 'react'


export function DocTitleTwo(){
    const [count, setCount]= useState(0)

    useEffect(()=>{
        document.title= `Count ${count}`
    },[count])
    return(
        <div>
            <button onClick={()=> setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}
    */

        // using custom hooks

/*

import React, {useState} from 'react'
import { useDocTitle } from './MyHooks/useDocTitle'

export function DocTitleTwo(){
    const [count, setCount]= useState(0)
    useDocTitle(count)
    return(
        <div>
            <button onClick={()=> setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}
    */

import React, {useState, useEffect} from 'react'

export function DocTitleTwo(){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `Count ${count}`
    },[count])  

    return(
        <div>
            <button onClick={()=> setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}
