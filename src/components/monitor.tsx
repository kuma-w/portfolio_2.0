import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const MyMonitor = styled(Box)(() => ({
  ".monitor": {
    width: "515px",
    height: "300px",
    overflowY: "scroll",
    border: "solid 1em #333",
    borderRadius: ".5em",
  },

  ".monitor::-webkit-scrollbar": {
    width: "15px",
  },
  ".monitor::-webkit-scrollbar-thumb": {
    background: "#666",
  },
  "::-webkit-scrollbar-track": {
    backgroundColor: "#888",
  },

  ".stand:before": {
    content: '""',
    display: "block",
    position: "relative",
    background: "#222",
    width: "150px",
    height: "50px",
    top: "382px",
    left: "185px",
  },
  ".stand:after": {
    content: '""',
    display: "block",
    position: "relative",
    background: "#333",
    borderTopLeftRadius: ".5em",
    borderTopRightRadius: ".5em",
    width: "300px",
    height: "15px",
    top: "50px",
    left: "110px",
  },
}));

const monitor = () => {
  return (
    <MyMonitor>
      <Box className="stand">
        <Box className="monitor"></Box>
      </Box>
    </MyMonitor>
  );
};

export default monitor;
