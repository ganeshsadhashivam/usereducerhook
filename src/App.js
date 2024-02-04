import logo from "./logo.svg";
import "./App.css";
import { useReducer, useState } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "INCREMENT_BY_2":
      return { count: state.count + 2 };
    case "DECREMENT_BY_2":
      return { count: state.count - 2 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  //dispatch is a function that will call the render with the value passed

  //const [counter,setCounter] = useState(0) //for reference
  //const dispatch = (action)=>counterReducer(state,action)
  return (
    <div className="App">
      <h1>use Reducer {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT_BY_2" })}>+2</button>
      <button onClick={() => dispatch({ type: "DECREMENT_BY_2" })}>-2</button>
    </div>
  );
}

export default App;
