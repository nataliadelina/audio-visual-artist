import { BrowserRouter } from 'react-router-dom';
import RoutesAll from './RoutesAll';
import Header from './components/Header';
import './style/App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <RoutesAll />
      </div>
    </BrowserRouter>
  );
}

export default App;
