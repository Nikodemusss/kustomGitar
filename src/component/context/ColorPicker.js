import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = ({ setColor }) => {
  const [color, setColorState] = useState();

  const handleColorChange = (newColor) => {
    setColorState(newColor);
    setColor(newColor);
  };

  return <HexColorPicker color={color} onChange={handleColorChange} />;
};

export default ColorPicker;
