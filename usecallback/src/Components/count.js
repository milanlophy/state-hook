import React from 'react'

/* // before optimization
export function Count({text, count}) {
    console.log(`Rendering ${text}`)
    return <div>{text} - {count}</div> // count comp just renders the props we passed
}
*/

// optimized using React.memo


export const Count= React.memo(function Count({text, count}){
    console.log(`Rendering - ${text}`)
    return(
        <div>
            {text} - {count}
        </div>
    )
})
    
