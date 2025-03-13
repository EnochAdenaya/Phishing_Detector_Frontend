import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./appRouter";

const BACKEND_URL = "https://phishing-detector-backend-cjxp.onrender.com/";

function App() {
    useEffect(() => {
        const pingBackend = () => {
            fetch(BACKEND_URL)
                .then((res) => console.log("Backend Pinged:", res.status))
                .catch((err) => console.error("Ping failed:", err));
        };

        // Ping every 5 minutes (300,000ms)
        const interval = setInterval(pingBackend, 5 * 60 * 1000);

        // Initial ping on component mount
        pingBackend();

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
