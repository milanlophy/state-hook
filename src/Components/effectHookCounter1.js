import React, {useState, useEffect} from 'react'    //step 1: import useEffect()

console.log('useEffect Hook...')
/*
export function EffectHookCounter(){
    const [count, setCount] = useState(0)
    useEffect(()=>{     // step 2: call useEffect with fn that is to be runned after every render
        document.title= `You clicked ${count} times` // useEffect is called after every single render.
    })
    return(
        <div>
            <button onClick= {()=> setCount( count+1)}> Count {count} </button>
        </div>
    )
}
    */

console.log('Conditional run effects and updations using hook...')

export function EffectHookCounter(){
    const [count, setCount] = useState(0)
    const [name, setName]= useState('')
    useEffect(()=>{
        console.log('useEffect - updating document title ')
        document.title= `You clicked ${count} times`
    },[count])
    return(
        <div>
            <input type='text' value={name} onChange={(e)=> setName( e.target.value)} />
            <button onClick={()=> setCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}
    
