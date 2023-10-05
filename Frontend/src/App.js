// import logo from './logo.svg';
import './App.css';
// import Body from './components/Body';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import TradePage from './TradePage';
import BuyPage from './BuyPage';
import SellPage from './SellPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/dashboard' element={<LandingPage />} />
          <Route path='/trade' element={<TradePage />} />
          <Route path = '/buy'  element={<BuyPage/> }  />
          <Route path = '/sell' element={<SellPage/>} />

        </Routes>

      </Router>


    </div>
  );
}

export default App;
