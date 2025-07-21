import React, {useContext} from 'react'
import { ctxt } from '../App'

export function CompD(){
    const compCtxt= useContext(ctxt)
    return(
        <div>
            Component D : {compCtxt.countState}
            <button onClick={()=> compCtxt.countDispatch('increment')}>Increment</button>
            <button onClick={()=> compCtxt.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=> compCtxt.countDispatch('reset')}>Reset</button>
        </div>
    )
}