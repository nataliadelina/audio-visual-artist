import { BrowserRouter } from 'react-router-dom';
import RoutesAll from './RoutesAll';
import Navbar from './components/Navbar';
import './style/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <RoutesAll />
      </div>
    </BrowserRouter>
  );
}

export default App;
