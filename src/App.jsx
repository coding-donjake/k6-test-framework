import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

const isDev = process.env.NODE_ENV !== 'production';
const Router = isDev ? BrowserRouter : HashRouter;


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={null} />
        <Route path="/about" element={null} />
      </Routes>
    </Router>
  )
};

export default App;
