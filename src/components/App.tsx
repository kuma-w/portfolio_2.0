import React, { useState, useEffect } from "react";
import Monitor, { Point, Size } from "./monitor";
import useScroll from "../hooks/useWheel";

const App = () => {
  const { wheelValue } = useScroll();
  const [viewPoint, setViewPoint] = useState(0);
  const point1: Point = { x: 100 + viewPoint, y: 100 };
  const point2: Point = { x: 800 + viewPoint, y: 100 };
  const size: Size = { width: 515, height: 300 };

  useEffect(() => {
    setViewPoint(viewPoint + wheelValue);
  }, [wheelValue]);

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <Monitor pos={point1} size={size} />
      <Monitor pos={point2} size={size} />
    </div>
  );
};

export default App;
