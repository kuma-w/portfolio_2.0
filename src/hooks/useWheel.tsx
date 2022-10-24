import React, { useState, useEffect } from "react";

const useScroll = () => {
  const [wheelValue, setWheelValue] = useState(0);

  const speed = 0.2;

  const listener = (e: WheelEvent) => {
    setWheelValue(e.deltaY * speed);
  };

  useEffect(() => {
    window.addEventListener("wheel", listener);
    return () => window.removeEventListener("wheel", listener);
  });
  return {
    wheelValue,
  };
};

export default useScroll;
