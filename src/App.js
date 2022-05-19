import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, color) => {
    setAlert({
      msg: message,
      color: color,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <Navbar title="TextUtils" />
      <Alert alert={alert} setAlert={setAlert} />
      <TextForm title="TextUtils" showAlert={showAlert} />
      <Footer title="TextUtils" />

    </>
  );
}

export default App;
