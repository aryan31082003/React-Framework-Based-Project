

import './App.css';
import React, { useState } from 'react';
import LoadingBar from "react-top-loading-bar";
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [progress, setProgress] = useState(0);
  const apikey = process.env.REACT_APP_API_KEY;

  return (
    <Router>
      <Navbar />
      <LoadingBar color="#f11946" progress={progress} />
      <Routes>
        <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" country="us" category="general" />} />
        <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" country="us" category="sports" />} />
        <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" country="us" category="entertainment" />} />
        <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" country="us" category="business" />} />
        <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" country="us" category="health" />} />
        <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" country="us" category="technology" />} />
        <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" country="us" category="science" />} />
      </Routes>
    </Router>
  );
}

export default App;

