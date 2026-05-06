import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WebAppDev from './pages/WebAppDev';
import AIIntegration from './pages/AIIntegration';
import PrintDesign from './pages/PrintDesign';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="web-apps" element={<WebAppDev />} />
          <Route path="ai-integration" element={<AIIntegration />} />
          <Route path="print-design" element={<PrintDesign />} />
          <Route path="contact" element={<Contact />} />
          {/* Fallback for other pages */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
