import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

// import UploadItem from "./pages/UploadItem";
// import Inventory from "./pages/Inventory";
import Admin from "./pages/Admin";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <HelmetProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/create" element={<Create />} />
            <Route exact path="/list" element={<RecordList />} />
          </Routes>
          <Footer />
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
}
