/*

import React, { useState} from "react";

export function Form(){
    const [fstName, setFstName] = useState('')
    const [lstName, setLstName] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`Your name is ${fstName} ${lstName}`)
        setFstName('')  // clearing the input after submition
        setLstName('')
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name : </label>
                    <input type="text" placeholder="First Name" value={fstName} onChange={(e)=> setFstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type="text" placeholder="Last Name" value={lstName} onChange={(e)=> setLstName(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

*/

import React, {useState} from 'react'

export function Form(){
    
    return(
        <div>

        </div>
    )
}