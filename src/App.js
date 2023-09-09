import React from 'react';
import Maindesign from './component/Maindesign';
import Product from './component/Product'; // Import the Home component separately

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Maindesign/>
        <Routes>
          <Route path="/product" element={<Product/>} /> {/* Use 'element' instead of 'Component' */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

                        export default App;
