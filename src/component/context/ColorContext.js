import { createContext, useContext, useState } from "react";

export const colors = [
    {
      color: "#683434",
      name: "brown",
    },
    {
      color: "#1a5e1a",
      name: "green",
    },
    {
      color: "#659994",
      name: "blue",
    },
    {
      color: "#896599",
      name: "mauve",
    },
    {
      color: "#ffa500",
      name: "orange",
    },
    {
      color: "#59555b",
      name: "grey",
    },
    {
      color: "#222222",
      name: "black",
    },
    {
      color: "#ececec",
      name: "white",
    },
    {
      color: "#00FFFF",
      name: "Aqua"
    },
  ];

  const ColorContext = createContext({});

  export const ColorProvider = (props) => {
    const [Tuner, setTuner] = useState(colors)
    const [Neck, setNeck] = useState(colors)
    const [Nut, setNut] = useState(colors)
    const [Fret, setFret] = useState(colors)
    const [FretBoard, setFretBoard] = useState(colors)
    const [Body, setBody] = useState(colors)
    const [Bridge, setBridge] = useState(colors)
    const [BridgeNut, setBridgeNut] = useState(colors)
    return(

    <ColorContext.Provider value={{
        colors,
        Tuner, 
        setTuner,
        Neck,
        setNeck,
        Nut,
        setNut,
        Fret,
        setFret,
        FretBoard,
        setFretBoard,
        Body,
        setBody,
        Bridge,
        setBridge,
        BridgeNut,
        setBridgeNut,
    }}>
        {props.children}
    </ColorContext.Provider>

    )
  }

  export const UseCustomization = () => {
    const context = useContext(ColorContext);
    return context;
  }