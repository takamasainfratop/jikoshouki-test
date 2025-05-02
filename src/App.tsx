import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './components/Layout';
import Home from './pages/Home';
import WorkHistory from './pages/WorkHistory';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import FAQ from './pages/FAQ';

function App() {
  const location = useLocation();
  
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work-history" element={<WorkHistory />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;