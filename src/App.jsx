import React from "react";
import { CompanyProvider } from "./context/CompanyContext";
import { Toaster } from "react-hot-toast";
import "./styles/global.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <CompanyProvider>
      <Navbar />
      <Home />
      <Footer />
      <Toaster position="top-right" />
    </CompanyProvider>
  );
}

export default App;
