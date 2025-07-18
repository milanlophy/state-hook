import React, { useState} from 'react'
import { HookMouse } from './hookMouse'

console.log('useEffect with cleanup...')

export function MouseContainer(){
    const [display, setDisplay]= useState(true)

    return( // Toggle means switching between two states (true or false , on or off, ...)
        <div>
            <button onClick={()=> setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse/>}
        </div>
    )   //  when button is clicked it runs setDisplay(!display),  !display means opposite of current value => false  (as display is set true) 
}   // {display && <HookMouse/>} => only render <HookMouse/> if display is true. When display is false , react don't show <HookMouse/>
