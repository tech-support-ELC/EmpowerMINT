import React from "react";
import { Header, Routes, Footer } from "./index";
<<<<<<< HEAD
import "./style/App.scss";
=======
import "./App.css";
import { AuthProvider } from "./Auth";
>>>>>>> 719d6855b017b0b7042e8ac73f286b378c585e6b

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
