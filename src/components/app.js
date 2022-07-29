import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home_page/home';
import NorthCountries from './home_page/NorthCounties';
import DetailsCa from './home_page/DetailsCa';
import DetailsSa from './home_page/DetailSa';
import DetailsApi from './home_page/DetailsApi';
import Navbar from './navbar';
import DetailsTc from './home_page/DetailsTc';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/north_Africa" element={<NorthCountries />} />
        <Route path="/details_central_america" element={<DetailsCa />} />
        <Route path="/details_south_america" element={<DetailsSa />} />
        <Route path="/details_the_caribbean" element={<DetailsTc />} />
        <Route path="/details_api_data" element={<DetailsApi />} />
      </Routes>
    </div>
  );
}

export default App;
