import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route 
              path="/" 
              element={<ItemListContainer message="¡Bienvenido a GameVault!" />} 
            />
            <Route 
              path="/monitores" 
              element={<ItemListContainer message="Explora nuestros monitores gamer" />} 
            />
            <Route 
              path="/consolas" 
              element={<ItemListContainer message="Encuentra las mejores consolas" />} 
            />
            <Route 
              path="/computadoras" 
              element={<ItemListContainer message="PCs de alto rendimiento" />} 
            />
            <Route 
              path="/accesorios" 
              element={<ItemListContainer message="Accesorios para mejorar tu setup" />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
