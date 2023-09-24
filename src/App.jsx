import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { HelmetProvider } from 'react-helmet-async';
import Footer from './components/Footer';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <HelmetProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        </HelmetProvider>
      </BrowserRouter>
    </>
  )
}
