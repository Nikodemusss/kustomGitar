import { createContext, useState, useContext } from "react";

export const TextureContext = createContext();

export const TextureProvider = (props) => {
  const [textureUrl, setTextureUrl] = useState();
  return(
    <TextureContext.Provider value={{
      textureUrl, 
      setTextureUrl,
      }}>
      {props.children}
    </TextureContext.Provider>
  )
}

export const UseTexture = () => {
  const context = useContext(TextureContext);
  return context;
}