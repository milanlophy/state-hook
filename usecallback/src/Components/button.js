import React from 'react'
/*
    // before optimization
export function Button({clickHandler, children}){
    console.log('Rendering button - ', children)
    return(
        <button onClick={clickHandler}>
            {children}
        </button>
    )
} // button comp with clickHandler (fn passed as prop) and children prop (inner text between button)

*/

// optimized using React.memo


function Button({clickHandler, children}){
    console.log(`Rendering Button - ${children}`)
    return(
        <div>
            <button onClick={clickHandler}>{children}</button>
        </div>
    )
}
export default React.memo(Button)

