import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "./firebaseConfig";

const SignIn = () => {
  const navigate = useNavigate();  // Hook to navigate programmatically

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      
      // Redirect to dashboard after login
      navigate("/");
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  useEffect(() => {
    if (auth.currentUser) {
      navigate("/");  // Prevent logged-in users from accessing /auth
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Sign in to continue</h2>
      <button
        onClick={handleGoogleLogin}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
