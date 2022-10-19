import React, { useState, useEffect } from "react";
import Monitor, { Point, Size } from "./monitor";
import useScroll from "../hooks/useScroll";

const App = () => {
  const { scrollY } = useScroll();
  const point1: Point = { x: 100 + scrollY, y: 100 };
  const point2: Point = { x: 800 + scrollY, y: 100 };
  const size: Size = { width: 515, height: 300 };

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <Monitor pos={point1} size={size} />
      <Monitor pos={point2} size={size} />
    </div>
  );
};

export default App;
