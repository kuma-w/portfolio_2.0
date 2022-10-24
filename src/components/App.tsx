import React, { useState, useEffect } from "react";
import { Reset } from "styled-reset";
import Monitor, { Point, Size } from "./monitor";
import useWheel from "../hooks/useWheel";
import useDrag from "../hooks/useDrag";

const App = () => {
  const { wheelValue } = useWheel();
  const { moveValue } = useDrag();
  const [viewPoint, setViewPoint] = useState(0);
  const point1: Point = { x: 100 + viewPoint, y: 100 };
  const point2: Point = { x: 800 + viewPoint, y: 100 };
  const size: Size = { width: 515, height: 300 };

  useEffect(() => {
    setViewPoint(viewPoint + wheelValue + moveValue);
  }, [wheelValue, moveValue]);

  return (
    <React.Fragment>
      <Reset />
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Monitor pos={point1} size={size} />
        <Monitor pos={point2} size={size} />
      </div>
    </React.Fragment>
  );
};

export default App;
