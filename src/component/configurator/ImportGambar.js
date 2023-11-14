import { TextureContext } from "../context/TextureContext";
import { useContext } from "react";
import * as THREE from 'three'

const ImportGambar = () => {
  const { textureUrl, setTextureUrl } = useContext(TextureContext);
  const handleFileChange = async(e) => {
    const file = e.target.files[0];
    const {type} = file
    const buffer = await file.arrayBuffer();
    const blob = new Blob([buffer], {type});
    const imageUrl = URL.createObjectURL(blob);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageUrl)
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat = new THREE.Vector2(2,1)

    if (file) {
      setTextureUrl(imageUrl);
    }
  }
  
  const handleFileRemove = (e) => {
   setTextureUrl(null)
  }
  console.log(handleFileChange)

    return(
        <div className="configurator-image">
                <h3>Import Image</h3>
                <div className="button-canvas">          
                    <input type="file" onChange={(e) => handleFileChange(e)} />
                    {textureUrl && (
                      <button onClick={handleFileRemove}>Remove</button>
                    )}
                </div>
            </div>
    )
}

export default ImportGambar