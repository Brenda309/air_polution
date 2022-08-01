import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home_page/home';
import NorthCountries from './home_page/NorthCounties';
import EasternCountries from './home_page/eastern';
import DetailsApi from './home_page/DetailsApi';
import SouthCountries from './home_page/Southern';
import WestCountries from './home_page/westen';
import Navbar from './navbar';
import './app.css';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/north_Africa" element={<NorthCountries />} />
        <Route path="/east_Africa" element={<EasternCountries />} />
        <Route path="/south_Africa" element={<SouthCountries />} />
        <Route path="/west_Africa" element={<WestCountries />} />
        <Route path="/details_api_data" element={<DetailsApi />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
