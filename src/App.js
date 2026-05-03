// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InclusiveTestingWebsite from './InclusiveTestingWebsite';
import InstagramRedirect from './InstagramRedirect';
import AboutUs from './AboutUs';
import Ngos from './Ngos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InclusiveTestingWebsite />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* Add other routes as needed */}
        <Route path="/ngos" element={<Ngos/>} />
        <Route path="/blog" element={<InstagramRedirect />} />
        <Route path="/register" element={<div>Registration Page (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
};

export default App;