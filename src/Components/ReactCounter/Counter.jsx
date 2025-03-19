import './Counter.css';
import { useState } from 'react';
import CounterButton from './CounterButton';



export default function Counter(){

  const [count, setCount] = useState(0);
  // useState is a hook that allows you to have state variables in functional components. The useState(0) returns an array with 2 elements. The first element is the current state value and the second element is a function that allows you to update the state value. The returns are mapped to count and setCount respectively. The count is the current state value and setCount is the function that allows you to update the state value/count which is set to 0.

    function incrementCounterParent(by) {
      setCount(count + by);
    }
    
    function decrementCounterParent(by) {
      setCount(count - by);
    }

    function resetCounter() {
      setCount(0);
    }

  return (
    <div className='Counter'>
      <span className='totalCount'>{count}</span>
      <CounterButton by={1} incrementMethod={incrementCounterParent} decrementMethod={decrementCounterParent} />
      <CounterButton by={2} incrementMethod={incrementCounterParent} decrementMethod={decrementCounterParent}/>
      <CounterButton by={5} incrementMethod={incrementCounterParent} decrementMethod={decrementCounterParent}/>
      <button className='resetButton' onClick={resetCounter}>Reset</button>
      {/* <button className='resetButton' onClick={() => setCount(0)}>Reset</button> */}
    </div>
  );
}