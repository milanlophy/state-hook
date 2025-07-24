import './App.css';

// import { ParentComp } from './Components/parentComp';   // useCallback hook
// import { CounterMemo } from './Components/counterMemo';   // useMemo hook
// import { FocusInput } from './Components/focusInput_useRef';    // useRef hook
// import { ClassTimer } from './Components/classTimer';
import { HookTimer } from './Components/hookTimer_useRef';

function App() {
  return (
    <div className="App">
      {/* <ParentComp/> */}
      {/* <CounterMemo/> */}
      {/* <FocusInput/> */}
      {/* <ClassTimer/> */}
      <HookTimer/>
    </div>
  );
}

export default App;
