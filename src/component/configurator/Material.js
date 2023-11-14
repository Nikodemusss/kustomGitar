import { UseCustomization } from "../context/ColorContext";

const Material = () => {

    const {
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
    } = UseCustomization();
    
    return(
        <div className="configurator-section">
            <h3>Pilih Material</h3>
                <div className="configurator-title-tuner">Tuner</div>
                    <div className="configurator-label">
                        {colors.map((item, index) => (
                        <div key={index} className={`item ${item.color === Tuner.color ? "item--active": ""}`} onClick={() => setTuner(item)}>
                        <div className="item-dot" style={{backgroundColor : item.color}}></div>
                        <div className="item-label">{item.name}</div>
                    </div> 
                        ))}
                </div>

                <div className="configurator-title-fret">Neck</div>
                    <div className="configurator-label">
                        {colors.map((item, index) => (
                        <div key={index} className={`item ${item.color === Neck.color ? "item--active": ""}`} onClick={() => setNeck(item)}>
                        <div className="item-dot" style={{backgroundColor : item.color}}></div>
                        <div className="item-label">{item.name}</div>
                    </div>        
                        ))}
                </div>

                <div className="configurator-title-fret">Nut</div>
                    <div className="configurator-label">
                        {colors.map((item, index) => (
                        <div key={index} className={`item ${item.color === Nut.color ? "item--active": ""}`} onClick={() => setNut(item)}>
                         <div className="item-dot" style={{backgroundColor : item.color}}></div>
                        <div className="item-label">{item.name}</div>
                    </div>        
                        ))}
                </div>

                <div className="configurator-title-bridge">Fret</div>
                    <div className="configurator-label">
                        {colors.map((item, index) => (
                        <div key={index} className={`item ${item.color === Fret.color ? "item--active": ""}`} onClick={() => setFret(item)}>
                        <div className="item-dot" style={{backgroundColor : item.color}}></div>
                        <div className="item-label">{item.name}</div>
                        </div>        
                        ))}
                </div>

                <div className="configurator-title-fretBoard">Fret Board</div>
                    <div className="configurator-label">
                        {colors.map((item, index) => (
                        <div key={index} className={`item ${item.color === FretBoard.color ? "item--active": ""}`} onClick={() => setFretBoard(item)}>
                        <div className="item-dot" style={{backgroundColor : item.color}}></div>
                        <div className="item-label">{item.name}</div>
                        </div>        
                        ))}
                </div>

                <div className="configurator-title-body">Body</div>
                    <div className="configurator-label">
                        {colors.map((item, index) => (
                        <div key={index} className={`item ${item.color === Body.color ? "item--active": ""}`} onClick={() => setBody(item)}>
                        <div className="item-dot" style={{backgroundColor : item.color}}></div>
                        <div className="item-label">{item.name}</div>
                        </div>        
                        ))}
                </div>

                <div className="configurator-title-bridge">Bridge</div>
                    <div className="configurator-label">
                        {colors.map((item, index) => (
                        <div key={index} className={`item ${item.color === Bridge.color ? "item--active": ""}`} onClick={() => setBridge(item)}>
                        <div className="item-dot" style={{backgroundColor : item.color}}></div>
                        <div className="item-label">{item.name}</div>
                        </div>        
                        ))}
                </div>

                <div className="configurator-title-bridge">Bridge Nut</div>
                    <div className="configurator-label">
                        {colors.map((item, index) => (
                        <div key={index} className={`item ${item.color === BridgeNut.color ? "item--active": ""}`} onClick={() => setBridgeNut(item)}>
                        <div className="item-dot" style={{backgroundColor : item.color}}></div>
                        <div className="item-label">{item.name}</div>
                        </div>        
                        ))}
                </div>
            </div>
    )
}

export default Material;