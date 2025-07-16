import React,{useState} from 'react'

console.log('Counter using Hook (useState Hook)... ')

const p= document.createElement('p')
p.textContent='React Hooks allows us to use react features without having to write a class. Eg: state can be used without creating a class using hooks. Hooks won\'t work inside a class. React version 16 has implemented this speacial feature called hooks. Hooks are just functions so to use it just call it. '
document.body.appendChild(p)

const p1= document.createElement('p')
p1.textContent= 'Motivation behind Hooks: 1) this keyword in javascript is a little bit confusing than in other languages. 2)  In class components we need to remember to bind event handlers  3)   Classes don\'t minify very well and make hot reloading very unreliable  '
document.body.appendChild(p1)

const p2= document.createElement('p')
p2.textContent= '4)  There is on particular way to reuse stateful component logic. HOC and render props patterns do address this problem but we need to change components which make it awkward in looking. ie makes the code harder to follow. So there is a need to share stateful logic in a better way which is hooks '
document.body.appendChild(p2)

const p3= document.createElement('p')
p3.textContent='Rules to follow: 1)  Use hooks only at top level=> Don\'t call hooks inside loops, conditions or nested fns. 2)  Only call hooks from react fnal component not in any regular JS fn.'
document.body.appendChild(p3)

export function HookCounter(){

    const [count, setCount]= useState(0) // useState is a hook that lets you create and manage state in a functional components. First import it from react. Then call it like we do for functions. It accepts initial value of the state (count initially zero) as argument and returns the current value of state property and a method that is capable of updating that state [Here count is current value(ie updated value) of state and setCount method (updates the state value) ].
    return(
        <div>
            <button onClick={()=> setCount(count+1)}>Count {count}</button>
        </div>
    )
} // Working: on rendering a state variable (count) is created and initialised to zero. on clicking button setCount method is called which adds up 1 to current count value. Then component re-renders as the state has changed and displays the incremented value as count.