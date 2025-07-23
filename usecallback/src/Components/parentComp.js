
import React, {useState} from 'react'
import Title from './title'
import {Count} from './count'
import Button from './button'

/*

// performance issue is that on clicking button for incrementing age all the 5 components are re-rendered. Same is the scenario while incrementing salary too. 
// Can be solved using React.memo. Wrap all 5 components inside 'React.memo' on exporting.


// parentComp acts as container for other 5 components. count component is used twice passing different props. 
export function ParentComp(){
    const [age, setAge]= useState(25)
    const [salary, setSalary]= useState(50000)

    const incrementAge= () =>{
        setAge(age + 1)
    }

    const incrementSalary= ()=>{
        setSalary(salary + 1000)
    }

    return(  // Title comp -> displays a title, Count comp -> count comp display current age and salary of a person (same props but different prop values).
        <div> 
            <Title/> 
            <Count text= 'Age' count= {age} /> 
            <Button clickHandler={incrementAge}>Increment Age</Button> 
            <Count text= 'Salary' count= {salary} /> 
            <Button clickHandler={incrementSalary}>Increment Salary</Button>  
        </div>
    )   // Button comp -> button comp increments age and salary of a person
} 

*/

            // optimized with useCallBack

/*
import {useCallback} from 'react'

const p= document.createElement('p')
p.textContent= 'useCallback is a hook that will return a memoized version of callback function that only changes if one of the dependencies has changed. ie it will return same fn if prop hasn\'t changed. So react won\'t re-render. It is useful when passing callbacks(ie fns) to optimized child components (ie components optimized by React.memo) to prevent unnecessary renders due to different m/y reference.'
document.body.appendChild(p)

export function ParentComp(){
    const [age, setAge]= useState(25)
    const [salary, setSalary]= useState(50000)

    const incrementAge= useCallback(()=>{
        setAge(age + 1)
    },[])
    const incrementSalary= useCallback(()=>{
        setSalary(salary + 1000)
    },[])
    return(
        <div>
            <Title/>
            <Count text='Age' count={age}/>
            <Button clickHandler={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary}/>
            <Button clickHandler={incrementSalary}>Increment Salary</Button>
        </div>
    )
}
    */

import {useCallback} from 'react'

export function ParentComp(){
    const [age, setAge]= useState(25)
    const [salary, setSalary]= useState(50000)

    const incrementAge= useCallback(()=>{
        setAge(age + 1)
    },[age])
    const incrementSalary= useCallback(()=>{
        setSalary(salary + 1000)
    }, [salary])
    return(
        <div>
            <Title/>
            <Count text='Age' count={age}/>
            <Button clickHandler={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary}/>
            <Button clickHandler={incrementSalary}>Increment Salary</Button>
        </div>
    )
}