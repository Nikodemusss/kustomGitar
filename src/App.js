import './App.css';
import Material from './component/configurator/Material';
import TipeGitar from './component/configurator/TipeGitar';
import { TextureProvider} from './component/context/TextureContext';
import ImportGambar from './component/configurator/ImportGambar';
import { ColorProvider } from './component/context/ColorContext';

function App() {
  return (
    <ColorProvider>
    <TextureProvider>
    <div>
      <TipeGitar />
      <Material />
      <ImportGambar/>
    </div>
    </TextureProvider>
    </ColorProvider>
  );
}

export default App;
