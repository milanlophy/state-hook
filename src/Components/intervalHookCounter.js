import React , {useState, useEffect} from 'react'

console.log('useEffect with incorrect dependency')

const p= document.createElement('p')
p.textContent= 'Using empty dependency array is best practice when setting up an interval that doesn\'t depend on external values. If dependency array is not provided(used), useEffect still runs on every render but a new interval is created on each render, it\'s inefficient and unnecessary. '
document.body.appendChild(p)

const p1= document.createElement('p')
p1.textContent= 'If [count] is used as dependency, useEffect runs everytime count changes which also creates a new interval and clears the old one, every second.It\'s wasteful. So use empty dependency array with a functional state update.'
document.body.appendChild(p1)

/*
export function IntervalHookCounter(){
    const [count, setCount]= useState(0)
    const tick=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        const interval= setInterval(tick ,1000)
        return()=>{
            clearInterval(interval)
        }
    },[count])// this array is called dependency array as it specifies the items(items that changes) useEffect will depend on. Here we may use an empty array as no state is changed but note that count changes on each second. so specify count inside array. [count], here useEffect runs every time count changes creating a new interval
    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}
  */  
 
const p2= document.createElement('p')
p2.textContent= ' Empty array=> useEffect is not depending on any props or state. Usually useEffect runs whenever a change occurs. As it is independent it won\'t run if anything changes. ie it runs once (on mounting ie at starting).  ' // stops at 1
document.body.appendChild(p2)

export function IntervalHookCounter(){
    const [count, setCount]= useState(0)
    const tick=()=>{
        setCount(prevCount=> prevCount+1) // As empty array provided we need to make count increment on each render efficiently so use functional state update.
    }
    useEffect(()=>{
        const interval= setInterval(tick, 1000)
        return()=>{
            clearInterval(interval)
        }
    },[])// it works if array is not used but it creates a new interval at each render so inefficient
    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}