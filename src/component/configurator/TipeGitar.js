import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Akustik_Cort from "../gitar/Akustik_Cort_Abstract";
import Elektrik_Gibson from "../gitar/Elektrik_Gibson";
import Akustik_Gibson from "../gitar/Akustik_Gibson";
import Akustik_Yamaha from "../gitar/Akustik_Yamaha";
import { OrbitControls, Stage } from "@react-three/drei";
import Info from "../detail/Info";
import ImportGambar from "./ImportGambar";
import Material from "./Material";
import Export from "./Export";
import Elektrik_Cort from "../gitar/Elektrik_Cort";
import Elektrik_Ibanez from "../gitar/Elektrik_Ibanez";

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
          {selectedModel === ".public/Akustik_Cort_Abstract.glb" && (
            <Akustik_Cort />
          )}
          {selectedModel === ".public/Akustik_Gibson.glb" && <Akustik_Gibson />}
          {selectedModel === ".public/Akustik_Yamaha.glb" && <Akustik_Yamaha />}
          {selectedModel === ".public/Elektrik.glb" && <Elektrik_Gibson />}
          {selectedModel === ".public/Cort_G300_Elektrik.glb" && (
            <Elektrik_Cort />
          )}
          {selectedModel === ".public/Elektrik_Ibanez.glb" && (
            <Elektrik_Ibanez />
          )}
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
          <div className="guitar-type-akustik">Akustik</div>
          <div className="guitar-akustik">
            <button
              onClick={() =>
                clicked(
                  ".public/Akustik_Cort_Abstract.glb",
                  "CORT ABSTRACT DELTA"
                )
              }
              className="select-type"
            >
              Cort
            </button>
            <button
              onClick={() =>
                clicked(".public/Akustik_Gibson.glb", "GIBSON L-00 ORIGINAL")
              }
              className="select-type"
            >
              Gibson
            </button>
            <button
              onClick={() => clicked(".public/Akustik_Yamaha.glb", "YAMAHA FG")}
              className="select-type"
            >
              Yamaha
            </button>
          </div>
          <div className="guitar-type-elektrik"> Elektrik</div>
          <button
            onClick={() => clicked(".public/Elektrik.glb", "GIBSON LES PAUL")}
            className="select-type"
          >
            Gibson
          </button>
          <button
            onClick={() =>
              clicked(".public/Cort_G300_Elektrik.glb", "CORT G300")
            }
            className="select-type"
          >
            Cort
          </button>
          <button
            onClick={() =>
              clicked(".public/Elektrik_Ibanez.glb", "IBANEZ AZES 40")
            }
            className="select-type"
          >
            Ibanez
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
