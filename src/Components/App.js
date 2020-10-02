import React from "react";
import { Header, Routes, Footer } from "./index";
import "./App.css";
import { AuthProvider } from "./Auth";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
