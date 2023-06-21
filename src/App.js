import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "./features/counter/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="counter-top">
          <button onClick={() => dispatch(increment())}>+</button>
          <span>{count}</span>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <div className="counter-bottom">
          <input
            input
            type="text"
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            //Number() method is used to ensure that the incrementAmount value passed as the payload
            // for the incrementByAmount action is a valid number. logical OR (||) operator is used in
            // (Number(incrementAmount) || 0) ensures that if the conversion to a number fails
            // and Number(incrementAmount) evaluates to NaN, the payload value will be set to 0 instead
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            AddByAmount
          </button>
          <button
            onClick={() =>
              dispatch(incrementAsync(Number(incrementAmount) || 0))
            }
          >
            Async
          </button>
        </div>
      </header>
    </div>
  );
};

export default App;
