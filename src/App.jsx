import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AdvancedSearch from "./pages/AdvancedSearch";
import TenderListingPage from "./pages/TenderListingPage";
import ContactUsPage from "./pages/ContactPage";

const App = () => {
  

  return (
   
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advance-search" element={<AdvancedSearch />} /> 
          <Route path="/tenders" element={<TenderListingPage />} /> 
          <Route path="/contact" element={<ContactUsPage />} /> 

        </Routes>
        <Footer />
      </BrowserRouter>
   
  );
};

export default App;