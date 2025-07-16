import React, {useState} from 'react'
console.log('useState with previous state: ')

export function HookCounterTwo(){
    const initialCount= 0
    const [count, setCount]= useState(initialCount)
    const incrementFive=() =>{
    /*  for(let i=0; i<5; i++){
            setCount(count+1) // React batches multiple state updates together for performance. So iterations are performed all at a once. so return 1 . To avoid use functional form.
         }  */
        
        for(let i=0; i<5; i++){
            setCount(prevCount=> prevCount+1)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            {/* <button onClick={()=> setCount(count+1)}>Increment</button> */}     {/*  Using fnal form is better in all ways */}

            <button onClick={()=> setCount(prevState => prevState+1)}>Increment</button>
            <button onClick={()=> setCount(prevState => prevState-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment Five</button>
        </div>
    )
}

