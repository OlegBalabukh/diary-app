import React from 'react';

const ColoredSquare = ({ width, height, color }) => (
  <div
    style={{
      position: "absolute",
      backgroundColor: color,
      height: height,
      width: width,
      margin: "0 0 0 -18px"
    }}
  />
);

export default ColoredSquare;