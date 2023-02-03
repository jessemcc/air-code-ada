import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import TravelPage from "./pages/TravelPage/TravelPage";
import PromotionsPage from "./pages/PromotionsPage/PromotionsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import DashboardNav from "./components/DashboardNav/DashboardNav";

const App = () => {
  return (
    <Router>
      <DashboardNav />
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
