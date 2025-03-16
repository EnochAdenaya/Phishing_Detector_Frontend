import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";  // Your Home Page
import PhishingDetector from "./phishingDetector/phishingDetector"; 
import Authentication from "./authentication"; 

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />  
            <Route path="/phishing" element={<PhishingDetector />} />
            <Route path="/auth" element={<Authentication />} />
            {/* <Route path="/notification" element={<Notification />}/> */}
        </Routes>
    );
};

export default AppRouter;