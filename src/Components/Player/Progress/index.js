import React, { useRef } from "react";

function Progress(props) {
  const { completed, handleSeek } = props;
  const ref = useRef(null);
  const containerStyles = {
    height: 5,
    width: "70%",
    backgroundColor: "#333131",
    borderRadius: 20,
    margin: 5,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    borderRadius: "inherit",
    transition: "width 0.1s ease-in-out",
  };

  const handleClick = (e) => {
    let perc =
      (e.clientX - ref.current.getBoundingClientRect().left) /
      ref.current.offsetWidth;
    handleSeek(perc * 100);
  };
  return (
    <div
      style={containerStyles}
      id="progressbar"
      onClick={handleClick}
      ref={ref}
    >
      <div style={fillerStyles} className="progressbar-fill"></div>
      <button className="progress-thumb"></button>
    </div>
  );
}

export default Progress;
