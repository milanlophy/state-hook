import React, {useState} from 'react' // step 1: import useState() 

console.log('useState with array... ')

const p= document.createElement('p')
p.textContent= 'Summary :  useState hook lets you add state to functional components. In classes, state is always an object. With the use of useState hook, the state doesn\'t have to be an object.'
document.body.appendChild(p)

const p1= document.createElement('p')
p1.textContent=' The useState hook returns an array with 2 elements. The first element is the current value of the state, and the second element is a state setter function. '
document.body.appendChild(p1)

const p2= document.createElement('p')
p2.textContent= 'If new state value depends on the previous state value we can pass a fn to the setter fn. When dealing with objects or arrays always make sure to spread your state variable and then call the setter fn.'
document.body.appendChild(p2)

export function HookCounterFour(){
    const [items, setItems]= useState([]) //step 2:  call useState()

    const addItem = () =>{
        setItems([...items, { // setItems return an array appended by new items (only if old items are added using spread operator )
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1    // value is random numbers between 1 and 10
        }])     // step 3: Upsating state
    }
    return(
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item=> (
                        <li key={item.id}>{item.value}</li> 
                    ))  // inside map() return the JSX
                }
            </ul>
        </div>
    )   // step 4: accessing new array
}
