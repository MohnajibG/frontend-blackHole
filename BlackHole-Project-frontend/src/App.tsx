import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Apod } from "./page/Apod";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/apod" element={<Apod />} />
      </Routes>
    </Router>
  );
};

export default App;
