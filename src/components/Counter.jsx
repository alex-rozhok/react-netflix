import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="row">
      <Button
        onClick={() => setCount(prev => prev - 1)}
      >-</Button>
      <Count count={count} />
      <Button
        onClick={() => setCount(prev => prev + 1)}
      >+</Button>
    </div>
  )
}

export default Counter