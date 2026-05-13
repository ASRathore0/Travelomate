/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SportsLeagues from './pages/SportsLeagues';
import CorporateTeams from './pages/CorporateTeams';
import SelfBookingTool from './pages/SelfBookingTool';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Journey from './pages/Journey';
import Careers from './pages/Careers';
import Auth from './pages/Auth';
import ScrollToTop from './components/ScrollToTop';
import DemoModal from './components/DemoModal';
import { DemoProvider, useDemo } from './lib/DemoContext';

// Solutions Pages
import FinanceTeams from './pages/solutions/FinanceTeams';
import TravelManagers from './pages/solutions/TravelManagers';
import ExecutiveAssistants from './pages/solutions/ExecutiveAssistants';
import HumanResources from './pages/solutions/HumanResources';
import OperationsTeams from './pages/solutions/OperationsTeams';
import Healthcare from './pages/solutions/Healthcare';
import Construction from './pages/solutions/Construction';
import SoftwareTech from './pages/solutions/SoftwareTech';
import Manufacturing from './pages/solutions/Manufacturing';
import TransportationLogistics from './pages/solutions/TransportationLogistics';

function AppContent() {
  const { isOpen, closeDemo } = useDemo();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports-leagues" element={<SportsLeagues />} />
          <Route path="/corporate-teams" element={<CorporateTeams />} />
          <Route path="/self-booking" element={<SelfBookingTool />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Solutions Routes */}
          <Route path="/solutions/finance-teams" element={<FinanceTeams />} />
          <Route path="/solutions/travel-managers" element={<TravelManagers />} />
          <Route path="/solutions/executive-assistants" element={<ExecutiveAssistants />} />
          <Route path="/solutions/human-resources" element={<HumanResources />} />
          <Route path="/solutions/operations-teams" element={<OperationsTeams />} />
          <Route path="/solutions/healthcare" element={<Healthcare />} />
          <Route path="/solutions/construction" element={<Construction />} />
          <Route path="/solutions/software-tech" element={<SoftwareTech />} />
          <Route path="/solutions/manufacturing" element={<Manufacturing />} />
          <Route path="/solutions/transportation-logistics" element={<TransportationLogistics />} />
        </Routes>
      </main>
      <Footer />
      <DemoModal isOpen={isOpen} onClose={closeDemo} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <DemoProvider>
        <ScrollToTop />
        <AppContent />
      </DemoProvider>
    </Router>
  );
}
