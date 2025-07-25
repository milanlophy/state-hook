
// repeating title updation logic

/*

import React, {useState, useEffect} from 'react'

export function DocTitleOne(){
    const [count, setCount]= useState(0)

    useEffect(()=>{
        document.title= `Count ${count}`
    },[count])
    return(
        <div>
            <button onClick={()=> setCount(count+1)}>Count - {count}</button>
        </div>
    )
}
    */

// (custom hooks) using our own hooks for title updation so it avoids code repetition

/*

import React, {useState} from 'react'
import { useDocTitle } from './MyHooks/useDocTitle'

export function DocTitleOne(){
    const [count, setCount]= useState(0)

    useDocTitle(count)
    return(
        <div>
            <button onClick={()=> setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}
    */

import React,{useState, useEffect} from 'react'

export function DocTitleOne(){
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