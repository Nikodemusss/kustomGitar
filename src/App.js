import "./App.css";
import { TextureProvider } from "./component/context/TextureContext";
import { ColorProvider } from "./component/context/ColorContext";
import TipeGitar from "./component/configurator/TipeGitar";

function App() {
  return (
    <ColorProvider>
      <TextureProvider>
        <TipeGitar />
      </TextureProvider>
    </ColorProvider>
  );
}

export default App;
