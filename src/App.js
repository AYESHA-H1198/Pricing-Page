import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import NextPage from './NextPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/next" element={<NextPage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
