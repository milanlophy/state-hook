import {useState} from 'react'

export function useInput(initialValue){

    const [value, setValue] = useState(initialValue)

    const reset = ()=>{
        setValue(initialValue)
    }
    const bind= {
        value, // => short of value: value
        onChange: e=>{
            setValue(e.target.value)
        }
    }
    return [value, bind, reset]
}