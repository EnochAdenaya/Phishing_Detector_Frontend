import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig.jsx";
import { signOut, onAuthStateChanged } from "firebase/auth";
import "./dashboard.css"

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for authentication changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/auth"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/auth"); // Redirect to login page after logout
  };

  return (
    <div className="dashboard-container">

      {user && (
        <div className="user-info">
          <h1 className="user-greeting">Hello, {user.displayName}!</h1>
          <h2 className="dashboard-title">Welcome to Your Dashboard</h2>
          <img 
            src={user.photoURL} 
            alt="Profile" 
            className="user-avatar"
          />
          <button onClick={handleLogout} className="logout-button">Sign Out</button>
        </div>
      )}

      <h2 className="section-title">Phishing Email Detection</h2>
      <p className="description">
        Phishing attacks are a significant threat in the digital world, where attackers deceive individuals into disclosing sensitive information like passwords, credit card details, and other personal data...
      </p>

      <h3 className="how-it-works-title">How it Works:</h3>
      <ul className="how-it-works-list">
        <li>You can either paste the email content directly or upload a file containing the email.</li>
        <li>The detector analyzes the email using the Random Forest model to detect phishing patterns.</li>
        <li>The result will indicate whether the email is likely phishing, along with a confidence score, to help you make an informed decision.</li>
      </ul>
        
      <p className="description">
        Stay secure by using this tool to quickly evaluate suspicious emails and avoid falling victim to online threats.<br/>
        Try out the &nbsp;
        <Link to="/phishing" className="phishing-link">
          Phishing Detector
        </Link>.
      </p>

      {!user && (
        <Link to="/auth">
          <button className="connect-button">Connect Gmail</button>
        </Link>
      )}
    </div>
  );
};

export default Dashboard;
