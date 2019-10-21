import React from 'react';

const ColoredLine = ({ color, width }) => (
  <hr
    style={{
        backgroundColor: color,
        height: 0.5,
        width: width,
        marginTop: 0,
        marginBottom: 0
    }}
  />
);

export default ColoredLine;