import './App.css';
// import { ClassCounter } from './Components/classCounter';        // Updating state without hook
// import { HookCounter } from './Components/hookCounter';         // Using useState() hook
// import { HookCounterTwo } from './Components/hookCounterTwo';      // useState() hook with previous state hook 
// import { HookCounterThree } from './Components/hookCounterThree';    // useState hook with objects
// import { HookCounterFour } from './Components/hookCounterFour';     // useState hook with array
// import { ClassCounterOne } from './Components/classCounterOne';
// import { EffectHookCounter } from './Components/effectHookCounter1';
import { ClassMouse } from './Components/classMouse';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <ClassCounterOne/> */}
      {/* <EffectHookCounter/> */}
      <ClassMouse/>
    </div>
  );
}

export default App;
