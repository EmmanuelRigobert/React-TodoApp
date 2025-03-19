
// import React, { useState } from "react";
// import PropTypes from "prop-types";


export default function CounterButton({ by, incrementMethod, decrementMethod }) {
  /*const buttonStyle = {
    fontSize: "1.5em",
    backgroundColor: "green",
    color: "white",
    padding: "15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };*/

  /*const [count, setCount] = useState(0);
  // useState is a hook that allows you to have state variables in functional components. The useState(0) returns an array with 2 elements. The first element is the current state value and the second element is a function that allows you to update the state value. The returns are mapped to count and setCount respectively. The count is the current state value and setCount is the function that allows you to update the state value/count which is set to 0.

  function incrementCounter() {
    setCount(count + by);
    incrementMethod(by);
  }

  function decrementCounter() {
    setCount(count - by);
    decrementMethod(by);
  }*/

  return (
    <div className='Counter'>
      {/* <span className='count'>{count}</span> */}
      <>
        <button className='counterButton' /*style={buttonStyle}*/ onClick={() => incrementMethod(by)} /*onClick={incrementCounter>}*/>
          +{by}
        </button>
        <button className='counterButton' /*style={buttonStyle}*/ onClick={() => decrementMethod(by)}/*onClick={decrementCounter}*/ >
          -{by}
        </button>
      </>
    </div>
  );
}

// CounterButton.propTypes = {
//   by: PropTypes.number,
// };
// CounterButton.defaultProps = {
//   by: 1,
// };
