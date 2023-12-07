import { Tetrahedron } from "@react-three/drei";
import { createContext, useState, useContext } from "react";

export const TextureContext = createContext();

export const TextureProvider = (props) => {
  const [textureUrl, setTextureUrl] = useState();
  const [TunerTxt, setTunerTxt] = useState({ textureUrl });
  const [NeckTxt, setNeckTxt] = useState({ textureUrl });
  const [NutTxt, setNutTxt] = useState({ textureUrl });
  const [FretTxt, setFretTxt] = useState({ textureUrl });
  const [FretBoardTxt, setFretBoardTxt] = useState({ textureUrl });
  const [BodyTxt, setBodyTxt] = useState({ textureUrl });
  const [BridgeTxt, setBridgeTxt] = useState({ textureUrl });
  const [BridgeNutTxt, setBridgeNutTxt] = useState({ textureUrl });

  return (
    <TextureContext.Provider
      value={{
        textureUrl,
        setTextureUrl,
        TunerTxt,
        setTunerTxt,
        NeckTxt,
        setNeckTxt,
        NutTxt,
        setNutTxt,
        FretTxt,
        setFretTxt,
        FretBoardTxt,
        setFretBoardTxt,
        BodyTxt,
        setBodyTxt,
        BridgeTxt,
        setBridgeTxt,
        BridgeNutTxt,
        setBridgeNutTxt,
      }}
    >
      {props.children}
    </TextureContext.Provider>
  );
};

export const UseTexture = () => {
  const context = useContext(TextureContext);
  return context;
};
