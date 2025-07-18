import React, {useState,useEffect} from 'react'

console.log('useEffect run only once...')
/*
const p= document.createElement('p')
p.textContent= 'We want to run useEffect only once at the start. We don\'t want to run useEffect on each and every re-render. ie, we don\'t want our useEffect hook to depend on anything. So pass an empty array as second parameter.'
document.body.appendChild(p)

export function HookMouse(){
    const [x, setX]= useState(0)
    const [y, setY]= useState(0)

    const logMousePosition=(e)=>{
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
    },[])
    
    return(
        <div>
            Hooks: X- {x} Y- {y}
        </div>
    )
}
*/

        // useEffect with cleanup

export function HookMouse(){
    const [x, setX]= useState(0)
    const [y, setY]= useState(0)
    const logMousePosition=(e)=>{
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
        return()=>{
            console.log('component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
    return(
        <div>
            X- {x} Y- {y}
        </div>
    )
}
    
