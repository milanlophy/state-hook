import React from 'react'

/*      // Before optimization

// Title comp simply renders an h2 tag
function Title(){
    console.log('Rendering Title')
    return(
        <h2>
            useCallback Hook
        </h2>
    )
}
export default Title

*/

// optimized using React.memo
function Title(){
    console.log('Rendering Title')
    return(
        <div>
            useCallback Hook
        </div>
    )
}
export default React.memo(Title)