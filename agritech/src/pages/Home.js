import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "./About";  // Correct path since both files are in the same folder


// Import images
import backgroundImg from "../assets/manfarm.jpg";
import agriGuideImg from "../assets/agriGuide.jpg";
import chatbotImg from "../assets/chatbot.jpg";
import cropRecImg from "../assets/cropRec.jpg";
import farmersCommImg from "../assets/farmersComm.jpg";
import insuranceImg from "../assets/insurance.jpg";
import marketPriceImg from "../assets/marketPrice.jpg";
import todoListImg from "../assets/todoList.jpg";
import weatherImg from "../assets/weather.jpg";

const Home = () => {
  const modules = [
    { img: agriGuideImg, title: "Agri Guide", desc: "Your ultimate guide to modern farming techniques.", link: "/agri-guide" },
    { img: chatbotImg, title: "Chatbot", desc: "Get instant answers to your farming queries.", link: "/chatbot" },
    { img: cropRecImg, title: "Crop Recommendation", desc: "AI-driven suggestions for the best crops to grow.", link: "/crop-recommendation" },
    { img: farmersCommImg, title: "Farmers Community", desc: "Connect with farmers and share insights.", link: "/farmers-community" },
    { img: insuranceImg, title: "Insurance", desc: "Find the best insurance plans for your crops.", link: "/insurance" },
    { img: marketPriceImg, title: "Market Price", desc: "Get real-time updates on market prices.", link: "/market-price" },
    { img: todoListImg, title: "To-Do List", desc: "Manage your daily farming tasks efficiently.", link: "/todo-list" },
    { img: weatherImg, title: "Weather Forecast", desc: "Accurate weather predictions for better planning.", link: "/weather-forecast" }
  ];

  return (
    <div className="home-container">
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <h1 className="slide-text">Welcome to AgriTech</h1>
        <p className="slide-text">Empowering Farmers with Technology</p>
      </div>

      {/* About Section */}
      <About />

      {/* Cards Section */}
      <div className="card-container">
        {modules.map((module, index) => (
          <Link to={module.link} key={index} className="card">
            <img src={module.img} alt={module.title} />
            <h3>{module.title}</h3>
            <p>{module.desc}</p>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
