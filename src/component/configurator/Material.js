import { UseCustomization } from "../context/ColorContext";
import ColorPicker from "../context/ColorPicker";

const Material = () => {
  const {
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
  } = UseCustomization();

  const setColor = (part, color) => {
    switch (part) {
      case "Tuner":
        setTuner({ ...Tuner, color });
        break;
      case "Neck":
        setNeck({ ...Neck, color });
        break;
      case "Nut":
        setNut({ ...Nut, color });
        break;
      case "Fret":
        setFret({ ...Fret, color });
        break;
      case "FretBoard":
        setFretBoard({ ...FretBoard, color });
        break;
      case "Body":
        setBody({ ...Body, color });
        break;
      case "Bridge":
        setBridge({ ...Bridge, color });
        break;
      case "BridgeNut":
        setBridgeNut({ ...BridgeNut, color });
        break;
      default:
        break;
    }
    console.log(Tuner);
  };

  const remove = (part) => {
    switch (part) {
      case "Tuner":
        setTuner({ ...Tuner, color: "white" });
        break;
      case "Neck":
        setNeck({ ...Neck, color: "white" });
        break;
      case "Nut":
        setNut({ ...Nut, color: "white" });
        break;
      case "Fret":
        setFret({ ...Fret, color: "white" });
        break;
      case "FretBoard":
        setFretBoard({ ...FretBoard, color: "white" });
        break;
      case "Body":
        setBody({ ...Body, color: "white" });
        break;
      case "Bridge":
        setBridge({ ...Bridge, color: "white" });
        break;
      case "BridgeNut":
        setBridgeNut({ ...BridgeNut, color: "white" });
        break;
      default:
        break;
    }
  };

  const removeAll = () => {
    setTuner({ ...Tuner, color: "white" });
    setNeck({ ...Neck, color: "white" });
    setNut({ ...Nut, color: "white" });
    setFret({ ...Fret, color: "white" });
    setFretBoard({ ...FretBoard, color: "white" });
    setBody({ ...Body, color: "white" });
    setBridge({ ...Bridge, color: "white" });
    setBridgeNut({ ...BridgeNut, color: "white" });
  };

  return (
    <div className="configurator-material">
      <h3>Pilih Warna</h3>
      <div className="configurator-title-tuner">Tuner</div>
      <div className="colorpicker-tuner">
        <ColorPicker setColor={(color) => setColor("Tuner", color)} />
      </div>
      <button className="remove-material-tuner" onClick={() => remove("Tuner")}>
        Remove
      </button>
      <div className="configurator-title-fret">Neck</div>
      <div className="colorpicker-fret">
        <ColorPicker setColor={(color) => setColor("Neck", color)} />
      </div>
      <button className="remove-material-neck" onClick={() => remove("Neck")}>
        Remove
      </button>
      <div className="configurator-title-nut">Nut</div>
      <div className="colorpicker-nut">
        <ColorPicker setColor={(color) => setColor("Nut", color)} />
      </div>
      <button className="remove-material-nut" onClick={() => remove("Nut")}>
        Remove
      </button>
      <div className="configurator-title-fret">Fret</div>
      <div className="colorpicker-fret">
        <ColorPicker setColor={(color) => setColor("Fret", color)} />
      </div>
      <button className="remove-material-fret" onClick={() => remove("Fret")}>
        Remove
      </button>
      <div className="configurator-title-fretBoard">Fret Board</div>
      <div className="colorpicker-fretboard">
        <ColorPicker setColor={(color) => setColor("FretBoard", color)} />
      </div>
      <button
        className="remove-material-fretboard"
        onClick={() => remove("FretBoard")}
      >
        Remove
      </button>
      <div className="configurator-title-body">Body</div>
      <div className="colorpicker-body">
        <ColorPicker setColor={(color) => setColor("Body", color)} />
      </div>
      <button className="remove-material-body" onClick={() => remove("Body")}>
        Remove
      </button>
      <div className="configurator-title-bridge">Bridge</div>
      <div className="colorpicker-bridge">
        <ColorPicker setColor={(color) => setColor("Bridge", color)} />
      </div>
      <button
        className="remove-material-bridge"
        onClick={() => remove("Bridge")}
      >
        Remove
      </button>
      <div className="configurator-title-bridge">Bridge Nut</div>
      <div className="colorpicker-bridgenut">
        <ColorPicker setColor={(color) => setColor("BridgeNut", color)} />
      </div>
      <div>
        <button
          className="remove-material-bridgenut"
          onClick={() => remove("BridgeNut")}
        >
          Remove
        </button>
        <button className="configurator-material-reset" onClick={removeAll}>
          Remove All
        </button>
      </div>
    </div>
  );
};
export default Material;
