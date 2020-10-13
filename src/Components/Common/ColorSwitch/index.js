import React, { useState, useEffect } from "react";
import { SPOTIFY_ACCENT_COLOR } from "utils/constants";
import "./style.scss";

const defaultAccentColor = "#1DB954";
function ColorSwitch() {
  const getDefaultAccentColor = () => {
    if (localStorage.getItem(SPOTIFY_ACCENT_COLOR)) {
      return localStorage.getItem(SPOTIFY_ACCENT_COLOR);
    } else return defaultAccentColor;
  };
  const [color, setColor] = useState(getDefaultAccentColor());
  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", color);
    localStorage.setItem(SPOTIFY_ACCENT_COLOR, color);
  }, [color]);

  console.log(color);
  return (
    <div className="color-switch">
      <label for="color" className="cursor-pointer">
        Change accent color
        <input
          type="color"
          value="color"
          name="color"
          id="color"
          className="color-input"
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
    </div>
  );
}

export default ColorSwitch;
