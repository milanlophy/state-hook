import {useEffect} from 'react'

/*
export function useDocTitle(count){
    useEffect(()=>{
        document.title= `Count ${count}`
    },[count])
    
}   // as we don't use any JSX we need not to import React from react

*/


export function useDocTitle(count){
    
    useEffect(()=>{
        document.title = `Count ${count}`
    },[count])

    
}