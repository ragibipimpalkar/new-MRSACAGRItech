import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserPage.css";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="user-container">
      <div className="user-box">
        <h1>Welcome, {user.name}!</h1>
        <p>Email: {user.email}</p>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserPage;
