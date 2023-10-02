import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { HelmetProvider } from "react-helmet-async";
import Footer from "./components/Footer";

import UploadItem from "./pages/UploadItem";
import Inventory from "./pages/Inventory";
import Admin from "./pages/Admin";
import Edit from "./components/edit";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <HelmetProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/upload" element={<UploadItem />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
          <Footer />
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
}
