import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./page/home";
import { Apod } from "./page/Apod";
import { Epic } from "./page/Epic";

import "./App.css";
import { Header } from "./components/header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/epic" element={<Epic />} />
        <Route path="/apod" element={<Apod />} />
      </Routes>
    </Router>
  );
};

export default App;
