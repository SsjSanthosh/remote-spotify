import React from "react";

function Progress(props) {
  const { bgcolor, completed } = props;
  const containerStyles = {
    height: 5,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 5,
    margin: 5,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
}

export default Progress;
