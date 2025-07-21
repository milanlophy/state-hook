import React, {useContext} from 'react'
import { CompB } from './compB'
import { ctxt } from '../App'

export function CompA(){
    const compCtxt= useContext(ctxt)
    return(
        <div>
            Component A : {compCtxt.countState} {/* component counter */}
            <button onClick={()=> compCtxt.countDispatch('increment')}>Increment</button>
            <button onClick={()=> compCtxt.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=> compCtxt.countDispatch('reset')}>Reset</button>
        </div>
    )
}