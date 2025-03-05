import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Chatbot from "./pages/Chatbot";
import CropRecommendation from "./pages/CropRecommendation";
import Weather from "./pages/Weather";
import Insurance from "./pages/Insurance";
import MarketPrice from "./pages/MarketPrice";
import FarmersCommunity from "./pages/FarmersCommunity";
import './index.css';
import './styles/App.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/croprecommendation" element={<CropRecommendation />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/marketprice" element={<MarketPrice />} />
        <Route path="/farmerscommunity" element={<FarmersCommunity />} />
      </Routes>
    </Router>
  );
};

export default App;
