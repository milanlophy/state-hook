import React, {useReducer} from 'react';
import './App.css';
import { CompA } from './Components/compA';
import { CompB } from './Components/compB';
import { CompC } from './Components/compC';

export const ctxt= React.createContext()

const initialState= 0
const reducer=(state, action)=>{
  switch(action){
    case 'increment': 
      return state + 1
    case 'decrement':
      return state -1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch]= useReducer(reducer, initialState)
  return (
    <ctxt.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        <div>Count- {count}</div> {/* global counter */}
        <CompA/>
        <CompB/>
        <CompC/>
      </div>
    </ctxt.Provider>
      
    
  );
}

export default App;
