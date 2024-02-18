import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
      devicePixelRatio;
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#1e2d40";
      showAlert(" Dark Mode ON", "success");
      document.title = "TransText - Dark";
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert(" Dark Mode OFF", "success");
      document.title = "TransText - Light";
    }
  };
  return (
    <Router>
      <Navbar
        title="TransText"
        mode={mode}
        toggleMode={toggleMode}
        about={"About"}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter Text"
                showAlert={showAlert}
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
