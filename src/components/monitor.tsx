import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export interface MonitorProps {
  pos?: Point;
  size?: Size;
}

export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

const MyMonitor = styled(Box, {
  shouldForwardProp: (prop) => prop !== "pos" && prop !== "size",
})<MonitorProps>(({ pos, size }) => ({
  ".monitor": {
    position: "fixed",
    width: `${size?.width}px`,
    height: `${size?.height}px`,
    // overflowY: "scroll",
    border: "solid 1em #333",
    borderRadius: ".5em",
    left: `${pos?.x}px`,
    top: `${pos?.y}px`,
  },

  //   ".monitor::-webkit-scrollbar": {
  //     width: "15px",
  //   },
  //   ".monitor::-webkit-scrollbar-thumb": {
  //     background: "#666",
  //   },
  //   "::-webkit-scrollbar-track": {
  //     backgroundColor: "#888",
  //   },

  //   ".stand:before": {
  //     content: '""',
  //     display: "block",
  //     position: "relative",
  //     background: "#222",
  //     width: "150px",
  //     height: "50px",
  //     top: "382px",
  //     left: "185px",
  //   },
  //   ".stand:after": {
  //     content: '""',
  //     display: "block",
  //     position: "relative",
  //     background: "#333",
  //     borderTopLeftRadius: ".5em",
  //     borderTopRightRadius: ".5em",
  //     width: "300px",
  //     height: "15px",
  //     top: "50px",
  //     left: "110px",
  //   },
}));

const monitor = ({ pos, size }: MonitorProps) => {
  return (
    <MyMonitor pos={pos} size={size}>
      <Box className="stand">
        <Box className="monitor"></Box>
      </Box>
    </MyMonitor>
  );
};

export default monitor;
