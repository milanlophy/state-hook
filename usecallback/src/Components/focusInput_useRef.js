import React, {useEffect, useRef} from 'react'

// useRef can hold reference to DOM node using ref attribute

export function FocusInput(){ // making the input bar focused on page load. we want to focus only once (componentDidMount behaviour) so use useEffect hook
    const inputRef= useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return(
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}
    
