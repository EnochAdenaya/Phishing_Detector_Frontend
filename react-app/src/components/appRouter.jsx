import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";  // Your Home Page
import PhishingDetector from "./phishingDetector"; 
import SignIn from "./signIn"; 

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />  
            <Route path="/phishing" element={<PhishingDetector />} />
            <Route path="/auth" element={<SignIn />} />
        </Routes>
    );
};

export default AppRouter;
