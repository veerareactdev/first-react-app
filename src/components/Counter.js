import React from "react";
import { useState } from "react";
import ListedData from "./ListedData";

const Counter = () => {

  const [count, setCount] = useState(0)

  const arr = [1, 2, 3, [4, 5, 6, 7], [8, 9, 10], [11, 23, 56]];

  console.log(arr.flat());

  const flatArray = function (arr) {
    debugger;
    let result = []

    arr.forEach((item) => {
      if (Array.isArray(item)) {
        result = result.concat(flatArray(item));
      }
      else {
        result.push(item)
      }
    })

    return result;
  };


  console.log(flatArray(arr));

  return (
    <div>
      <p>{count}</p>
      <button data-testid="increment-button" onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
       <ListedData/>
    </div>
  )
}

export default Counter;