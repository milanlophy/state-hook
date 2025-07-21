import React, {useContext} from 'react'
import { ctxt } from '../App'

export function CompF(){
    const compCtxt= useContext(ctxt)
    return(
        <div>
            Component F : {compCtxt.countState} 
            <button onClick={()=> compCtxt.countDispatch('increment')}>Increment</button>
            <button onClick={()=> compCtxt.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=> compCtxt.countDispatch('reset')}>Reset</button>
        </div>
    )
}