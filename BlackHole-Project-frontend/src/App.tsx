import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./page/home";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
