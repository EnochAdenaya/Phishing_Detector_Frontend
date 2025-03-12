import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const PhishingDetector = () => {
    const [email, setEmail] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const checkEmail = async () => {
        setError(null); // Reset error before making a request
        try {
            const response = await axios.post("http://127.0.0.1:5000/predict", {
                email: email
            });
            setResult(response.data);
        } catch (error) {
            console.error("Error:", error);
            if (error.response) {
                setError("Server responded with an error. Please try again.");
            } else if (error.request) {
                setError("Backend is not available. Please try again later");
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="detector">
            <h2>Phishing Email Detector</h2>
            <textarea
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter email content or upload a file..."
            />
            <br/>
            <input 
                className="file-upload"
                type="file"
                onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => setEmail(e.target.result);
                        reader.readAsText(file);
                    }
                }}
            />
            <br/>
            <button className="btn-check" onClick={checkEmail}>Check Email</button>

            {error && <p className="error" style={{ color: "red" }}>{error}</p>}

            {result && result.prediction && (
                <div className="result">
                    <p>
                        Prediction: <span style={{ color: result.prediction === "Phishing" ? "red" : "green" }}>
                            {result.prediction}
                        </span>
                    </p>
                    <p>Confidence: {result.confidence?.toFixed(2)}</p>
                </div>
            )}

            <div>
                <Link to="/">
                    <button>Back to Dashboard</button>
                </Link>
            </div>
        </div>
    );
};

export default PhishingDetector;
