import { BrowserRouter } from 'react-router-dom';
import RoutesAll from './RoutesAll';
import Header from './components/Header';
import './style/App.css';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <RoutesAll />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
