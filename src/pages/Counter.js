import React, { useState } from "react";
import "../styles.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="col-sm-6 offset-sm-3 col-8 offset-2 text-center mt-4">
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">Counter</h3>
        </div>
        <div className="card-body">
          <h1 className="digital">{count}</h1>
          <div className="d-flex justify-content-center">
            <button className=" btn btn-primary m-2" onClick={handleIncrement}>
              <h2>+</h2>
            </button>
            <button className=" btn btn-danger m-2" onClick={handleDecrement}>
              <h2>-</h2>
            </button>
            <button className="btn btn-secondary m-2" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
