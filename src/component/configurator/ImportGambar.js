import { UseTexture } from "../context/TextureContext";
import { useRef } from "react";

const ImportGambar = () => {
  const {
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
  } = UseTexture();

  const tunerInputRef = useRef();
  const neckInputRef = useRef();
  const bodyInputRef = useRef();
  const fretInputRef = useRef();
  const fretboardInputRef = useRef();
  const bridgeInputRef = useRef();
  const bridgenutInputRef = useRef();
  const nutInputRef = useRef();

  const handleFileInput = async (e, setTextureUrl) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const { type } = file;
    const buffer = await file.arrayBuffer();
    const blob = new Blob([buffer], { type });
    const imageUrl = URL.createObjectURL(blob);
    try {
      setTextureUrl(imageUrl);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const remove = (setTextureUrl, inputRef) => {
    setTextureUrl("./plain.jpg");
    if (inputRef.current) {
      inputRef.current.value = null;
    }
  };

  const removeAll = () => {
    setTunerTxt("./plain.jpg");
    setNeckTxt("./plain.jpg");

    setNutTxt("./plain.jpg");

    setFretTxt("./plain.jpg");

    setFretBoardTxt("./plain.jpg");

    setBodyTxt("./plain.jpg");

    setBridgeTxt("./plain.jpg");

    setBridgeNutTxt("./plain.jpg");
  };

  console.log(TunerTxt);
  return (
    <div className="configurator-image">
      <h3>Import Gambar</h3>
      <div className="button-canvas">
        <div className="image-value">
          <h3>Tuner</h3>
          {TunerTxt && (
            <input
              className="configurator-input-image"
              type="file"
              ref={tunerInputRef}
              onChange={(e) => handleFileInput(e, setTunerTxt)}
            />
          )}
          {TunerTxt && (
            <button
              className="configurator-remove-image"
              onClick={() => remove(setTunerTxt, tunerInputRef)}
            >
              Remove
            </button>
          )}
        </div>

        <div className="image-value">
          <h3>Neck</h3>
          {NeckTxt && (
            <input
              className="configurator-input-image"
              type="file"
              ref={neckInputRef}
              onChange={(e) => handleFileInput(e, setNeckTxt)}
            />
          )}
          {NeckTxt && (
            <button
              className="configurator-remove-image"
              onClick={() => remove(setNeckTxt, neckInputRef)}
            >
              Remove
            </button>
          )}
        </div>

        <div className="image-value">
          <h3>Nut</h3>
          {NutTxt && (
            <input
              className="configurator-input-image"
              type="file"
              ref={nutInputRef}
              onChange={(e) => handleFileInput(e, setNutTxt)}
            />
          )}

          {NutTxt && (
            <button
              className="configurator-remove-image"
              onClick={() => remove(setNutTxt, nutInputRef)}
            >
              Remove
            </button>
          )}
        </div>

        <div className="image-value">
          <h3>Fret</h3>
          {FretTxt && (
            <input
              className="configurator-input-image"
              type="file"
              ref={fretInputRef}
              onChange={(e) => handleFileInput(e, setFretTxt)}
            />
          )}

          {FretTxt && (
            <button
              className="configurator-remove-image"
              onClick={() => remove(setFretTxt, fretInputRef)}
            >
              Remove
            </button>
          )}
        </div>

        <div className="image-value">
          <h3>Fret Board</h3>
          {FretBoardTxt && (
            <input
              className="configurator-input-image"
              type="file"
              ref={fretboardInputRef}
              onChange={(e) => handleFileInput(e, setFretBoardTxt)}
            />
          )}
          {FretBoardTxt && (
            <button
              className="configurator-remove-image"
              onClick={() => remove(setFretBoardTxt, fretboardInputRef)}
            >
              Remove
            </button>
          )}
        </div>

        <div className="image-value">
          <h3>Body</h3>
          {BodyTxt && (
            <input
              className="configurator-input-image"
              type="file"
              ref={bodyInputRef}
              onChange={(e) => handleFileInput(e, setBodyTxt)}
            />
          )}
          {BodyTxt && (
            <button
              className="configurator-remove-image"
              onClick={() => remove(setBodyTxt, bodyInputRef)}
            >
              Remove
            </button>
          )}
        </div>

        <div className="image-value">
          <h3>Bridge</h3>
          {BridgeTxt && (
            <input
              className="configurator-input-image"
              type="file"
              ref={bridgeInputRef}
              onChange={(e) => handleFileInput(e, setBridgeTxt)}
            />
          )}
          {BridgeTxt && (
            <button
              className="configurator-remove-image"
              onClick={() => remove(setBridgeTxt, bridgeInputRef)}
            >
              Remove
            </button>
          )}
        </div>

        <div className="image-value">
          <h3>Bridge Nut</h3>
          {BridgeNutTxt && (
            <input
              className="configurator-input-image"
              type="file"
              ref={bridgenutInputRef}
              onChange={(e) => handleFileInput(e, setBridgeNutTxt)}
            />
          )}
          {BridgeNutTxt && (
            <button
              className="configurator-remove-image"
              onClick={() => remove(setBridgeNutTxt, bridgenutInputRef)}
            >
              Remove
            </button>
          )}
        </div>
        <button className="image-removeall" onClick={removeAll}>
          Remove All
        </button>
      </div>
    </div>
  );
};

export default ImportGambar;
