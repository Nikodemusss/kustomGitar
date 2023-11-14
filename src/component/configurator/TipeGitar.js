import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Akustik from "../gitar/Akustik";
import Klasik from "../gitar/Klasik";
import { OrbitControls, Stage } from "@react-three/drei";


const TipeGitar = () => {

    const [selectedModel, setSelectedModel] = useState(null);
    const clicked = (selectedModel) => {
        setSelectedModel(selectedModel);
        }
    
    return(
        <div className="App">
            <Canvas className="canvas"> 
                <Stage environment={"city"} intensity={1} shadows={false}>
                    {selectedModel === '.public/Akustik.glb' && <Akustik/>}
                    {selectedModel === '.public/Klasik.glb' && <Klasik/>}
                    {/* {selectedModel === '.public/Elektrik.glb' && <Elektrik/>} */}
                    <OrbitControls/>
                </Stage>
            </Canvas>
            <div className="configurator-type">
            <h3>Pilih Tipe Gitar</h3>
                <button onClick={() => clicked('.public/Akustik.glb')} className="select-type">Akustik</button>
                <button onClick={() => clicked('.public/Klasik.glb')}  className="select-type">Klasik</button>
            </div>
        </div>
    );
};

export default TipeGitar;