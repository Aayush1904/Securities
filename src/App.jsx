import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalContextProvider } from "./contexts/ModalContext";

// Landing Page
import LandingPage from './pages/LandingPage';

// Learning Pages
import LearningDashboard from './pages/LearningDashboard';
import StockMarketBasics from './pages/learning/StockMarketBasics';
import RiskAssessment from './pages/learning/RiskAssessment';
import AlgoTrading from './pages/learning/AlgoTrading';
import PortfolioDiversification from './pages/learning/PortfolioDiversification';

// Trading Pages
import VirtualTrading from './pages/trading/VirtualTrading';
import TradingSimulator from './pages/trading/TradingSimulator';

// User Pages
import UserDashboard from './pages/user/UserDashboard';
import Profile from './pages/user/Profile';
import Progress from './pages/user/Progress';

// Educational Resources
import SEBIGuidelines from './pages/resources/SEBIGuidelines';
import NISMResources from './pages/resources/NISMResources';
import MarketUpdates from './pages/resources/MarketUpdates';

// Support Pages
import Help from './pages/support/Help';
import Contact from './pages/support/Contact';

function App() {
  return (
    <ModalContextProvider>
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Learning Routes */}
          <Route path="/learn" element={<LearningDashboard />} />
          <Route path="/learn/stock-market-basics" element={<StockMarketBasics />} />
          <Route path="/learn/risk-assessment" element={<RiskAssessment />} />
          <Route path="/learn/algo-trading" element={<AlgoTrading />} />
          <Route path="/learn/portfolio-diversification" element={<PortfolioDiversification />} />
          
          {/* Trading Routes */}
          <Route path="/trading" element={<VirtualTrading />} />
          <Route path="/trading/simulator" element={<TradingSimulator />} />
          
          {/* User Routes */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/progress" element={<Progress />} />
          
          {/* Resources Routes */}
          <Route path="/resources/sebi-guidelines" element={<SEBIGuidelines />} />
          <Route path="/resources/nism" element={<NISMResources />} />
          <Route path="/resources/market-updates" element={<MarketUpdates />} />
          
          {/* Support Routes */}
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ModalContextProvider>
  );
}

export default App;
