import './App.css';
// import { ClassCounter } from './Components/classCounter';                // Updating state without hook
// import { HookCounter } from './Components/hookCounter';                 // Using useState() hook
// import { HookCounterTwo } from './Components/hookCounterTwo';          // useState() hook with previous state hook 
// import { HookCounterThree } from './Components/hookCounterThree';     // useState hook with objects
// import { HookCounterFour } from './Components/hookCounterFour';         // useState hook with array
// import { ClassCounterOne } from './Components/classCounterOne';        // Updating document title using lifecycle methods (without hook) 
// import { EffectHookCounter } from './Components/effectHookCounter1';  // Updating document title using useEffect hook & conditionally running hook
// import { ClassMouse } from './Components/classMouse';                // lifecycle method (componentDidMount) run only once 
// import { HookMouse } from './Components/hookMouse';                 // useEffect run only once
// import { MouseContainer } from './Components/mouseContainer';      // useEffect with cleanup
// import { IntervalClassCounter } from './Components/intervalClassCounter';   // counter incremented at every second without hook
// import { IntervalHookCounter } from './Components/intervalHookCounter';    // useEffect with incorrect dependency
// import { DataFetching } from './Components/dataFetching';                //  data fetching
import { CompC } from './Components/compC';   //context
import {MyProvider} from './Components/context' 
import { channelCtxt } from './Components/context';
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
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <MyProvider value={'Milan'}>
        <channelCtxt.Provider value= {'Codeevolution'}>
          <CompC/>
        </channelCtxt.Provider>
      </MyProvider> */}
      {/* <MyProvider value={'Milan'}>
        <CompC/>
      </MyProvider> */}
      
    </div>
  );
}

export default App;
