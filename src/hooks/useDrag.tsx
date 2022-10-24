import React, { useEffect, useState } from "react";

const useDrag = () => {
  const [isDown, setDown] = useState(false);
  const [moveValue, setMoveValue] = useState(0);

  const mouseDownListener = (e: MouseEvent) => {
    setDown(true);
  };

  const mouseMoveListener = (e: MouseEvent) => {
    if (isDown) {
      setMoveValue(e.movementX);
    }
  };

  const mouseUpListener = (e: MouseEvent) => {
    setDown(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", mouseDownListener);
    return () => window.removeEventListener("mousedown", mouseDownListener);
  });

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveListener);
    return () => window.removeEventListener("mousemove", mouseMoveListener);
  });

  useEffect(() => {
    window.addEventListener("mouseup", mouseUpListener);
    return () => window.removeEventListener("mouseup", mouseUpListener);
  });

  return {
    moveValue,
  };
};

export default useDrag;
