import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Akustik from "../gitar/Akustik";
import Elektrik from "../gitar/Elektrik";
import { OrbitControls, Stage } from "@react-three/drei";
import Info from "../detail/Info";
import ImportGambar from "./ImportGambar";
import Material from "./Material";
import Export from "./Export";

const TipeGitar = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedGuitarName, setSelectedGuitarName] = useState(null);
  const clicked = (selectedModel, name) => {
    setSelectedModel(selectedModel);
    setSelectedGuitarName(name);
  };
  return (
    <div className="App">
      <Info selectedGuitar={selectedGuitarName} />
      <Canvas gl={{ preserveDrawingBuffer: true }} className="canvas">
        <Stage environment={"city"} intensity={1} shadows={false}>
          {selectedModel === ".public/Akustik.glb" && <Akustik />}
          {selectedModel === ".public/Elektrik.glb" && <Elektrik />}
          <OrbitControls />
          {selectedModel !== null && <Export />}
        </Stage>
      </Canvas>
      <div className="header">
        <div className="header-title">
          <h1>KUSTOM GITAR 3D</h1>
        </div>
      </div>
      <div className="box">
        <div className="configurator-type">
          <h3>Pilih Tipe Gitar</h3>
          <button
            onClick={() =>
              clicked(".public/Akustik.glb", "CORT ABSTRACT DELTA")
            }
            className="select-type"
          >
            Akustik
          </button>
          <button
            onClick={() => clicked(".public/Elektrik.glb", "GIBSON LES PAUL")}
            className="select-type"
          >
            Elektrik
          </button>
        </div>
        {selectedModel !== null && (
          <>
            <Material />
            <ImportGambar />
            <div className="info-control">
              <p>Klik Kiri : Memutar Gitar</p>
              <p>Klik Kiri + Shift : Menggeser Gitar</p>
              <p>Scroll Up : Zoom In</p>
              <p>Scroll Down : Zoom Out</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TipeGitar;
